package repository_test

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"

	"github.com/rg-km/final-project-engineering-41.git/backend/repository"
)

var _ = Describe("Repository Test", func() {
	var db *sql.DB
	var err error
	var userRepo *repository.UserRepository
	//var cartItemRepo *repository.CartItemRepository
	//var productRepo *repository.ProductRepository
	//var transactionRepo repository.TransactionRepository

	BeforeEach(func() {
		// Setup
		db, err = sql.Open("sqlite3", "./rangkumin.db")
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

		
		INSERT INTO users(username, email, password, notelp, role, loggedin) VALUES
    ('deaashari','deaashari10@gmail.com', '1234','082372323045', 'admin', false),
    ('gilangg','gilang2@gmail.com', '0000','082324567842', 'studentfree', false),
    ('ahmadrid','ridwan@gmail.com', '1111','087908654829', 'studentbasic', false),
    ('viaalisti','via@gmail.com', '2222','086789356416', 'studentbasic', false),
    ('daffasyam','daffa@gmail.com', '3333','086354212349', 'studentprem', false);`)

		if err != nil {
			panic(err)
		}

		userRepo = repository.NewUserRepository(db)
		//productRepo = repository.NewProductRepository(db)
		//cartItemRepo = repository.NewCartItemRepository(db)
		//transactionRepo = repository.NewTransactionRepository(db, *productRepo, *cartItemRepo)
	})

	AfterEach(func() {
		// Teardown
		db, err := sql.Open("sqlite3", "./rangkumin.db")
		if err != nil {
			panic(err)
		}

		_, err = db.Exec(`
		DROP TABLE IF EXISTS users;`)

		if err != nil {
			panic(err)
		}
	})

	// Describe("Select All Users", func() {
	// 	When("get all user list from database", func() {
	// 		It("should return all user list", func() {
	// 			userList, err := userRepo.FetchUsers()
	// 			Expect(err).ToNot(HaveOccurred())

	// 			Expect(userList[0].Username).To(Equal("deaashari"))
	// 			Expect(userList[0].Password).To(Equal("1234"))
	// 			Expect(userList[0].Loggedin).To(Equal(false))
	// 			Expect(userList[1].Username).To(Equal("gilangg"))
	// 			Expect(userList[1].Password).To(Equal("0000"))
	// 			Expect(userList[1].Loggedin).To(Equal(false))
	// 			Expect(userList[2].Username).To(Equal("ahmadrid"))
	// 			Expect(userList[2].Password).To(Equal("1111"))
	// 			Expect(userList[2].Loggedin).To(Equal(false))
	// 		})
	// 	})
	// })

	Describe("Login", func() {
		When("username and password are correct", func() {
			It("accepts the login", func() {
				res, err := userRepo.Login("deaashari", "1234")
				Expect(err).ToNot(HaveOccurred())
				Expect(*res).To(Equal("deaashari"))
			})
		})
		When("username is correct but password is incorrect", func() {
			It("rejects the login", func() {
				_, err := userRepo.Login("deaashari", "4567")
				Expect(err).To(HaveOccurred())
				Expect(err.Error()).To(Equal("Login Failed"))
			})
		})
		When("both username and password is incorrect", func() {
			It("rejects the login", func() {
				_, err := userRepo.Login("juno", "23885")
				Expect(err).To(HaveOccurred())
				Expect(err.Error()).To(Equal("Login Failed"))
			})
		})
	})

	// Describe("Select All Product", func() {
	// 	When("get all product list from database in products table", func() {
	// 		It("returns product information in the same order as database", func() {
	// 			productList, err := productRepo.FetchProducts()
	// 			Expect(err).ToNot(HaveOccurred())
	// 			Expect(productList[0].Category).To(Equal("Fruits"))
	// 			Expect(productList[0].ProductName).To(Equal("Orange"))
	// 			Expect(productList[0].Price).To(Equal(5000))
	// 			Expect(productList[1].Category).To(Equal("Fruits"))
	// 			Expect(productList[1].ProductName).To(Equal("Apple"))
	// 			Expect(productList[1].Price).To(Equal(2000))
	// 		})
	// 	})
	// })

	// Describe("Add Cart Item", func() {
	// 	When("select multiple items and confirm will add items to cart", func() {
	// 		It("add the item to the cart", func() {
	// 			cartItemRepo.ResetCartItems()
	// 			product, err := productRepo.FetchProductByName("Orange")
	// 			Expect(err).ToNot(HaveOccurred())
	// 			_, err = cartItemRepo.FetchCartByProductID(product.ID)
	// 			Expect(err).To(HaveOccurred())
	// 			cartItemRepo.InsertCartItem(repository.CartItem{
	// 				ProductID: product.ID,
	// 				Quantity:  1,
	// 			})
	// 			cartItem, err := cartItemRepo.FetchCartItems()
	// 			Expect(err).ToNot(HaveOccurred())
	// 			Expect(cartItem[0].ProductName).To(Equal("Orange"))
	// 			Expect(cartItem[0].Quantity).To(Equal(1))
	// 			Expect(cartItem[0].Price).To(Equal(5000))
	// 		})
	// 		It("update item to product cart", func() {
	// 			cartItemRepo.ResetCartItems()
	// 			product, err := productRepo.FetchProductByName("Orange")
	// 			Expect(err).ToNot(HaveOccurred())
	// 			_, err = cartItemRepo.FetchCartByProductID(product.ID)
	// 			Expect(err).To(HaveOccurred())
	// 			cartItemRepo.InsertCartItem(repository.CartItem{
	// 				ProductID: product.ID,
	// 				Quantity:  1,
	// 			})
	// 			cartItem, err := cartItemRepo.FetchCartByProductID(product.ID)
	// 			Expect(err).ToNot(HaveOccurred())
	// 			err = cartItemRepo.IncrementCartItemQuantity(cartItem)
	// 			Expect(err).ToNot(HaveOccurred())
	// 			cartItems, err := cartItemRepo.FetchCartItems()
	// 			Expect(err).ToNot(HaveOccurred())
	// 			Expect(cartItems[0].ProductName).To(Equal("Orange"))
	// 			Expect(cartItems[0].Quantity).To(Equal(2))
	// 			Expect(cartItems[0].Price).To(Equal(5000))
	// 		})
	// 	})
	// })

	// Describe("Total Price", func() {
	// 	When("there is cart item", func() {
	// 		It("returns total price", func() {
	// 			cartItemRepo.ResetCartItems()
	// 			product, err := productRepo.FetchProductByName("Orange")
	// 			Expect(err).ToNot(HaveOccurred())
	// 			_, err = cartItemRepo.FetchCartByProductID(product.ID)
	// 			Expect(err).To(HaveOccurred())
	// 			cartItemRepo.InsertCartItem(repository.CartItem{
	// 				ProductID: product.ID,
	// 				Quantity:  1,
	// 			})
	// 			product, err = productRepo.FetchProductByName("Apple")
	// 			Expect(err).ToNot(HaveOccurred())
	// 			_, err = cartItemRepo.FetchCartByProductID(product.ID)
	// 			Expect(err).To(HaveOccurred())
	// 			cartItemRepo.InsertCartItem(repository.CartItem{
	// 				ProductID: product.ID,
	// 				Quantity:  1,
	// 			})
	// 			totalPrice, err := cartItemRepo.TotalPrice()
	// 			Expect(err).ToNot(HaveOccurred())
	// 			Expect(totalPrice).To(Equal(7000))
	// 		})
	// 	})
	// })

	// Describe("Reset Cart Items", func() {
	// 	When("there is cart item", func() {
	// 		It("returns empty cart items", func() {
	// 			cartItemRepo.ResetCartItems()
	// 			cartItem, err := cartItemRepo.FetchCartItems()
	// 			Expect(err).ToNot(HaveOccurred())
	// 			Expect(cartItem).To(BeEmpty())
	// 		})
	// 	})
	// })

	// Describe("Pay", func() {
	// 	When("pay the total price ", func() {
	// 		It("will do atomic operation to substract product qty and adding cart to sales table", func() {
	// 			cartItemRepo.ResetCartItems()
	// 			product, err := productRepo.FetchProductByName("Orange")
	// 			Expect(err).ToNot(HaveOccurred())
	// 			_, err = cartItemRepo.FetchCartByProductID(product.ID)
	// 			Expect(err).To(HaveOccurred())
	// 			cartItemRepo.InsertCartItem(repository.CartItem{
	// 				ProductID: product.ID,
	// 				Quantity:  10,
	// 			})

	// 			cartItems, err := cartItemRepo.FetchCartItems()
	// 			Expect(err).ToNot(HaveOccurred())

	// 			// drop sales table to imitate a db failure
	// 			_, err = db.Exec("DROP TABLE IF EXISTS sales;")
	// 			Expect(err).ToNot(HaveOccurred())

	// 			transactionRepo.Pay(cartItems, 100000)

	// 			product, err = productRepo.FetchProductByName("Orange")
	// 			Expect(err).ToNot(HaveOccurred())
	// 			// quantity should not be decreased
	// 			Expect(product.Quantity).To(Equal(100))
	// 		})
	// 	})
	// })
})
