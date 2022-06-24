import create from "zustand";
import axios from "axios";
import {persist} from "zustand/middleware"

const coursesData = create(persist((set) => ({
	courses: [],
	fetch: async () => {
		try {
			const response = await axios.get("http://localhost:8080/api/materi", {
				withCredentials: true
			})

			set({courses: response?.data?.materi || []})
		} catch (error) {	
			set({courses: []})
		}
	}
}), {
	name: "course"
})); // userData

export default coursesData;