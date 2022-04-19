package test

import (
	"controllers/controllers"
	"database/database"
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/httptest"
	"net/url"
	"strings"
	"testing"

	"github.com/gin-gonic/gin"
	"gotest.tools/assert"
)

// run - bash clear_database.sh
// run - go run main.go
// run - bash populate_database.sh

func TestPartiesAPI(t *testing.T) {
	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)

	data := url.Values{}
	data.Set("name", "foo")
	data.Set("surname", "bar")
	database.Database_setup()

	c.Request, _ = http.NewRequest("POST", "api/parties", strings.NewReader(data.Encode()))
	c.Request.Header.Set("X-Forwarded-For", "127.0.0.1")

	controllers.GetParties(c)
	//assert.Equal(t, 200, w.Code)
	var response gin.H
	err := json.Unmarshal(w.Body.Bytes(), &response)
	if err != nil {
		t.Fatal(err)
	}

	_, exists := response["parties"]
	// Make some assertions on the correctness of the response.

	assert.Equal(t, exists, true)
}

func TestGetPartyAPI(t *testing.T) {
	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)

	data := url.Values{}
	data.Set("party_id", "2")
	data.Set("surname", "bar")
	database.Database_setup()

	c.Request, _ = http.NewRequest("POST", "api/getParty/3", strings.NewReader(data.Encode()))
	c.Request.Header.Set("X-Forwarded-For", "127.0.0.1")

	controllers.GetParty(c)
	//assert.Equal(t, 200, w.Code)
	var response gin.H
	err := json.Unmarshal(w.Body.Bytes(), &response)
	if err != nil {
		t.Fatal(err)
	}

	_, exists := response["data"]
	fmt.Println("")
	// Make some assertions on the correctness of the response.

	assert.Equal(t, exists, true)
}

func TestGetAddressesAPI(t *testing.T) {
	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)

	data := url.Values{}
	data.Set("party_id", "3")
	data.Set("surname", "bar")
	database.Database_setup()

	c.Request, _ = http.NewRequest("POST", "api/addresses", strings.NewReader(data.Encode()))
	c.Request.Header.Set("X-Forwarded-For", "127.0.0.1")

	controllers.GetAddresses(c)
	//assert.Equal(t, 200, w.Code)
	var response gin.H
	err := json.Unmarshal(w.Body.Bytes(), &response)
	if err != nil {
		t.Fatal(err)
	}

	_, exists := response["message"]
	fmt.Println("")
	// Make some assertions on the correctness of the response.

	assert.Equal(t, exists, true)
}

func TestAddAddressAPI(t *testing.T) {
	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)

	data := url.Values{}
	data.Set("party_id", "3")
	data.Set("addr", "3800 SW 34TH ST 32608")
	database.Database_setup()

	c.Request, _ = http.NewRequest("POST", "api/addresses", strings.NewReader(data.Encode()))
	c.Request.Header.Set("X-Forwarded-For", "127.0.0.1")

	controllers.GetAddresses(c)
	//assert.Equal(t, 200, w.Code)
	var response gin.H
	err := json.Unmarshal(w.Body.Bytes(), &response)
	if err != nil {
		t.Fatal(err)
	}

	_, exists := response["message"]
	fmt.Println("")
	// Make some assertions on the correctness of the response.

	assert.Equal(t, exists, true)
}

func TestGetPartyByIDAPI(t *testing.T) {
	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)

	data := url.Values{}
	data.Set("party_id", "2")
	database.Database_setup()

	c.Request, _ = http.NewRequest("POST", "api/getParty/3", strings.NewReader(data.Encode()))
	c.Request.Header.Set("X-Forwarded-For", "127.0.0.1")

	controllers.GetParty(c)
	//assert.Equal(t, 200, w.Code)
	var response gin.H
	err := json.Unmarshal(w.Body.Bytes(), &response)
	if err != nil {
		t.Fatal(err)
	}

	_, exists := response["data"]
	fmt.Println("")
	// Make some assertions on the correctness of the response.

	assert.Equal(t, exists, true)
}

