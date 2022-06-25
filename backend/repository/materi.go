package repository

import (
	"database/sql"
	"errors"
)

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
	err := p.db.QueryRow("SELECT * FROM materi WHERE id = ?", id).Scan(&materi.ID, &materi.IDMateri, &materi.NamaMateri, &materi.NamaSubject, &materi.Tanggal, &materi.KategoriTingkat, &materi.Vote, &materi.Teks)
	if err != nil {
		return materi, err
	}
	return materi, nil
	//endanswer return Product{}, nil
}

func (p *MateriRepository) FetchMateriBySubject(NamaSubject string) ([]Materi, error) {
	// TODO: You must implement this function for fetch product by name
	//beginanswer
	//var materi Materi
	rows, err := p.db.Query("SELECT * FROM materi WHERE nama_subject = ?", NamaSubject)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var materi1 []Materi
	for rows.Next() {
		var materi Materi
		err := rows.Scan(&materi.ID, &materi.IDMateri, &materi.NamaMateri, &materi.NamaSubject, &materi.Tanggal, &materi.KategoriTingkat, &materi.Vote, &materi.Teks)
		if err != nil {
			return nil, err
		}
		materi1 = append(materi1, materi)
	}
	return materi1, nil

	//return materi, nil
	//endanswer return Product{}, nil
}

func (p *MateriRepository) FetchMateri() ([]Materi, error) {
	// TODO: You must implement this function for fetch all materi
	//beginanswer
	rows, err := p.db.Query("SELECT * FROM materi")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var materi1 []Materi
	for rows.Next() {
		var materi Materi
		err := rows.Scan(&materi.ID, &materi.IDMateri, &materi.NamaMateri, &materi.NamaSubject, &materi.Tanggal, &materi.KategoriTingkat, &materi.Vote, &materi.Teks)
		if err != nil {
			return nil, err
		}
		materi1 = append(materi1, materi)
	}
	return materi1, nil
	//endanswer return []Product{}, nil
}

// func (p *MateriRepository) Upload(idmateri string, namaMateri string, namaSubject string, tanggal string, kategoriTingkat string, filemateri string) (Materi, error) {
// 	var s Materi
// 	err := p.db.QueryRow("INSERT INTO siswa (id_materi, nama_materi, nama_subject, date, kategori_tingkat, file) VALUES (?,?, ?, ?, ?, ?) RETURNING id_materi, nama_materi, nama_subject,date,  kategori_tingkat, file", idmateri, namaMateri, namaSubject, tanggal, kategoriTingkat, filemateri).Scan(&s.ID, &s.IDMateri, &s.NamaMateri, &s.NamaSubject, &s.Tanggal, &s.KategoriTingkat, &s.Teks)
// 	if err != nil {
// 		return s, err
// 	}
// 	return s, nil
// }

func (p *MateriRepository) Upload(nama_materi string, nama_subject string, kategori_tingkat string, teks string) (Materi, error) {

	var materi Materi

	if nama_materi == " " || nama_materi == "" || kategori_tingkat == "" || teks == " " {
		return materi, errors.New("Please fill all field")
	}

	_, err := p.db.Exec("INSERT INTO materi(id_materi, nama_materi, nama_subject, date, kategori_tingkat,vote, teks) VALUES (?, ?, ?, ?, ?, ?, ?)", "56", nama_materi, nama_subject, "21-09-2010", kategori_tingkat, "0", teks)
	if err != nil {
		return materi, errors.New("Please fill all field")
	}

	return Materi{IDMateri: "56", NamaMateri: nama_materi, NamaSubject: nama_subject, Tanggal: "21-09-2010", KategoriTingkat: kategori_tingkat, Vote: "0", Teks: teks}, nil
}

// func (p *MateriRepository) Upload(nama_materi string, nama_subject string, kategori_tingkat string, teks string) (Materi, error) {
// 	var materi Materi
// 	err := p.db.QueryRow("INSERT INTO user (nama_lengkap, nomor_telpon, tempat_tanggal_lahir, alamat, pendidikan, email, password) VALUES (?, ?, ?, ?, ?, ?, ?) RETURNING id, nama_lengkap, nomor_telpon, tempat_tanggal_lahir, alamat, pendidikan, email, password",
// 	namalengkap, nomortelpon, tempattanggallahir, alamat, pendidikan, email, password).Scan(&s.Id, &s.Nama, &s.NomorTelpon, &s.TempatTanggalLahir, &s.Alamat, &s.Pendidikan, &s.Email, &s.Password)
// 	if err != nil {
// 		return materi, err
// 	}
// 	return materi, nil
// }
