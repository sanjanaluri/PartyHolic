package controllers

import (
	"database/database"
	"models/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetAddresses(c *gin.Context) {
	var address models.Addresses
	database.DB.Find(&address)
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

	address := models.Addresses{Lane_one: input.Lane_one,
		Lane_two:  input.Lane_two,
		City:      input.City,
		State:     input.State,
		Country:   input.Country,
		Latitude:  input.Latitude,
		Longitude: input.Longitude,
	}
	database.DB.Create(&address)

	c.JSON(http.StatusOK, gin.H{"message": input})
}

func AddUser(c *gin.Context) {

	var input models.Users
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	user := models.Users{User_id: input.User_id,
		First_name: input.First_name,
		Last_name:  input.Last_name,
		Address_id: input.Address_id,
		Gender:     input.Gender,
		Bio:        input.Bio,
	}

	database.DB.Create(&user)

	c.JSON(http.StatusOK, gin.H{"message2": user})

}

func AddParty(c *gin.Context) {
	var input models.Parties
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// new_address_id = //database fetch

	party := &models.Parties{

		Party_name: input.Party_name,
		Host_id:    input.Host_id,
		Address_id: input.Address_id,

		Tags:        input.Tags,
		Description: input.Description,

		Start_time: input.Start_time,
		End_time:   input.End_time,

		Image_id:       input.Image_id,
		Attendee_count: input.Attendee_count,

		Latitude:  input.Latitude,
		Longitude: input.Longitude,
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

// func deletePerson(c *gin.Context) {
// 	id := c.Param("id")
// 	c.JSON(http.StatusOK, gin.H{"message": "deletePerson " + id + " Called"})
// }

// func options(c *gin.Context) {
// 	c.JSON(http.StatusOK, gin.H{"message": "options Called"})
// }
