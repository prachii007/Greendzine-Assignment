import React from 'react'
import Woman from '../assets/Group 46.png'
import Logo from '../assets/moptro logo.png'
export const Home = () => {
  return (
    <div className='Container'>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: "20px" }}>
        <img src={Woman} />
      </div>
      <div>
        <img src={Logo} style={{ marginBottom: "20px" }} />
      </div>
      <div style={{
        backgroundColor: "#1A2C2C", color: "#FFFFFFB3", lineHeight: "45px", borderRadius: "20px"
      }}>Employee Productivity Dashboard</div>
      <div style={{
        backgroundColor: "#5E5E5E",
        // opacity: "0.4",
        border: "1px solid green",
        borderRadius: "10px",
        color: "White",
        fontSize: "12px",
        textAlign: "left"
      }}>
        <div style={{ margin: "20px 0 " }}>
          <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "10px" }}>
            <div>Productivity on Monday</div>
            <div>4%</div>
          </div>
          <div style={{
            width: "4%",
            border: "1px solid #36A546",
            height: "5px",
            borderRadius: "20px",
            backgroundColor: "#36A54680",
            marginLeft: "10px"
          }}></div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "10px" }}>
            <div>Productivity on Tuesday</div>
            <div>92%</div>
          </div>
          <div style={{
            width: "42%",
            border: "1px solid #36A546",
            height: "5px",
            borderRadius: "20px",
            backgroundColor: "#36A54680",
            marginLeft: "10px"
          }}></div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "10px" }}>
            <div>Productivity on Wednesday</div>
            <div>122%</div>
          </div>
          <div style={{
            width: "72%",
            border: "1px solid #36A546",
            height: "5px",
            borderRadius: "20px",
            backgroundColor: "#36A54680",
            marginLeft: "10px"
          }}></div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "10px" }}>
            <div>Productivity on Thursday</div>
            <div>93%</div>
          </div>
          <div style={{
            width: "43%",
            border: "1px solid #36A546",
            height: "5px",
            borderRadius: "20px",
            backgroundColor: "#36A54680",
            marginLeft: "10px"
          }}></div>
        </div> <div style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "10px" }}>
            <div>Productivity on Friday</div>
            <div>89%</div>
          </div>
          <div style={{
            width: "32%",
            border: "1px solid #36A546",
            height: "5px",
            borderRadius: "20px",
            backgroundColor: "#36A54680",
            marginLeft: "10px"
          }}></div>
        </div> <div style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "10px" }}>
            <div>Productivity on Saturday</div>
            <div>98%</div>
          </div>
          <div style={{
            width: "48%",
            border: "1px solid #36A546",
            height: "5px",
            borderRadius: "20px",
            backgroundColor: "#36A54680",
            marginLeft: "10px"
          }}></div>
        </div>
      </div>
      <footer style={{ position: "sticky", bottom: "0", color: "white" }}>
        <div>Home</div>
        <div>Emp</div>
      </footer>
    </div >
  )
}
