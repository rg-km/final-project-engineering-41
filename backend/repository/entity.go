package repository

type User struct {
	ID       int64  `db:"id"`
	Username string `db:"username"`
	Password string `db:"password"`
	Role     string `db:"role"`
	Loggedin bool   `db:"loggedin"`
	Token    string `db:"token"`
}
type Product struct {
	ID          int64  `db:"id"`
	Category    string `db:"category"`
	ProductName string `db:"product_name"`
	Price       int    `db:"price"`
	Quantity    int    `db:"quantity"`
}
