package controllers

import (
	"database/database"
	"database/sql"
	"fmt"
	"geo/geo"
	"models/models"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

func GetAddresses(c *gin.Context) {
	var address []models.Addresses
	database.DB.Raw("Select * from addresses").Scan(&address)
	c.JSON(http.StatusOK, gin.H{"message": &address})
}

func GetAddressById(c *gin.Context) {
	var address models.Addresses

	if err := database.DB.Where("address_id = ?", c.Param("address_id")).First(&address).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": address})
}

func AddAddress(c *gin.Context) {
	var input models.Addresses
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	address_string := string(input.Lane_apt + "," + input.City + ", " + input.State + ", " + input.Country)
	location := (geo.GeoAddress(address_string))

	address := models.Addresses{Lane_apt: input.Lane_apt,
		City:      input.City,
		State:     input.State,
		Country:   input.Country,
		Latitude:  location[0],
		Longitude: location[1],
	}
	database.DB.Create(&address)

	c.JSON(http.StatusOK, gin.H{"message": input})
}

// register
func AddUser(c *gin.Context) {

	var input models.UserAdd

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var password, _ = EncryptPassword(input.Password)

	var latLon = geo.GeoAddress(input.Lane_apt + " " + input.City + " " + input.State + " " + input.Country)

	type AddressTemp struct {
		Address_id uint64
	}
	var ip AddressTemp

	database.DB.Table("addresses").Select("address_id").Where("latitude = ? and longitude = ?", latLon[0], latLon[1]).Find(&ip)

	if ip.Address_id == 0 {
		address := models.Addresses{Lane_apt: input.Lane_apt,
			City:      input.City,
			State:     input.State,
			Country:   input.Country,
			Latitude:  latLon[0],
			Longitude: latLon[1],
		}

		database.DB.Create(&address)
		database.DB.Table("addresses").Select("address_id").Where("latitude = ? and longitude = ?", latLon[0], latLon[1]).Find(&ip)

	}

	user := models.Users{
		First_name: input.First_name,
		Last_name:  input.Last_name,
		Address_id: ip.Address_id,
		Gender:     input.Gender,
		Bio:        input.Bio,
		Email:      input.Email,
		Password:   password,
	}

	database.DB.Create(&user)

	c.JSON(http.StatusOK, gin.H{"message2": user})

}

func AddParty(c *gin.Context) {
	var input models.PartyTemp
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	var latLon = geo.GeoAddress(input.Lane_apt + " " + input.City + " " + input.State + " " + input.Country)

	type AddressTemp struct {
		Address_id int
	}

	var ip AddressTemp

	database.DB.Table("addresses").Select("address_id").Where("latitude = ? and longitude = ?", latLon[0], latLon[1]).Find(&ip)
	if ip.Address_id == 0 {
		address := models.Addresses{Lane_apt: input.Lane_apt,
			City:      input.City,
			State:     input.State,
			Country:   input.Country,
			Latitude:  latLon[0],
			Longitude: latLon[1],
		}

		database.DB.Create(&address)
		database.DB.Table("addresses").Select("address_id").Where("latitude = ? and longitude = ?", latLon[0], latLon[1]).Find(&ip)

	}

	const layout = "Jan 2, 2006 3:04 pm"
	var start, _ = time.Parse(layout, input.Start_time)
	var end, _ = time.Parse(layout, input.End_time)
	//fmt.Printf(latLon[0] + "")
	//fmt.Print(latLon[1] )
	party := &models.Parties{

		Party_name: input.Party_name,
		Host_id:    input.Host_id,
		Address_id: ip.Address_id,

		Start_time: start,
		End_time:   end,

		Tags:        input.Tags,
		Description: input.Description,

		Image_id:       "127045.jpg",
		Attendee_count: 0,

		Latitude:  latLon[0],
		Longitude: latLon[0],
	}

	database.DB.Create(&party)

	c.JSON(http.StatusOK, gin.H{"message": party})

}

func GetParties(c *gin.Context) {
	var request models.PartiesRequest
	var parties []models.Party

	c.BindJSON(&request)

	distance_calculation := "(((acos(sin((?*3.414/180)) * sin((p.latitude*3.414/180))+cos((?*3.414/180))*cos((p.latitude*3.414/180))*cos(((?-p.longitude)*3.414/180))))*180/3.414)*60*1.1515*1609.344)/1609.34"
	distance_string := "select p.party_id, p.Party_name, concat_ws(' ', u.first_name, u.last_name) as Host_name, p.attendee_count, round(" + distance_calculation + ",2) as Distance, p.image_id from parties p join users u on p.host_id = u.user_id order by 4 limit 20"

	database.DB.Raw(distance_string, request.Location.Latitude, request.Location.Latitude, request.Location.Longitude).Scan(&parties)
	c.JSON(http.StatusOK, gin.H{"parties": parties})

}

func GetParty(c *gin.Context) {
	var party_details models.FullPartyDetails

	party_columns := "parties.Party_id, parties.party_name, parties.Start_time, parties.end_time, parties.tags, parties.description, parties.image_id, parties.attendee_count as interested_people,"
	user_columns := "users.first_name, users.last_name,"
	address_columns := "addresses.Lane_apt, addresses.City, addresses.State, addresses.Country, addresses.Latitude, addresses.Longitude"

	user_join := "JOIN users on users.user_id = parties.host_id"
	address_join := "Join addresses on addresses.address_id = parties.address_id"

	database.DB.Table("parties").Select(party_columns+user_columns+address_columns).Where("parties.party_id = ?", c.Param("party_id")).Joins(user_join).Joins(address_join).Find(&party_details)

	c.JSON(http.StatusOK, gin.H{"data": party_details})

}

func CancelParty(c *gin.Context) {
	id := c.Param("party_id")

	sql_connection, err2 := sql.Open("mysql", "root:@tcp(0.0.0.0:3306)/partyholic")
	res, err := sql_connection.Query("insert into cancelled_parties (select * from parties where party_id=?)", id)
	defer sql_connection.Close()
	fmt.Println(res, err2, err)

	database.DB.Delete(&models.Parties{}, id)

}

func AttendParty(c *gin.Context) {
	var attendee models.AttendeeList
	c.BindJSON(&attendee)
	database.DB.Create(&attendee)

	var count int

	sql_connection, _ := sql.Open("mysql", "root:@tcp(0.0.0.0:3306)/partyholic")
	sql_connection.QueryRow("select count(distinct user_id) from attendee_lists where party_id=?", attendee.Party_id).Scan(&count)
	sql_connection.Query("update parties set attendee_count = ? where party_id =?", count, attendee.Party_id)
	defer sql_connection.Close()

}

func CancelAttendance(c *gin.Context) {
	var attendee models.AttendeeList
	c.BindJSON(&attendee)

	database.DB.Where("user_id = ? and party_id = ?", attendee.User_id, attendee.Party_id).Delete(models.AttendeeList{})

	var count int
	sql_connection, _ := sql.Open("mysql", "root:@tcp(0.0.0.0:3306)/partyholic")
	sql_connection.QueryRow("select count(party_id) from attendee_lists where party_id=?", attendee.Party_id).Scan(&count)
	fmt.Println(count)
	sql_connection.Query("update parties set attendee_count = ? where party_id =?", count, attendee.Party_id)
	defer sql_connection.Close()
	c.JSON(http.StatusOK, gin.H{"data": attendee})

}

func UserLogin(c *gin.Context) {

	var input models.EmailPass
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	fmt.Println(input)

	user, valid := TryLogin(input.Email, input.Password)

	if valid != false {
		c.JSON(http.StatusOK, gin.H{"user": "", "Status": "Invalid Information"})
	}

	c.JSON(http.StatusOK, gin.H{"user": user, "Status": "Success Login"})
}

func EncryptPassword(pass string) (string, error) {
	cost := 8
	bytes, err := bcrypt.GenerateFromPassword([]byte(pass), cost)
	return string(bytes), err

}

func CheckUserExists(email string) (models.Users, bool, int) {

	var result models.Users

	if err := database.DB.Where("email = ?", email).First(&result).Error; err != nil {
		return result, false, result.User_id
	}
	return result, true, result.User_id
}

func TryLogin(email string, password string) (models.Users, bool) {
	use, found, _ := CheckUserExists(email)
	if found == false {
		return use, false
	}
	passwordBytes := []byte(password)
	passwordBD := []byte(use.Password)
	err := bcrypt.CompareHashAndPassword(passwordBD, passwordBytes)
	if err != nil {
		return use, false
	}
	return use, true
}
