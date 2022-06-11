package main

import "database/sql"

func main() {
	db, err := sql.Open("sqlite3", "./backend/db/migration/rangkumin.db")
	if err != nil {
		panic(err)
	}

	usersRepo := repository.NewUserRepository(db)
	productsRepo := repository.NewProductRepository(db)

	//transactionRepo := repository.NewTransactionRepository(db, *productsRepo, *cartItemRepo)

	mainAPI := api.NewAPI(*usersRepo, *materisRepo)
	mainAPI.Start()

}
