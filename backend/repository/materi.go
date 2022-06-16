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
	sqlStatement := `SELECT id, id_materi, id_subject, id_tingkat, tanggal, file FROM materi WHERE id = ?`

	row := p.db.QueryRow(sqlStatement, id)

	var materi Materi

	err := row.Scan(
		&materi.ID,
		&materi.IdMateri,
		&materi.IdSubject,
		&materi.IdTingkat,
		&materi.Tanggal,
		&materi.File,
	)

	if err != nil {
		return Materi{}, err
	}
	return materi, nil // TODO: replace this
}

func (p *MateriRepository) FetchMateriByIdMateri(IdMateri string) (Materi, error) {
	// TODO: You must implement this function for fetch product by name
	sqlStatement := `SELECT id, id_materi, id_subject, id_tingkat, tanggal, file FROM materi WHERE id_materi = ?`

	row := p.db.QueryRow(sqlStatement, IdMateri)

	var materi Materi

	err := row.Scan(
		&materi.ID,
		&materi.IdMateri,
		&materi.IdSubject,
		&materi.IdTingkat,
		&materi.Tanggal,
		&materi.File,
	)

	if err != nil {
		return Materi{}, err
	}
	return materi, nil // TODO: replace this
}

func (p *MateriRepository) FetchMateri() ([]Materi, error) {
	// TODO: You must implement this function for fetch all products
	var sqlStatement string
	var materi2 []Materi

	sqlStatement = `SELECT id, id_materi, id_subject, id_tingkat, tanggal, file FROM materi`

	rows, err := p.db.Query(sqlStatement)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	for rows.Next() {
		var materi Materi

		err := rows.Scan(
			&materi.ID,
			&materi.IdMateri,
			&materi.IdSubject,
			&materi.IdTingkat,
			&materi.Tanggal,
			&materi.File,
		)
		if err != nil {
			return nil, err
		}
		materi2 = append(materi2, materi)
	}

	return materi2, nil // TODO: replace this
}
