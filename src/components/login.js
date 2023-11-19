import React from 'react'
import Cycle from '../assets/Group 3.png'

export const Login = () => {
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
                <input type='email' placeholder='E-mail' style={{ borderRadius: "20px", lineHeight: "42px", backgroundColor: '#1F1919', boxShadow: "inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947", border: "black", marginBottom: "25px" }} />
                <input type='password' placeholder='Password' style={{ borderRadius: "20px", lineHeight: "42px", backgroundColor: '#1F1919', boxShadow: "inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947", border: 'black', marginBottom: "25px" }} />
                <button style={{
                    borderRadius: "20px",
                    lineHeight: "42px",
                    color: 'white',
                    background: 'linear-gradient(#00FF2580,#36A54680, black)',
                    fontWeight: 'bold',
                    margin: "30px 0 25px"

                }}>Login</button>
                <div style={{
                    fontSize: "15px",
                    color: "#36A546"
                }}>Forgot Password?</div>
            </div>
        </div>
    )
}
