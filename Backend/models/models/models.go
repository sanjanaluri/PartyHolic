package models

import "time"

type Addresses struct {
	Address_id int     `gorm:"primary_key;type:int;" `
	Lane_one   string  `json:"Lane_one"`
	Lane_two   string  `json:"Lane_two"`
	City       string  `json:"City"`
	State      string  `json:"State"`
	Country    string  `json:"Country"`
	Latitude   float64 `json:"Latitude"`
	Longitude  float64 `json:"Longitude"`
}

type Users struct {
	User_id    int    `gorm:"primary_key;type:int;" json:"User_id"`
	First_name string `json:"First_name"`
	Last_name  string `json:"Last_name"`
	Address_id uint64 `json:"Address_id"`
	Gender     string `json:"Gender"`
	Bio        string `json:"Bio"`
}

type Parties struct {
	Party_id   int    `gorm:"primary_key;type:int;" json:"Party_id"`
	Party_name string `json:"Party_name"`

	Host_id int `json:"Host_id"`

	Address_id int `json:"Address_id"`

	Start_time time.Time `json:"Start_time"`
	End_time   time.Time `json:"End_time"`

	Tags        string `json:"Tags"`
	Description string `json:"Description"`

	Image_id       string `json:"Image_id"`
	Attendee_count int    `json:"interested_people"`

	Longitude float64 `json:"Longitude"`
	Latitude  float32 `json:"Latitude"`
}

type Party struct {
	Party_name string `json:"title"`

	Host_name string `json:"host_name"`

	Attendee_count int `json:"interested_people"`

	Distance float64 `json:"distance_meters"`

	// Tags []Tag `json:"tags"`
}

type Location struct {
	Longitude float64 `json:"longitude"`
	Latitude  float32 `json:"latitude"`
}

type PartiesRequest struct {
	Location      Location `json:"location"`
	User_ID       string   `json:"user_id"`
	Radius_Meters float64  `json:"radius_miles"`
}

type Tag struct {
	Tag_name  string `json:"name"`
	Tag_value string `json:"value"`
}
