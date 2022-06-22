import create from "zustand/react";
import React from "react";

const formData = create((set) => ({
    emailData : "Enter Your Email",
    passwordData : "Enter Your Password"
}))

export default formData;