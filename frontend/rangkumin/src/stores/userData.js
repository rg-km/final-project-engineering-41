import React from "react";
import create from "zustand";
import axios from "axios";

const userData = create((set) => ({
	//fetch request to get user data from http://localhost:8080/api/user/login
	user: [],
    fetch
})); // userData

export default userData;

/*
user: [],

	getUser: async () => {
		const response = await axios.get("http://localhost:8080/api/user/login");
		set((state) => ({
			user: response.data
		}));
	},

*/

// fetch("http://localhost:8080/api/user/login", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         email: " ",
//         password: ""
//     },
//     }).then(res => {
//     console.log(res)
//     set(res.data)
// })