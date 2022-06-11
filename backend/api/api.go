package api

import (
	"fmt"
	"net/http"

	"github.com/rg-km/final-project-engineering-41.git/backend/repository"
)

type API struct {
	usersRepo   repository.UserRepository
	materisRepo repository.MateriRepository
	mux         *http.ServeMux
}

func NewApi(usersRepo repository.UserRepository, materisRepo repository.MateriRepository) {

	mux := http.NewServeMux()
	api := API{
		usersRepo, materisRepo, mux, //productsRepo
	}

	mux.Handle("/api/user/login", api.POST(http.HandleFunc(api.login)))
	mux.Handle("/api/user/logout", api.POST(http.HandlerFunc(api.logout)))

	//API with AuthMiddleware:
	mux.Handle("/api/materis", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.materiList))))

	return

}

func (api *API) Handler() *http.ServeMux {
	return api.mux
}

func (api *API) Start() {
	http.Handle("/", http.FileServer(http.Dir(".")))
	fmt.Println("starting web server at http://localhost:8080/")
	http.ListenAndServe(":8080", api.Handler())
}
