package main

import (
	"database/database"
	"geo/geo"

	"github.com/gin-gonic/gin"

	"controllers/controllers"
)

func main() {

	geo.GeoAddress("Gainesvile")

	database.Database_setup()
	r := gin.Default()

	r.GET("/addresses", controllers.GetAddresses)
	r.GET("/addresses/:address_id", controllers.GetAddressById)

	r.POST("/addAddress", controllers.AddAddress)

	r.POST("/newUser", controllers.AddUser)
	r.POST("/newParty", controllers.AddParty)

	// By default it serves on :8080 unless a
	// PORT environment variable was defined.
	r.Run()

}
