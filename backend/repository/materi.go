package repository

import "database/sql"

type MateriRepository struct {
	db *sql.DB
}

func NewMateriRepository(db *sql.DB) *MateriRepository {
	return &MateriRepository{db: db}
}
func (p *MateriRepository) FetchMateriByID(id int64) (Materi, error) {
	//TODO: You must implement this function fot fetch product by id
	//beginanswer
	var materi Materi
	err := p.db.QueryRow("SELECT * FROM materi WHERE id = ?", id).Scan(&materi.ID, &materi.IDMateri, &materi.NamaMateri, &materi.NamaSubject, &materi.Tanggal, &materi.KategoriTingkat, &materi.File)
	if err != nil {
		return materi, err
	}
	return materi, nil
	//endanswer return Product{}, nil
}

func (p *MateriRepository) FetchMateriBySubject(NamaMateri string) (Materi, error) {
	// TODO: You must implement this function for fetch product by name
	//beginanswer
	var materi Materi
	err := p.db.QueryRow("SELECT * FROM materi WHERE nama_subject = ?", NamaMateri).Scan(&materi.ID, &materi.IDMateri, &materi.NamaMateri, &materi.NamaSubject, &materi.Tanggal, &materi.KategoriTingkat, &materi.File)
	if err != nil {
		return materi, err
	}
	return materi, nil
	//endanswer return Product{}, nil
}

func (p *MateriRepository) FetchMateri() ([]Materi, error) {
	// TODO: You must implement this function for fetch all products
	//beginanswer
	rows, err := p.db.Query("SELECT * FROM materi")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var materi1 []Materi
	for rows.Next() {
		var materi Materi
		err := rows.Scan(&materi.ID, &materi.IDMateri, &materi.NamaMateri, &materi.NamaSubject, &materi.Tanggal, &materi.KategoriTingkat, &materi.File)
		if err != nil {
			return nil, err
		}
		materi1 = append(materi1, materi)
	}
	return materi1, nil
	//endanswer return []Product{}, nil
}
