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
            <table cellPadding={8}>
                <tbody>
                    <tr>
                        <td style={{ color: "#8e9085" }}>EMP ID</td>
                        <td>:</td>
                        <td style={{ fontWeight: "bold" }}>{data.empID}</td>
                        <td style={{
                            borderRadius: "50%",
                            border: "1px solid black",
                            height: "20px",
                            width: "20px",
                            textAlign: 'center'
                        }}>{data.empID}</td>
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
