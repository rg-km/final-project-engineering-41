package api

import (
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/rg-km/final-project-engineering-41.git/backend/repository"
)

type API struct {
	usersRepo  repository.UserRepository
	materiRepo repository.MateriRepository
	//productsRepo    repository.ProductRepository
	//cartItemRepo    repository.CartItemRepository
	//transactionRepo repository.TransactionRepository
	//salesRepo       repository.SalesRepository
	mux *http.ServeMux
}

func (api *API) uploadFile(w http.ResponseWriter, r *http.Request) {
	fmt.Println("File Upload Endpoint Hit")

	//r.Header.Add("Content-Type", writer.FormDataContentType())

	// Parse our multipart form, 10 << 20 specifies a maximum
	// upload of 10 MB files.
	r.ParseMultipartForm(10 << 20)
	// FormFile returns the first file for the given key `myFile`
	// it also returns the FileHeader so we can get the Filename,
	// the Header and the size of the file
	file, handler, err := r.FormFile("files")
	if err != nil {
		fmt.Println("Error Retrieving the File")
		fmt.Println(err)
		return
	}
	defer file.Close()
	fmt.Printf("Uploaded File: %+v\n", handler.Filename)
	fmt.Printf("File Size: %+v\n", handler.Size)
	fmt.Printf("MIME Header: %+v\n", handler.Header)

	// Create a temporary file within our temp-images directory that follows
	// a particular naming pattern
	tempFile, err := ioutil.TempFile("D:/FinalProject/final-project-engineering-41/backend/db/image", "image-*.png")
	if err != nil {
		fmt.Println(err)
	}
	defer tempFile.Close()

	// read all of the contents of our uploaded file into a
	// byte array
	fileBytes, err := ioutil.ReadAll(file)
	if err != nil {
		fmt.Println(err)
	}
	// write this byte array to our temporary file
	tempFile.Write(fileBytes)
	// return that we have successfully uploaded our file!
	fmt.Fprintf(w, "Successfully Uploaded File\n")
}

func NewAPI(usersRepo repository.UserRepository, materiRepo repository.MateriRepository) API {
	mux := http.NewServeMux()
	api := API{
		usersRepo, materiRepo, mux,
	}

	mux.Handle("/api/user/login", api.POST(http.HandlerFunc(api.login)))
	mux.Handle("/api/user/logout", api.POST(http.HandlerFunc(api.logout)))
	mux.Handle("/api/user/register", api.POST(http.HandlerFunc(api.register)))

	// API with AuthMiddleware:
	mux.Handle("/api/materi", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.materiList))))
	mux.Handle("/api/materibyid", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.materibyid))))
	mux.Handle("/api/materibysubject", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.materibysubject))))
	mux.Handle("/api/uploadmateri", api.POST(http.HandlerFunc(api.uploadmateri)))
	mux.Handle("/api/upload", api.POST(http.HandlerFunc(api.uploadFile)))
	//mux.Handle("/api/uploadimage", api.POST(api.AuthMiddleWare(http.HandlerFunc(api.UploadFiles))))
	//mux.Handle("/api/products", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.productList))))
	//mux.Handle("/api/cart/add", api.POST(api.AuthMiddleWare(http.HandlerFunc(api.addToCart))))
	//mux.Handle("/api/cart/clear", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.clearCart))))
	//mux.Handle("/api/carts", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.cartList))))
	//mux.Handle("/api/pay", api.POST(api.AuthMiddleWare(http.HandlerFunc(api.pay))))

	// API with AuthMiddleware and AdminMiddleware
	//mux.Handle("/api/admin/sales", api.GET(api.AuthMiddleWare(api.AdminMiddleware(http.HandlerFunc(api.getDashboard)))))

	return api
}

func (api *API) Handler() *http.ServeMux {
	return api.mux
}

func (api *API) Start() {
	fmt.Println("starting web server at http://localhost:8080/")
	http.ListenAndServe(":8080", api.Handler())
}
