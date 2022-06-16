package repository

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
