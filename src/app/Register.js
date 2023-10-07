
import Link from 'next/link';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        const res = await register_user(formData);
        if (res.success) {
            toast.success(res.message);
        }
        else {
            toast.error(res.message);
        }
    };

    return (
        <>
       
            <div className="info-section">
               <p className="logo-info"> Trip tribe</p>
            </div>
            <div className="login-section">
                <h1 className="login-heading">Login</h1>
                <div className="login-form">
                <input type="email" placeholder="E-mail" className="sign-up" />
                <input type="password" placeholder="password" className="sign-up" />
                <button className="sign-in">Sign in</button>
            </div>
            <hr />    
         </div>
        </>
      
    )
}