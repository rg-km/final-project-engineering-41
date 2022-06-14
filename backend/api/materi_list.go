// package api
package api

func materilist() {

}

// import (
// 	"encoding/json"
// 	"net/http"
// )

// type MateriListErrorResponse struct {
// 	Error string `json:"error"`
// }

// type Materi struct {
// 	NamaMateri   string `db:"nama_materi"`
// 	NamaKategori string `db:"nama_kategori"`
// 	Tingkat      string `db:"tingkat"`
// 	File         string `db:"file"`
// }

// type MateriListSuccessResponse struct {
// 	Materis []Materi `json:"materis"`
// }

// func (api *API) materiList(w http.ResponseWriter, req *http.Request) {
// 	api.AllowOrigin(w, req)
// 	encoder := json.NewEncoder(w)

// 	response := MateriListSuccessResponse{}
// 	response.Materis = make([]Materi, 0)

// 	materis, err := api.materisRepo.FetchMateris()
// 	defer func() {
// 		if err != nil {
// 			w.WriteHeader(http.StatusBadRequest)
// 			encoder.Encode(DashboardErrorResponse{Error: err.Error()})
// 			return
// 		}
// 	}()
// 	if err != nil {
// 		return
// 	}

// 	for _, materi := range materis {
// 		response.Materis = append(response.Materis, Materi{
// 			NamaMateri:   materi.NamaMateri,
// 			NamaKategori: materi.NamaKategori,
// 			Tingkat:      materi.Tingkat,
// 			File:         materi.File,
// 		})
// 	}

// 	encoder.Encode(response)
// }
