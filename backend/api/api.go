package api

import (
	"fmt"
	"net/http"

	"github.com/rg-km/final-project-engineering-41.git/backend/repository"
)

type API struct {
	usersRepo repository.UserRepository
	//materisRepo repository.MateriRepository
	//kategoriKelasRepo repository.KategoriKelasRepository
	mux *http.ServeMux
}

func NewApi(usersRepo repository.UserRepository) API {
	mux := http.NewServeMux()
	api := API{
		usersRepo, mux,
	}

	mux.Handle("/api/user/login", api.POST(http.HandlerFunc(api.login)))
	//mux.Handle("/api/user/logout", api.POST(http.HandlerFunc(api.logout)))
	return api

}

func (api *API) Handler() *http.ServeMux {
	return api.mux
}

func (api *API) Start() {
	fmt.Println("starting web server at http://localhost:3030/")
	http.ListenAndServe(":3030", api.Handler())
}
