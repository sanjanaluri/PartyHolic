package models

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
	attendee_count int
}
