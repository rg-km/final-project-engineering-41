package api

import (
	"encoding/json"
	"net/http"
)

type MateriListErrorResponse struct {
	Error string `json:"error"`
}

type Materi struct {
	ID              int    `db:"id"`
	NamaMateri      string `db:"nama_materi"`
	NamaSubject     string `db:"nama_subject"`
	Tanggal         string `db:"date"`
	KategoriTingkat string `db:"kategori_tingkat"`
	File            string `db:"file"`
}

type MateriListSuccessResponse struct {
	Materi1 []Materi `json:"materi"`
}

func (api *API) materiList(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	response := MateriListSuccessResponse{}
	response.Materi1 = make([]Materi, 0)

	materi1, err := api.materiRepo.FetchMateri()
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

	for _, materi := range materi1 {
		response.Materi1 = append(response.Materi1, Materi{
			NamaMateri:      materi.NamaMateri,
			NamaSubject:     materi.NamaSubject,
			Tanggal:         materi.Tanggal,
			KategoriTingkat: materi.KategoriTingkat,
			File:            materi.File,
		})
	}

	encoder.Encode(response)
}
