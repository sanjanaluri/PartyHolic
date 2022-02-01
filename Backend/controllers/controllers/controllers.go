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

	c.JSON(http.StatusOK, gin.H{"message": address})
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

func updatePerson(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "updatePerson Called"})
}

func deletePerson(c *gin.Context) {
	id := c.Param("id")
	c.JSON(http.StatusOK, gin.H{"message": "deletePerson " + id + " Called"})
}

func options(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "options Called"})
}
