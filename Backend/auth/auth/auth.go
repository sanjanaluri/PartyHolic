package auth

import (
	"time"
	jwt "github.com/dgrijalva/jwt-go"
	"models/models"
)

//Generates a JSON Web Token which is valid through out the login session
func GenerateJWT(t models.Users) (string, error) {
	myKey := []byte("MastersofDeveleopment_groupofFacebook")
	payload := jwt.MapClaims{
		"email":     t.Email,
		"name":      t.First_name,
		"lastname":  t.Last_name,
		"_id":       t.User_id.Hex(),
		"exp":       time.Now().Add(time.Hour * 24).Unix(),
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, payload)
	tokenStr, err := token.SignedString(myKey)
	if err != nil {
		return tokenStr, err
	}
	return tokenStr, nil