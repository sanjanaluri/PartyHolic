package database

import (
	"fmt"
	"models/models"
	"gorm.io/driver/mysql"
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

	dsn := "root:password@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local"
    db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	checkErr(err, "Database Created")

	db.Debug().AutoMigrate(&models.Addresses{}, &models.Users{}, &models.Parties{}, &models.Location{})
	DB = db

}
