import create from "zustand";
import axios from "axios";
import {persist} from "zustand/middleware"
import Cookies from "universal-cookie"

const cookies = new Cookies()

const userData = create(persist((set) => ({
	user: {},
	fetch: async (body, navigate) => {
		try {
			const response = await axios.post('http://localhost:8080/api/user/login', body, {
				withCredentials: true,
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
			})

			set({user: response.data})
			navigate("/", {
				replace: true
			});
		} catch (error) {	
			set({user: {}})
		}
	},
	doLogout: async (navigate) => {
		try {
			cookies.remove('token')

			set({user: {}})
			navigate("/", {
				replace: true
			});
		} catch (error) {
		}
	}
}), {
	name: "user"
})); // userData

export default userData;