import React from 'react'

export const EmpCard = ({ data }) => {
    return (
        <div
            style={{
                color: "white",
                textAlign: 'left',
                borderRadius: "10px",
                width: "90%",
                marginBottom: "20px",
                padding: "10px",
                backgroundColor: '#5E5E5E82',
            }}>
            <table cellPadding={8}>
                <tbody>
                    <tr>
                        <td>EMP ID</td>
                        <td>:</td>
                        <td style={{ fontWeight: "bold" }}>{data.empID}</td>
                        <td style={{
                            borderRadius: "50%",
                            border: " 1px solid black",
                            height: "20px",
                            width: "20px",
                            textAlign: 'center'
                        }}>{data.empID}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>:</td>
                        <td style={{ fontWeight: "bold" }}>{data.name}</td>
                    </tr>
                    <tr>
                        <td>DOB</td>
                        <td>:</td>
                        <td style={{ color: "orange", fontWeight: "bold" }}>{data.dob}</td>
                    </tr>
                    <tr>
                        <td>Role</td>
                        <td>:</td>
                        <td style={{ color: "green", fontWeight: 'bold' }}>{data.role}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
