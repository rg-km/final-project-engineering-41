import create from "zustand";

const formData = create((set) => ({
    emailData : "Enter Your Username",
    passwordData : "Enter Your Password"
}))

export default formData;