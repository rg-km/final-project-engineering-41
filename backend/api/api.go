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
	mux.Handle("/api/user/logout", api.POST(http.HandlerFunc(api.logout)))
	//mux.Handle("/api/kategori-kelas", api.POST(api.AuthMiddleWare(http.HandlerFunc(api.pay))))

	//API with AuthMiddleware:
	//mux.Handle("/api/materis", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.materiList))))

	return api

}

func (api *API) Handler() *http.ServeMux {
	return api.mux
}

func (api *API) Start() {
	fmt.Println("starting web server at http://localhost:8080/")
	http.ListenAndServe(":8080", api.Handler())
}
