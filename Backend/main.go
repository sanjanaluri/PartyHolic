package main

import (
	"./pkg/utils/geo"
	"./pkg/server"
)

func main() {
	// fmt.Println("Server starting...")
	geo.GeoAddress("309 Sw 16th ave apt 219, Gainesville, FL 32608")
	server.Database_setup()
}
