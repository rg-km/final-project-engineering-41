import React from 'react'
// import AccountSettings from './components/AccountSettings.js'
// import AdminSettings from './components/adminSettings.js'
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


export default function Settings() {
 const { role } = useParams();

 const [byRole, setRole] = React.useState({})
    
 const fetchRole = async () => {
    const res = await axios.get(`http://localhost:5000/api/user/login/${role}`,{
      params: {
        role,
      },
      withCredentials: true,
    });
    setRole(res.data);
  }

  React.useEffect(() => {
    fetchRole();
  }, [])

  return (
    <>
      {/* {byRole === "admin" ? <AdminSettings /> : <AccountSettings />} */}
    </>
  )
}
