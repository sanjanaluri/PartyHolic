package test

import (
	"controllers/controllers"
	"database/database"
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"gotest.tools/assert"
	"net/http"
	"net/http/httptest"
	"net/url"
	"strings"
	"testing"
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

	c.Request, _ = http.NewRequest("POST", "api/parties", strings.NewReader(data.Encode()))
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
