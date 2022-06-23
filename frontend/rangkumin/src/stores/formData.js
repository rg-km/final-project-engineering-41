import create from "zustand";

const formData = create((set) => ({
    emailData : "Enter Your Email",
    passwordData : "Enter Your Password"
}))

export default formData;