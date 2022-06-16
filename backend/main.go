package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
	"github.com/rg-km/final-project-engineering-41.git/backend/api"
	"github.com/rg-km/final-project-engineering-41.git/backend/repository"
)

func main() {
	db, err := sql.Open("sqlite3", "./backend/db/rangkumin.db")
	if err != nil {
		panic(err)
	}

	usersRepo := repository.NewUserRepository(db)
	materiRepo := repository.NewMateriRepository(db)
	//kategoriKelasRepo := repository.NewKategoriKelasRepository(db)

	//transactionRepo := repository.NewTransactionRepository(db, *productsRepo, *cartItemRepo)

	mainAPI := api.NewApi(*usersRepo, *materiRepo)
	mainAPI.Start()
}
