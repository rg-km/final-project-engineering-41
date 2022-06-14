package main

import (
	"database/sql"
	"fmt"

	//_ "github.com/go-sql-driver/mysql"
	_ "github.com/mattn/go-sqlite3"
)

type Data struct {
	IdUser       string `db:"id_user"`
	NamaMateri   string `db:"nama_materi"`
	NamaKategori string `db:"nama_kategori"`
	Tingkat      string `db:"tingkat"`
}

func Migrate() (*sql.DB, error) {
	db, err := sql.Open("sqlite3", "./rangkumin.db")
	if err != nil {
		panic(err)
	}
	sqlStmt := `CREATE TABLE IF NOT EXISTS materis(
		id_user integer not null primary key AUTOINCREMENT,
		nama_materi varchar(255) not null,
		nama_kategori varchar(255) not null,
		tingkat varchar(255) not null
	);`
	_, err = db.Exec(sqlStmt)
	if err != nil {
		return nil, err
	}

	_, err = db.Exec(`
	INSERT INTO materis(nama_materi, nama_kategori, tingkat) VALUES
    ('Bilangan Bulat', 'Matematika', 'SD'),
    ('Hukum Newton', 'Fisika', 'SMP'),
    ('Tenses', 'Bahasa Inggris', 'SMP'),
    ('Indonesia pada Orde Lama', 'Sejarah', 'SMA')`)

	if err != nil {
		fmt.Println(err)
		fmt.Println("here")
	}
	return db, nil
}

// Jalankan main untuk melakukan migrasi database
func main() {
	db, err := Migrate()
	if err != nil {
		panic(err)
	}

	rows, err := db.Query("SELECT * FROM materis")
	if err != nil {
		panic(err)
	}

	defer rows.Close()

	for rows.Next() {

		var data1 Data

		err = rows.Scan(&data1.IdUser, &data1.NamaMateri, &data1.NamaKategori, &data1.Tingkat)
		if err != nil {
			panic(err)
		}
		fmt.Printf("%+v\n", data1)
	}

	defer rows.Close()
}
