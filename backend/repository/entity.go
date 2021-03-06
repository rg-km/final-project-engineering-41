package repository

import "time"

type User struct {
	ID       int64  `db:"id"`
	Username string `db:"username"`
	Email    string `db:"email"`
	Password string `db:"password"`
	Role     string `db:"role"`
	NoTelp   string `db:"notelp"`
	Loggedin bool   `db:"loggedin"`
	Token    string `db:"token"`
}

type Materi struct {
	ID              int    `db:"id"`
	IDMateri        string `db:"id_materi"`
	NamaMateri      string `db:"nama_materi"`
	NamaSubject     string `db:"nama_subject"`
	Tanggal         string `db:"date"`
	KategoriTingkat string `db:"kategori_tingkat"`
	Vote            string `db:"vote"`
	Teks            string `db:"teks"`
}

type Product struct {
	ID          int64  `db:"id"`
	Category    string `db:"category"`
	ProductName string `db:"product_name"`
	Price       int    `db:"price"`
	Quantity    int    `db:"quantity"`
}

type CartItem struct {
	ID          int64  `db:"id"`
	Category    string `db:"category"`
	ProductID   int64  `db:"product_id"`
	ProductName string `db:"product_name"`
	Price       int    `db:"price"`
	Quantity    int    `db:"quantity"`
}

type Sales struct {
	ID          int64     `db:"id"`
	Date        time.Time `db:"date"`
	Category    string    `db:"category"`
	ProductID   int64     `db:"product_id"`
	ProductName string    `db:"product_name"`
	Price       int       `db:"price"`
	Quantity    int       `db:"quantity"`
	Total       int       `db:"total"`
}

type GetSalesRequest struct {
	StartPeriod *time.Time `db:"start_period"`
	EndPeriod   *time.Time `db:"end_period"`
	ProductID   int64      `db:"product_id"`
	ProductName string     `db:"product_name"`
}

func (r GetSalesRequest) IsEmptyRequest() bool {
	if r.StartPeriod == nil && r.EndPeriod == nil && r.ProductName == "" {
		return true
	}

	return false
}

func (r GetSalesRequest) IsValidRequest() bool {
	if r.StartPeriod == nil && r.EndPeriod != nil {
		return false
	}
	if r.StartPeriod != nil && r.EndPeriod == nil {
		return false
	}

	return true
}
