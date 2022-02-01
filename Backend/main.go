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

	r.GET("/api/addresses", controllers.GetAddresses)
	r.GET("/api/addresses/:address_id", controllers.GetAddressById)

	r.POST("/api/addAddress", controllers.AddAddress)

	r.POST("/api/newUser", controllers.AddUser)
	r.POST("/api/newParty", controllers.AddParty)

	r.POST("/api/parties", controllers.GetParties)

	// By default it serves on :8080 unless a
	// PORT environment variable was defined.
	r.Run()

}
