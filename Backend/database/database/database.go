package database

import (
	"fmt"
	"models/models"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func checkErr(err error, sucess_message string) {
	if err != nil {
		fmt.Println(err, " ", sucess_message)
	}
}

var DB *gorm.DB

func GetDB() *gorm.DB {
	Database_setup()
	return DB
}

func Database_setup() {

	db, err := gorm.Open(sqlite.Open("partyholic.db"), &gorm.Config{})
	checkErr(err, "Database Created")
	fmt.Println(db)

	db.Debug().AutoMigrate(&models.Addresses{})

	// db.DropTableIfExists(&models.Addresses{})

	// db.Debug().CreateTable(&models.Addresses{})

	DB = db

	// address := Addresses{
	// 	address_id: 1,
	// 	lane_one:   "one",
	// 	lane_two:   "two",
	// 	city:       "gainesville",
	// 	state:      "FL",
	// 	country:    "USA",
	// 	latitude:   29.654,
	// 	longitude:  -89.64,
	// }
	// db.Debug().Create(&address)
	// db.Debug().Save(&address)

}
