package repository

import "database/sql"

type MateriRepository struct {
	db *sql.DB
}

func NewMateriRepository(db *sql.DB) *MateriRepository {
	return &MateriRepository{db: db}
}

func (p *MateriRepository) FetchMateriByID(id int64) (Materi, error) {
	//masukan materi berdasarkan id
	var materi Materi
	err := p.db.QueryRow("SELECT * FROM materis WHERE id_user= ?", id_user).Scan(&materi.ID, &materi.NamaKategori, &materi.NamaMateri, &materi.Tingkat)
	if err != nil {
		return materi, err
	}
	return materi, nil
}

func (p *MateriRepository) FetchMateris() ([]Materi, error) {
	// TODO: You must implement this function for fetch all products
	//beginanswer
	rows, err := p.db.Query("SELECT * FROM materis")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var materis []Materi
	for rows.Next() {
		var materi Materi
		err := rows.Scan(&materi.ID, &materi.NamaKategori, &materi.NamaMateri, &materi.Tingkat)
		if err != nil {
			return nil, err
		}
		materis = append(materis, materi)
	}
	return materis, nil
}
