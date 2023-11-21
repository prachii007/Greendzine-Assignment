import React from 'react'

export const EmpCard = ({ data }) => {
    return (
        <div
            className='card-child'
            style={{
                color: "#C0C4C3",
                textAlign: 'left',
                borderRadius: "10px",
                width: "89%",
                marginBottom: "20px",
                padding: "10px",
                backgroundColor: '#131716',
            }}>
            <table cellPadding={8} style={{ width: "100%" }}>
                <tbody>
                    <tr>
                        <td style={{ color: "#8e9085" }}>EMP ID</td>
                        <td>:</td>
                        <td style={{ fontWeight: "bold" }}>{data.empID}</td>
                        <td style={{
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "50%",
                            border: "2px solid black",
                            height: "50px",
                            width: "50px",
                            background:"#38383840"
                        }}>
                            <div style={{
                                textAlign: 'center',
                                margin: "0"
                            }}>{data.empID}</div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ color: "#8e9085" }}>Name</td>
                        <td>:</td>
                        <td style={{ fontWeight: "bold" }}>{data.name}</td>
                    </tr>
                    <tr>
                        <td style={{ color: "#8e9085" }}>DOB</td>
                        <td>:</td>
                        <td style={{ color: "orange", fontWeight: "bold" }}>{data.dob}</td>
                    </tr>
                    <tr>
                        <td style={{ color: "#8e9085" }}>Role</td>
                        <td>:</td>
                        <td style={{ color: "green", fontWeight: 'bold' }}>{data.role}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
