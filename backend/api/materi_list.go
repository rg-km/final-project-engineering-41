// package api
package api

import (
	"encoding/json"
	"net/http"
)

type MateriListErrorResponse struct {
	Error string `json:"error"`
}

type Materi struct {
	ID        int    `db:"id"`
	IdMateri  string `db:"id_materi"`
	IdSubject string `db:"id_subject"`
	IdTingkat string `db:"id_movie"`
	Tanggal   string `db:"tingkat"`
	File      string `db:"file"`
}

type MateriListSuccessResponse struct {
	materi2 []Materi `json:"materi"`
}

func (api *API) materiList(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	response := MateriListSuccessResponse{}
	response.materi2 = make([]Materi, 0)

	materi2, err := api.materiRepo.FetchMateri()
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(DashboardErrorResponse{Error: err.Error()})
			return
		}
	}()
	if err != nil {
		return
	}

	for _, materi := range materi2 {
		response.materi2 = append(response.materi2, Materi{
			IdMateri:  materi.IdMateri,
			IdSubject: materi.IdSubject,
			IdTingkat: materi.IdTingkat,
			Tanggal:   materi.Tanggal,
			File:      materi.File,
		})
	}

	encoder.Encode(response)
}
