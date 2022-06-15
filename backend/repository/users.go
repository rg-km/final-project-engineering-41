package repository

import (
	"database/sql"
	"errors"
)

type User struct {
	ID       int64  `db:"id"`
	Username string `db:"username"`
	Password string `db:"password"`
	TipeUser string `db:"tipe_user"`
	Loggedin bool   `db:"loggedin"`
	Token    string `db:"token"`
}

type UserRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (u *UserRepository) FetchUserByID(id int64) (User, error) {
	//beginanswer
	var user User
	err := u.db.QueryRow("SELECT * FROM users WHERE id = ?", id).Scan(&user.ID, &user.Username, &user.Password, &user.Password, &user.TipeUser, &user.Loggedin, &user.Token)
	if err != nil {
		return user, err
	}
	return user, nil
	//endanswer return User{}, nil
}

func (u *UserRepository) FetchUsers() ([]User, error) {
	//beginanswer
	rows, err := u.db.Query("SELECT * FROM users")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var users []User
	for rows.Next() {
		var user User
		err := rows.Scan(&user.ID, &user.Username, &user.Password, &user.TipeUser, &user.Loggedin)
		if err != nil {
			return nil, err
		}
		users = append(users, user)
	}
	return users, nil
	//endanswer return []User{}, nil
}

func (u *UserRepository) Login(username string, password string) (*string, error) {
	//beginanswer
	var user User
	err := u.db.QueryRow("SELECT username FROM users WHERE username = ? AND password = ?", username, password).Scan(&user.Username)
	if err != nil {
		return nil, errors.New("Login Failed")
	}
	return &user.Username, nil
	//endanswer return nil, nil
}

func (u *UserRepository) InsertUser(username string, password string, tipeuser string, loggedin bool) error {
	//beginanswer
	_, err := u.db.Exec("INSERT INTO users (username, password, tipe_user) VALUES (?, ?, ?, ?)", username, password, loggedin, tipeuser)
	if err != nil {
		return err
	}
	return nil
	//endanswer return nil
}

func (u *UserRepository) FetchUserRole(username string) (*string, error) {
	//beginanswer
	var user User
	err := u.db.QueryRow("SELECT role FROM users WHERE username = ?", username).Scan(&user.TipeUser)
	if err != nil {
		return nil, err
	}
	return &user.TipeUser, nil
	//endanswer return nil, nil
}
