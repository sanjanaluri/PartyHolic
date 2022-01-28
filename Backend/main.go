package main

import (
	"github.com/himakireeti/PartyHolic/geo"
	"github.com/himakireeti/PartyHolic/server"
)

func main() {
	// fmt.Println("Server starting...")
	geo.GeoAddress("309 Sw 16th ave apt 219, Gainesville, FL 32608")
	server.Database_setup()
}
