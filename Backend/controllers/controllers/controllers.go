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

	distance_calculation := "(((acos(sin((?*3.414/180)) * sin((p.latitude*3.414/180))+cos((?*3.414/180))*cos((p.latitude*3.414/180))*cos(((?-p.longitude)*3.414/180))))*180/3.414)*60*1.1515*1609.344)/1609.34 as Distance"
	distance_string := "select p.Party_name, concat_ws(' ', u.first_name, u.last_name) as Host_name, p.attendee_count, " + distance_calculation + ", p.image_id from parties p join users u on p.host_id = u.user_id order by 4 limit 20"

	database.DB.Raw(distance_string, request.Location.Latitude, request.Location.Latitude, request.Location.Longitude).Scan(&parties)
	c.JSON(http.StatusOK, gin.H{"parties": parties})

}