func TestEditPartyAPI(t *testing.T) {
	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)

	data := url.Values{}
	data.Set("party_id", "3")
	data.Set("details", "best party ever")
	database.Database_setup()

	c.Request, _ = http.NewRequest("POST", "api/addresses", strings.NewReader(data.Encode()))
	c.Request.Header.Set("X-Forwarded-For", "127.0.0.1")

	controllers.GetAddresses(c)
	//assert.Equal(t, 200, w.Code)
	var response gin.H
	err := json.Unmarshal(w.Body.Bytes(), &response)
	if err != nil {
		t.Fatal(err)
	}

	_, exists := response["message"]
	fmt.Println("")
	// Make some assertions on the correctness of the response.

	assert.Equal(t, exists, true)
}

func TestDeletePartyAPI(t *testing.T) {
	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)

	data := url.Values{}
	data.Set("party_id", "2")
	data.Set("user_id", "4")
	database.Database_setup()

	c.Request, _ = http.NewRequest("POST", "api/getParty/3", strings.NewReader(data.Encode()))
	c.Request.Header.Set("X-Forwarded-For", "127.0.0.1")

	controllers.GetParty(c)
	//assert.Equal(t, 200, w.Code)
	var response gin.H
	err := json.Unmarshal(w.Body.Bytes(), &response)
	if err != nil {
		t.Fatal(err)
	}

	_, exists := response["data"]
	fmt.Println("")
	// Make some assertions on the correctness of the response.

	assert.Equal(t, exists, true)
}

func TestAttendPartyAPI(t *testing.T) {
	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)

	data := url.Values{}
	data.Set("party_id", "3")
	data.Set("user_id", "4")
	database.Database_setup()

	c.Request, _ = http.NewRequest("POST", "api/addresses", strings.NewReader(data.Encode()))
	c.Request.Header.Set("X-Forwarded-For", "127.0.0.1")

	controllers.GetAddresses(c)
	//assert.Equal(t, 200, w.Code)
	var response gin.H
	err := json.Unmarshal(w.Body.Bytes(), &response)
	if err != nil {
		t.Fatal(err)
	}

	_, exists := response["message"]
	fmt.Println("")
	// Make some assertions on the correctness of the response.

	assert.Equal(t, exists, true)
}

//
func CancelAttendanceAPI(t *testing.T) {
	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)

	data := url.Values{}
	data.Set("party_id", "3")
	data.Set("user_id", "4")
	database.Database_setup()

	c.Request, _ = http.NewRequest("POST", "api/addresses", strings.NewReader(data.Encode()))
	c.Request.Header.Set("X-Forwarded-For", "127.0.0.1")

	controllers.CancelAttendance(c)
	//assert.Equal(t, 200, w.Code)
	var response gin.H
	err := json.Unmarshal(w.Body.Bytes(), &response)
	if err != nil {
		t.Fatal(err)
	}

	_, exists := response["message"]
	fmt.Println("")
	// Make some assertions on the correctness of the response.

	assert.Equal(t, exists, true)
}

//Checking User login
func UserLoginAPI(t *testing.T) {
	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)

	data := url.Values{}
	data.Set("email", "1")
	data.Set("password", "1")
	database.Database_setup()

	c.Request, _ = http.NewRequest("POST", "api/addresses", strings.NewReader(data.Encode()))
	c.Request.Header.Set("X-Forwarded-For", "127.0.0.1")

	controllers.UserLogin(c)
	//assert.Equal(t, 200, w.Code)
	var response gin.H
	err := json.Unmarshal(w.Body.Bytes(), &response)
	if err != nil {
		t.Fatal(err)
	}

	_, exists := response["message"]
	fmt.Println("")
	// Make some assertions on the correctness of the response.

	assert.Equal(t, exists, true)
}
