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

	db.Debug().AutoMigrate(&models.Addresses{}, &models.Users{}, &models.Parties{}, &models.Location{})
	DB = db

}
