package models

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
	Address_id uint64
	Address    Addresses `gorm:"ForeignKey:Address_id" json:"Address"`
	Gender     string    `json:"Gender"`
	Bio        string    `json:"Bio"`
}

type Parties struct {
	Party_id   int    `gorm:"primary_key;type:int;" json:"Party_id"`
	Party_name string `json:"Party_name"`

	Host_id int `json:"Host_id"`
	// User    Users  `gorm:"ForeignKey:User_id"`

	Address_id int `json:"Address_id"`
	// Address    Addresses `gorm:"ForeignKey:Address_id"`

	Start_time string `json:"Start_time"`
	End_time   string `json:"End_time"`

	Tags        string `json:"Tags"`
	Description string `json:"Description"`

	Image_id       string `json:"Image_id"`
	Attendee_count int    `json:"Attendee_count"`
}
