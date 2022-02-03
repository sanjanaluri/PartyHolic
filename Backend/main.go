package main

import (
	"database/database"
	"geo/geo"

	"controllers/controllers"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {

	geo.GeoAddress("Gainesvile")

	database.Database_setup()
	r := gin.Default()

	r.Use(static.Serve("/", static.LocalFile("../Frontend/build", true)))

	r.GET("/api/addresses", controllers.GetAddresses)
	r.GET("/api/addresses/:address_id", controllers.GetAddressById)

	r.POST("/api/addAddress", controllers.AddAddress)

	r.POST("/api/newUser", controllers.AddUser)
	r.POST("/api/newParty", controllers.AddParty)

	r.POST("/api/parties", controllers.GetParties)

	// PORT environment variable was defined.
	r.Run()

}
