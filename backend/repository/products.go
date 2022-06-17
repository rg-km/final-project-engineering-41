package repository

import "database/sql"

type ProductRepository struct {
	db *sql.DB
}

func NewProductRepository(db *sql.DB) *ProductRepository {
	return &ProductRepository{db: db}
}

func (p *ProductRepository) FetchProductByID(id int64) (Product, error) {
	//TODO: You must implement this function fot fetch product by id
	//beginanswer
	var product Product
	err := p.db.QueryRow("SELECT * FROM products WHERE id = ?", id).Scan(&product.ID, &product.Category, &product.ProductName, &product.Price, &product.Quantity)
	if err != nil {
		return product, err
	}
	return product, nil
	//endanswer return Product{}, nil
}

func (p *ProductRepository) FetchProductByName(productName string) (Product, error) {
	// TODO: You must implement this function for fetch product by name
	//beginanswer
	var product Product
	err := p.db.QueryRow("SELECT * FROM products WHERE product_name = ?", productName).Scan(&product.ID, &product.Category, &product.ProductName, &product.Price, &product.Quantity)
	if err != nil {
		return product, err
	}
	return product, nil
	//endanswer return Product{}, nil
}

func (p *ProductRepository) FetchProducts() ([]Product, error) {
	// TODO: You must implement this function for fetch all products
	//beginanswer
	rows, err := p.db.Query("SELECT * FROM products")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var products []Product
	for rows.Next() {
		var product Product
		err := rows.Scan(&product.ID, &product.ProductName, &product.Category, &product.Price, &product.Quantity)
		if err != nil {
			return nil, err
		}
		products = append(products, product)
	}
	return products, nil
	//endanswer return []Product{}, nil
}
