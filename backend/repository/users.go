package repository

import (
	"database/sql"
	"errors"
	"regexp"
)

type UserRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (u *UserRepository) FetchUserByID(id int64) (User, error) {
	var user User

	row := u.db.QueryRow(`SELECT * FROM users WHERE id = ?`, id)

	err := row.Scan(&user.ID, &user.Username, &user.Password, &user.NoTelp, &user.Role, &user.Loggedin)
	if err != nil {
		return user, err
	}

	return user, nil
}

func (u *UserRepository) FetchUsers() ([]User, error) {
	var users []User

	rows, err := u.db.Query(`SELECT * FROM users`)
	if err != nil {
		return users, err
	}
	defer rows.Close()

	for rows.Next() {
		var user User

		err = rows.Scan(&user.ID, &user.Username, &user.Password, &user.Role, &user.NoTelp, &user.Loggedin)
		if err != nil {
			return users, err
		}

		users = append(users, user)
	}

	return users, nil
}

func (u *UserRepository) Login(username string, password string) (*string, error) {
	var user User

	err := u.db.QueryRow(`SELECT username FROM users WHERE username = ? AND password = ?`, username, password).Scan(&user.Username)
	if err != nil {
		return nil, errors.New("Login Failed")
	}

	return &user.Username, nil
}

func isEmailValid(e string) bool {
	emailRegex := regexp.MustCompile("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")
	return emailRegex.MatchString(e)
}

func (u *UserRepository) InsertUser(username string, email string, password string, notelp int, role string) (*string, error) {

	if isEmailValid(email) {
		sqlStatement := `INSERT INTO users (username, email, password, notelp, role, loggedin) 
		VALUES (?, ?, ?, ?, ?, false)`

		_, err := u.db.Exec(sqlStatement, username, email, password, notelp, role)
		if err != nil {
			return nil, err
		}
	} else {
		return nil, errors.New("Format salah")
	}

	return &username, nil // TODO: replace this
}

func (u *UserRepository) FetchUserRole(username string) (*string, error) {
	var user User

	err := u.db.QueryRow(`SELECT role FROM users WHERE username = ?`, username).Scan(&user.Role)
	if err != nil {
		return nil, err
	}

	return &user.Role, nil
}
