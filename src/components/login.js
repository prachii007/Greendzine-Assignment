import React, { useState } from 'react'
import Cycle from '../assets/Group 3.png'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const goLogin = () => {
        if (email === "prachi@gmail.com" && password === "password") {
            navigate('/home')
        }
        else {
            alert("Email or password is incorrect")
        }
    }
    return (
        <div className='Container'>
            <img src={Cycle} style={{ marginBottom: "20px" }} />
            <div
                style={{ color: "#36A546CC", fontSize: "16px", marginBottom: "40px" }}>
                We are electric
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <input onChange={obj => setEmail(obj.target.value)} type='email' placeholder='E-mail' style={{ borderRadius: "20px", lineHeight: "42px", color: "white", backgroundColor: '#1F1919', boxShadow: "inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947", border: "black", marginBottom: "25px" }} />
                <input onChange={obj => setPassword(obj.target.value)} type='password' placeholder='Password' style={{ borderRadius: "20px", lineHeight: "42px", color: "white", backgroundColor: '#1F1919', boxShadow: "inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947", border: 'black', marginBottom: "25px" }} />
                <button style={{
                    borderRadius: "20px",
                    lineHeight: "42px",
                    color: 'white',
                    background: 'linear-gradient(#00FF2580,#36A54680, black)',
                    fontWeight: 'bold',
                    margin: "30px 0 25px"

                }} onClick={goLogin}>Login</button>
                <div style={{
                    fontSize: "15px",
                    color: "#36A546"
                }}>Forgot Password?</div>
            </div>
        </div>
    )
}
