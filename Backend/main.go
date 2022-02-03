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

	r.POST("/api/parties", controllers.GetParties)

	// By default it serves on :8080 unless a
	// PORT environment variable was defined.
	r.Run()

}
