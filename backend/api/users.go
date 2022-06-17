package api

import (
	"encoding/json"
	"net/http"
)

type UsersListErrorResponse struct {
	Error string `json:"error"`
}

type User struct {
	ID       string `json:"id"`
	Username string `json:"username"`
	Password string `json:"password"`
	Email    string `json:"email"`
	NoTelp   int    `json:"notelp"`
	Role     string `json:"role"`
	Loggedin bool   `json:"loggedin"`
}

type UsersListSuccessResponse struct {
	Users []User `json:"users"`
}

func (api *API) userList(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	response := UsersListSuccessResponse{}
	response.Users = make([]User, 0)

	users, err := api.usersRepo.FetchUsers()

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		encoder.Encode(UsersListErrorResponse{Error: err.Error()})
		return
	}

	for _, user := range users {
		response.Users = append(response.Users, User{
			Username: user.Username,
			Email:    user.Email,
			Password: user.Password,
			NoTelp:   user.NoTelp,
			Role:     user.Role,
			Loggedin: user.Loggedin,
		})
	}

	encoder.Encode(response)
}
