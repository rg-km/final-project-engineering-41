package repository

func KategoriKelasRepository() {

}

// package repository

// import "database/sql"

// type KategoriKelasRepository struct {
// 	db *sql.DB
// }

// func NewKategoriKelasRepository(db *sql.DB) *KategoriKelasRepository {
// 	return &KategoriKelasRepository{db: db}
// }

// func (p *KategoriKelasRepository) StoreCategoryKelas(NamaKategori string) (KategoriKelas, error) {
// 	// TODO: Implement SQL Query using the transaction connection to add cart item to sales table
// 	// HINT: use `tx.Exec("... query ...")` instead of `u.db.Exec("... query ...")`
// 	//beginanswer
// 	sqlStatement := `
// 	INSERT INTO kategori_kelas (nama_kategori)
// 	VALUES (?, ?)
// 	`
// 	_, err := p.db.Exec(sqlStatement, NamaKategori)
// 	if err != nil {
// 		return KategoriKelas{}, err
// 	}
// 	return KategoriKelas{}, nil
// }
