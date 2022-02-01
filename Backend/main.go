package main

import (
	"database/database"
	"geo/geo"

	"github.com/gin-gonic/gin"

	"controllers/controllers"
	"database/database"
)

func main() {

	geo.GeoAddress("Gainesvile")

	database.Database_setup()
	r := gin.Default()

	// API v1
	// v1 := r.Group("/api/v1")
	// {
	// 	v1.GET("person", controllers.getPersons)
	// 	// v1.GET("person/:id", getPersonById)
	// 	// v1.POST("person", addPerson)
	// 	// v1.PUT("person/:id", updatePerson)
	// 	// v1.DELETE("person/:id", deletePerson)
	// 	// v1.OPTIONS("person", options)
	// }

	r.GET("/addresses", controllers.GetAddresses)
	r.GET("/addresses/:address_id", controllers.GetAddressById)

	r.POST("/addAddress", controllers.AddAddress)

	r.POST("/newUser", controllers.AddUser)
	r.POST("/newParty", controllers.AddParty)

	// By default it serves on :8080 unless a
	// PORT environment variable was defined.
	r.Run()

}
