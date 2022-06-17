package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

// Run This Script for migration db
func main() {
	db, err := sql.Open("sqlite3", "backend/db/rangkumin.db")
	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`
	CREATE TABLE IF NOT EXISTS users (
    id integer not null primary key AUTOINCREMENT,
    username varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null,
    notelp integer not null,
    role varchar(255) not null,
    loggedin boolean not null
);

CREATE TABLE IF NOT EXISTS materi (
    id integer not null primary key AUTOINCREMENT,
    nama_materi varchar(255) not null,
    nama_subject varchar(255) not null,
    date DATE not null,
    kategori_tingkat varchar(255) not null,
    file varchar(255) not null
);

CREATE TABLE IF NOT EXISTS membership (
    id integer not null primary key AUTOINCREMENT,
    kategori_membership varchar(255) not null,
    harga integer not null
);

CREATE TABLE IF NOT EXISTS sales (
    id integer not null primary key AUTOINCREMENT,
    date DATE not null,
    membership_id integer not null,
    FOREIGN KEY (membership_id) REFERENCES membership(id)
);

INSERT INTO users(username,email, password, notelp, role, loggedin) VALUES
    ('deaashari','deaashari10@gmail.com', '1234','082372323045', 'admin', false),
    ('gilangg','gilang2@gmail.com', '0000','082324567842', 'studentfree', false),
    ('ahmadrid','ridwan@gmail.com', '1111','087908654829', 'studentbasic', false),
    ('viaalisti','via@gmail.com', '2222','086789356416', 'studentbasic', false),
    ('daffasyam','daffa@gmail.com', '3333','086354212349', 'studentprem', false);

INSERT INTO materi(nama_materi, nama_subject, date, kategori_tingkat, file) VALUES
    ('Indonesia pada Zaman Orde Baru', 'Sejarah', '22/02/2022', 'SMP', 'Indonesia melaksanakan'),
    ('Bilangan Bulat', 'Matematika', '21/01/2022', 'SD', 'perbedaan bilangan bulat'),
    ('Bilangan Prima', 'Matematika', '20/03/2021', 'SMP', '10 bilangan pertama prima'),
    ('Indonesia pada Zaman Orde Lama', 'Sejarah', '12/03/2022', 'SMP', 'Indonesia adalah negara'),
    ('Sistem Pernapasan', 'Biologi', '22/02/2022', 'SMA', 'Pernapasan pada manusia'),
    ('Sistem Pencernaan', 'Biologi', '22/02/2022', 'SMA', 'Pencernaan adalah'),
    ('Bidang Miring dan Katrol', 'Fisika', '22/02/2022', 'SMA', 'Bidang miring contohnya'),
    ('Hukum Newton', 'Fisika', '22/02/2022', 'SMA', '3 Hukum Newton'),
    ('Tenses', 'Bahasa Inggris', '22/02/2022', 'SMA', 'Past Tense'),
    ('Greetings', 'Bahasa Inggris', '22/02/2022', 'SMP', 'How to say');
    
INSERT INTO membership(kategori_membership, harga) VALUES
    ('Free', 0),
    ('Basic', 200000),
    ('Premium', 300000);`)

	if err != nil {
		panic(err)
	}
}
