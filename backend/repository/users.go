package repository

import (
	"database/sql"
	"errors"
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

	err := row.Scan(&user.ID, &user.Username, &user.Password, &user.Role, &user.Loggedin)
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

		err = rows.Scan(&user.ID, &user.Username, &user.Password, &user.Role, &user.Loggedin)
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

func (u *UserRepository) InsertUser(username string, password string, role string, loggedin bool) error {
	_, err := u.db.Exec(`INSERT INTO users (username, password, role, loggedin) VALUES (?, ?, ?, ?)`, username, password, role, loggedin)
	if err != nil {
		return err
	}

	return nil
}

func (u *UserRepository) FetchUserRole(username string) (*string, error) {
	var user User

	err := u.db.QueryRow(`SELECT role FROM users WHERE username = ?`, username).Scan(&user.Role)
	if err != nil {
		return nil, err
	}

	return &user.Role, nil
}
