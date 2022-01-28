package database

import (
	"fmt"

	"github.com/jinzhu/gorm"
	_ "github.com/mattn/go-sqlite3"
)

func checkErr(err error, sucess_message string) {
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(sucess_message)
	}
}

type Addresses struct {
	address_id int `gorm:"primary_key;type:int;"`
	lane_one   string
	lane_two   string
	city       string
	state      string
	country    string
	latitude   float64
	longitude  float64
}

type Users struct {
	user_id    int `gorm:"primary_key;type:int;"`
	first_name string
	last_name  string
	address_id Addresses `gorm:"ForeignKey:address_id"`
	gender     string
	bio        string
}

type parties struct {
	party_id   int `gorm:"primary_key;type:int;"`
	party_name string
	host_id    Users     `gorm:"ForeignKey:address_id"`
	address_id Addresses `gorm:"ForeignKey:address_id"`
	start_time string
	end_time   string

	tags        string
	description string

	image_id       string
	attendee_count string
}

func Database_setup() {

	db, err := gorm.Open("sqlite3", "./partyholic.db")
	checkErr(err, "Database Created")
	defer db.Close()

	db.DropTableIfExists(&Addresses{})
	db.Debug().AutoMigrate(&Addresses{})

	// db.Debug().CreateTable(&Addresses{})

	address := Addresses{
		address_id: 1,
		lane_one:   "one",
		lane_two:   "two",
		city:       "gainesville",
		state:      "FL",
		country:    "USA",
		latitude:   29.654,
		longitude:  -89.64,
	}
	db.Debug().Create(&address)
	db.Debug().Save(&address)

}
