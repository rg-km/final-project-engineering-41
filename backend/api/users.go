package api

import (
	"encoding/json"
	"net/http"
	"strconv"
)

type UsersListErrorResponse struct {
	Error string `json:"error"`
}

type User struct {
	ID       string `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
	NoTelp   string `json:"notelp"`
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
			ID:       strconv.Itoa(int(user.ID)),
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
func (api *API) userbyrole(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	response := UsersListSuccessResponse{}
	response.Users = make([]User, 0)

	role := req.URL.Query().Get("role")

	users, err := api.usersRepo.FetchUserByRole(role)
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(UsersListErrorResponse{Error: err.Error()})
			return
		}
	}()
	if err != nil {
		return
	}

	for _, user := range users {
		response.Users = append(response.Users, User{
			ID:       strconv.Itoa(int(user.ID)),
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
func (api *API) userbyid(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	response := UsersListSuccessResponse{}
	response.Users = make([]User, 0)

	id := req.URL.Query().Get("id")
	idInt, err := strconv.Atoi(id)

	users, err := api.usersRepo.FetchUserByID(int64(idInt))

	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(UsersListErrorResponse{Error: err.Error()})
			return
		}
	}()
	if err != nil {
		return
	}

	for _, user := range users {
		response.Users = append(response.Users, User{
			ID:       strconv.Itoa(int(user.ID)),
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
func (api *API) userbyusername(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	response := UsersListSuccessResponse{}
	response.Users = make([]User, 0)

	username := req.URL.Query().Get("username")

	users, err := api.usersRepo.FetchUserByUsername(username)
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(UsersListErrorResponse{Error: err.Error()})
			return
		}
	}()
	if err != nil {
		return
	}

	for _, user := range users {
		response.Users = append(response.Users, User{
			ID:       strconv.Itoa(int(user.ID)),
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
