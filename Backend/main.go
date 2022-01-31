package main

import (
	"database/database"

	"github.com/gin-gonic/gin"
	"github.com/himakireeti/PartyHolic1/geo"

	"geo/geo"
)

func main() {
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

	r.Get("/person", controllers.getPersons)
	geo.GeoAddress("Gainesvile")

	database.Database_setup()

	// By default it serves on :8080 unless a
	// PORT environment variable was defined.
	r.Run()

}
