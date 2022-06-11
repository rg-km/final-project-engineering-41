package api

import (
	"fmt"
	"net/http"
)

func NewApi() {

	mux := http.NewServeMux()
	api := API{
		usersRepo, //productsRepo
	}

	mux.Handle("/api/user/login", api.POST(http.HandleFunc(api.login)))

}

func (api *API) Handler() *http.ServeMux {
	return api.mux
}

func (api *API) Start() {
	fmt.Println("starting web server at http://localhost:8080/")
	http.ListenAndServe(":8080", api.Handler())
}
