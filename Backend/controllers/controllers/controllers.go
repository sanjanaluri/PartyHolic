package controllers

import (
	"database/database"
	"models/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Returns list of  all parties within user location radius

func GetParties(c *gin.Context) {
	var request models.PartiesRequest
	var parties []models.Party

	c.BindJSON(&request)

	// if err := database.DB.Where("longitude = ?", request.Location.Longitude).Find(&parties).Error; err != nil {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
	// 	return
	// }

	//distance_string := "(((acos(sin((?*pi()/180)) * sin((latitude*pi()/180))+cos((?*pi()/180))*cos((latitude*pi()/180))*cos(((?-longitude)*pi()/180))))*180/pi())*60*1.1515*1609.344)"
	database.DB.Raw("SELECT party_name, host_name, attendee_count, latitude AS distance FROM parties WHERE distance < ? ORDER BY distance ASC LIMIT 20;", request.Radius_Meters).Scan(&parties)

	c.JSON(http.StatusOK, gin.H{"parties": parties})

}
