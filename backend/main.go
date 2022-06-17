package main

import (
	"database/sql"

	"github.com/rg-km/final-project-engineering-41.git/backend/api"
	"github.com/rg-km/final-project-engineering-41.git/backend/repository"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "backend/db/rangkumin.db")
	if err != nil {
		panic(err)
	}

	usersRepo := repository.NewUserRepository(db)
	materiRepo := repository.NewMateriRepository(db)
	productsRepo := repository.NewProductRepository(db)
	cartItemRepo := repository.NewCartItemRepository(db)
	salesRepo := repository.NewSalesRepository(db)
	transactionRepo := repository.NewTransactionRepository(db, *productsRepo, *cartItemRepo)

	mainAPI := api.NewAPI(*usersRepo, *materiRepo, *productsRepo, *cartItemRepo, transactionRepo, *salesRepo)
	mainAPI.Start()
}
