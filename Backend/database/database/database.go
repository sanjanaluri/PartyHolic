package database

import (
	"fmt"
	"models/models"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func checkErr(err error, error_message string) {
	if err != nil {
		fmt.Println(err, " ", error_message)
	}
}

var DB *gorm.DB

func GetDB() *gorm.DB {
	Database_setup()
	return DB
}

func Database_setup() {

	dsn := "root:@tcp(127.0.0.1:3306)/partyholic?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	checkErr(err, "Database Created")

	// if DB.Migrator().HasTable(&models.Addresses{}) {
	// 	DB.Migrator().DropTable(&models.Addresses{})
	// }

	// if DB.Migrator().HasTable(&models.Users{}) {
	// 	DB.Migrator().DropTable(&models.Users{})
	// }

	// if DB.Migrator().HasTable(&models.Parties{}) {
	// 	DB.Migrator().DropTable(&models.Parties{})
	// }

	// if DB.Migrator().HasTable(&models.Location{}) {
	// 	DB.Migrator().DropTable(&models.Location{})
	// }

	db.Debug().AutoMigrate(&models.Addresses{}, &models.Users{}, &models.Parties{}, &models.Location{})
	DB = db

}
