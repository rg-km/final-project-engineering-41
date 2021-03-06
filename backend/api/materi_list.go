package api

import (
	"encoding/json"
	"net/http"
	"strconv"
)

type MateriListErrorResponse struct {
	Error string `json:"error"`
}

type Materi struct {
	ID              string `db:"id"`
	IDMateri        string `db:"id_materi"`
	NamaMateri      string `db:"nama_materi"`
	NamaSubject     string `db:"nama_subject"`
	Tanggal         string `db:"date"`
	KategoriTingkat string `db:"kategori_tingkat"`
	Vote            string `db:"vote"`
	Teks            string `db:"teks"`
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
			//encoder.Encode(DashboardErrorResponse{Error: err.Error()})
			return
		}
	}()
	if err != nil {
		return
	}

	for _, materi := range materi1 {
		response.Materi1 = append(response.Materi1, Materi{
			ID:              strconv.Itoa(int(materi.ID)),
			IDMateri:        materi.IDMateri,
			NamaMateri:      materi.NamaMateri,
			NamaSubject:     materi.NamaSubject,
			Tanggal:         materi.Tanggal,
			KategoriTingkat: materi.KategoriTingkat,
			Vote:            materi.Vote,
			Teks:            materi.Teks,
		})
	}

	encoder.Encode(response)
}
func (api *API) materibyid(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	response := MateriListSuccessResponse{}
	response.Materi1 = make([]Materi, 0)

	id := req.URL.Query().Get("id")
	idInt, err := strconv.Atoi(id)

	materi1, err := api.materiRepo.FetchMateriByID(int64(idInt))
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			//encoder.Encode(DashboardErrorResponse{Error: err.Error()})
			return
		}
	}()
	if err != nil {
		return
	}

	response.Materi1 = append(response.Materi1, Materi{
		ID:              strconv.Itoa(int(materi1.ID)),
		IDMateri:        materi1.IDMateri,
		NamaMateri:      materi1.NamaMateri,
		NamaSubject:     materi1.NamaSubject,
		Tanggal:         materi1.Tanggal,
		KategoriTingkat: materi1.KategoriTingkat,
		Vote:            materi1.Vote,
		Teks:            materi1.Teks,
	})

	encoder.Encode(response)
}
func (api *API) materibysubject(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	response := MateriListSuccessResponse{}
	response.Materi1 = make([]Materi, 0)

	nama_subject := req.URL.Query().Get("nama_subject")

	materi1, err := api.materiRepo.FetchMateriBySubject(nama_subject)
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(MateriListErrorResponse{Error: err.Error()})
			return
		}
	}()
	if err != nil {
		return
	}

	for _, materi := range materi1 {
		response.Materi1 = append(response.Materi1, Materi{
			ID:              strconv.Itoa(int(materi.ID)),
			IDMateri:        materi.IDMateri,
			NamaMateri:      materi.NamaMateri,
			NamaSubject:     materi.NamaSubject,
			Tanggal:         materi.Tanggal,
			KategoriTingkat: materi.KategoriTingkat,
			Vote:            materi.Vote,
			Teks:            materi.Teks,
		})
	}

	encoder.Encode(response)
}

func (api *API) uploadmateri(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var materi Materi
	err := json.NewDecoder(req.Body).Decode(&materi)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	res, err := api.materiRepo.Upload(materi.NamaMateri, materi.NamaSubject, materi.KategoriTingkat, materi.Teks)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(res)

}
