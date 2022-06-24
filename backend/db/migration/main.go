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
    notelp varchar(255) not null,
    role varchar(255) not null,
    loggedin boolean not null
);

CREATE TABLE IF NOT EXISTS materi (
    id integer not null primary key AUTOINCREMENT,
    id_materi integer not null,
    nama_materi varchar(255) not null,
    nama_subject varchar(255) not null,
    date DATE not null,
    kategori_tingkat varchar(255) not null,
    vote varchar(255) not null,
    teks varchar(255) not null
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
    FOREIGN KEY (membership_id) REFERENCES user(id)
);

INSERT INTO users(username, email, password, notelp, role, loggedin) VALUES
    ('deaashari','deaashari10@gmail.com', '1234','082372323045', 'admin', false),
    ('gilangg','gilang2@gmail.com', '0000','082324567842', 'studentfree', false),
    ('ahmadrid','ridwan@gmail.com', '1111','087908654829', 'studentbasic', false),
    ('viaalisti','via@gmail.com', '2222','086789356416', 'studentbasic', false),
    ('daffasyam','daffa@gmail.com', '3333','086354212349', 'studentprem', false);

    INSERT INTO materi(id_materi, nama_materi, nama_subject, date, kategori_tingkat,vote, teks) VALUES
    ('1', 'Indonesia pada Zaman Orde Baru', 'Sejarah', '2022-02-22', 'SMP', '0', 'Indonesia melaksanakan'),
    ('2', 'Bilangan Bulat', 'Matematika', '2022-09-22', 'SD','0', 'perbedaan bilangan bulat'),
    ('3','Bilangan Prima', 'Matematika', '2022-10-22', 'SMP','0', '10 bilangan pertama prima'),
    ('4','Indonesia pada Zaman Orde Lama', 'Sejarah', '2022-01-21', 'SMP', '0','Indonesia adalah negara'),
    ('5','Sistem Pernapasan', 'Biologi', '2022-01-22', 'SMA', '0','Pernapasan pada manusia'),
    ('6','Sistem Pencernaan', 'Biologi', '2022-04-22', 'SMA','0', 'Pencernaan adalah'),
    ('7','Bidang Miring dan Katrol', 'Fisika', '2022-05-22', 'SMA','0', 'Bidang miring contohnya'),
    ('8','Hukum Newton', 'Fisika', '2022-06-22', 'SMA','0', '3 Hukum Newton'),
    ('9','Tenses', 'Bahasa Inggris', '2022-07-22', 'SMA','0', 'Past Tense'),
    ('10','Greetings', 'Bahasa Inggris', '2022-08-22', 'SMP','0', 'How to say');
    
INSERT INTO membership(kategori_membership, harga) VALUES
    ('Free', 0),
    ('Basic', 200000),
    ('Premium', 300000);`)

	if err != nil {
		panic(err)
	}
}
