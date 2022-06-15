package main

// Database untuk membuat table users, materi,
import (
	"database/sql"
	"fmt"

	_ "github.com/mattn/go-sqlite3"
)

type User struct {
	ID       int    `db:"id"`
	Username string `db:"username"`
	Password string `db:"password"`
	Fullname string `db:"fullname"`
	TipeUser string `db:"tipe_user"`
	Loggedin bool   `db:"loggedin"`
}

type TipeUser struct {
	ID             int    `db:"id"`
	TipeUser       string `db:"tipe_user"`
	KeteranganUser string `db:"keterangan_user"`
}

type Subject struct {
	ID          int    `db:"id"`
	IdSubject   string `db:"id_subject"`
	NamaSubject string `db:"nama_subject"`
}

type Tingkat struct {
	ID          int    `db:"id"`
	IdTingkat   string `db:"id_movie"`
	NamaTingkat string `db:"nama_tingkat"`
}

type Materi struct {
	ID        int    `db:"id"`
	IdMateri  string `db:"id_materi"`
	IdSubject string `db:"id_subject"`
	IdTingkat string `db:"id_movie"`
	Tanggal   string `db:"tingkat"`
	File      string `db:"file"`
}

// Migrate digunakan untuk melakukan migrasi database dengan data yang dibutuhkan
func Migrate() (*sql.DB, error) {
	db, err := sql.Open("sqlite3", "./backend/db/rangkumin.db")
	if err != nil {
		panic(err)
	}

	sqlStmt := `CREATE TABLE IF NOT EXISTS users (
		id integer not null primary key AUTOINCREMENT,
		username VARCHAR(255),
		password VARCHAR(255),
		fullname VARCHAR(255),
		tipe_user VARCHAR(255),
		loggedin  boolean not null	
	);`

	_, err = db.Exec(sqlStmt)
	if err != nil {
		return nil, err
	}

	_, err = db.Exec(`INSERT INTO users (username, password, fullname, tipe_user, loggedin)
	VALUES
	("deaash","0000","Dea Ashari", "AM", "true"),
	("ridwanamd","1111","Ahmad Ridwan", "FM", "true"),
	("gilangg","2222","Gilang Ramadhan", "BM", "true"),
	("daffasyam","3333","Asyam Daffa", "PM", "true"),
	("viaalis","4444","Via Alisti", "FM", "true");`)
	if err != nil {
		panic(err)
	}

	sqlStmt = `CREATE TABLE IF NOT EXISTS tipe_user (
		id integer not null primary key AUTOINCREMENT,
		tipe_user VARCHAR(255),
		keterangan_user VARCHAR(255)
	);`

	_, err = db.Exec(sqlStmt)
	if err != nil {
		return nil, err
	}

	_, err = db.Exec(`
	INSERT INTO 
	tipe_user (tipe_user, keterangan_user)
	VALUES
	("AM", "Admin"),
	("FM", "Free Member"),
	("BM", "Basic Member"),
	("PM", "Premium Member");`)

	if err != nil {
		panic(err)
	}

	sqlStmt = `CREATE TABLE IF NOT EXISTS subject (
		id integer not null primary key AUTOINCREMENT,
		id_subject VARCHAR(255),
		nama_subject VARCHAR(255)
	);`

	_, err = db.Exec(sqlStmt)
	if err != nil {
		return nil, err
	}

	_, err = db.Exec(`
			INSERT INTO 
			subject (id_subject, nama_subject)
			VALUES 
			    ("S01", "Matematika"),
				("S02", "IPA"),
				("S03", "IPS"),
				("S03", "Bahasa Indonesia"),
			    ("S02", "Bahasa Inggri");`)

	if err != nil {
		panic(err)
	}

	sqlStmt = `CREATE TABLE IF NOT EXISTS tingkat (
		id integer not null primary key AUTOINCREMENT,
		id_tingkat VARCHAR(255),
		nama_tingkat VARCHAR(255)
	);`

	_, err = db.Exec(sqlStmt)
	if err != nil {
		return nil, err
	}

	_, err = db.Exec(`
			INSERT INTO 
			tingkat (id_tingkat, nama_tingkat)
			VALUES 
			    ("T01", "SD"),
				("T02", "SMP"),
				("T03", "SMA");`)

	if err != nil {
		panic(err)
	}

	sqlStmt = `CREATE TABLE IF NOT EXISTS materi (
		id integer not null primary key AUTOINCREMENT,
		id_materi VARCHAR(255),
		id_subject VARCHAR(255),
		id_tingkat VARCHAR(255),
		tanggal VARCHAR(255),
		file VARCHAR(255)
	);`

	_, err = db.Exec(sqlStmt)
	if err != nil {
		return nil, err
	}

	_, err = db.Exec(`
			INSERT INTO 
			materi (id_materi, id_subject, id_tingkat, tanggal, file)
			VALUES 
			    ("M001","S01", "TO1","22/02/2022","dddddddd"),
				("M002","S02", "TO1","01/03/2022","aaaaaaaaaaa"),
				("M003","S02", "TO2","24/02/2022","11111111111"),
				("M004","S03", "TO2","22/03/2022","2222222222");`)

	if err != nil {
		panic(err)
	}

	return db, nil
}

// Jalankan main untuk melakukan migrasi database
func main() {
	db, err := Migrate()
	if err != nil {
		panic(err)
	}
	// table 1
	rows, err := db.Query("SELECT * FROM users")
	if err != nil {
		panic(err)
	}

	defer rows.Close()

	for rows.Next() {
		var user User
		err = rows.Scan(&user.ID, &user.Username, &user.Password, &user.Fullname, &user.TipeUser, &user.Loggedin)
		if err != nil {
			panic(err)
		}
		fmt.Printf("%+v\n", user)
	}

	// table 2
	rows, err = db.Query("SELECT * FROM tipe_user")
	if err != nil {
		panic(err)
	}

	for rows.Next() {
		var tipeuser TipeUser
		err = rows.Scan(&tipeuser.ID, &tipeuser.TipeUser, &tipeuser.KeteranganUser)
		if err != nil {
			panic(err)
		}
		fmt.Printf("%+v\n", tipeuser)
	}

	// table 3
	rows, err = db.Query("SELECT * FROM subject")
	if err != nil {
		panic(err)
	}

	for rows.Next() {
		var subject Subject
		err = rows.Scan(&subject.ID, &subject.IdSubject, &subject.NamaSubject)
		if err != nil {
			panic(err)
		}
		fmt.Printf("%+v\n", subject)
	}

	// table 4
	rows, err = db.Query("SELECT * FROM tingkat")
	if err != nil {
		panic(err)
	}

	for rows.Next() {
		var tingkat Tingkat
		err = rows.Scan(&tingkat.ID, &tingkat.IdTingkat, &tingkat.NamaTingkat)
		if err != nil {
			panic(err)
		}
		fmt.Printf("%+v\n", tingkat)
	}

	// table 5
	rows, err = db.Query("SELECT * FROM materi")
	if err != nil {
		panic(err)
	}

	for rows.Next() {
		var materi Materi
		err = rows.Scan(&materi.ID, &materi.IdMateri, &materi.IdSubject, &materi.IdTingkat, &materi.Tanggal, &materi.File)
		if err != nil {
			panic(err)
		}
		fmt.Printf("%+v\n", materi)
	}

	defer rows.Close()
}
