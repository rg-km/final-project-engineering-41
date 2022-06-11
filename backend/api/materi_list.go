package api

import (
	"encoding/json"
	"net/http"
)

type MateriListErrorResponse struct {
	Error string `json:"error"`
}

type Materi struct {
	Name     string `json:"name"`
	Price    int    `json:"price"`
	Category string `json:"category"`
	Quantity int    `json:"quantity"`
}

type MateriListSuccessResponse struct {
	Materis []Materi `json:"materis"`
}

func (api *API) materiList(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	response := MateriListSuccessResponse{}
	response.Materis = make([]Materi, 0)

	materis, err := api.materisRepo.FetchMateris()
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

	for _, materi := range materis {
		response.Materis = append(response.Materis, Materi{
			Name:     materi.MateriName,
			Price:    materi.Price,
			Category: materi.Category,
			Quantity: materi.Quantity,
		})
	}

	encoder.Encode(response)
}
