import React from 'react'
import Woman from '../assets/Group 46.png'
import Logo from '../assets/moptro logo.png'
import { useNavigate } from 'react-router-dom';


const ProductivityBar = ({ label, percentage }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '10px' }}>
        <div>{label}</div>
        <div style={{ color: '#36A546' }}>{percentage}</div>
      </div>
      <div
        style={{
          width: Number(percentage) - 40,
          border: '1px solid #36A546',
          height: '5px',
          borderRadius: '20px',
          backgroundColor: '#36A54680',
          marginLeft: '10px',
        }}
      ></div>
    </div>
  );
};
export const Home = () => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/home')
  }
  const goEmp = () => {
    navigate('/employees')
  }
  return (
    <div className='Container'>
      {/* top container */}
      <div className='top-con'>
        {/* <div style={{ display: 'flex',border: "5px solid red", padding: "17px", justifyContent: 'flex-end', marginBottom: "20px" }}> */}
        <img className='women' src={Woman} />
        {/* </div> */}
        <div>
          <img src={Logo} className='logo' />
        </div>
      </div>
      <div className='middle-con' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{
          backgroundColor: "#1A2C2C", width: "90%", color: "#FFFFFFB3", lineHeight: "45px", borderRadius: "20px"
        }}>Employee Productivity Dashboard</div>
        <div style={{
          // opacity: "0.4",eq
          backgroundColor: "rgb(94, 94, 94,.4)",
          boxShadow: "inset 0px 4px 0px #00000040",
          // background: "#5E5E5E82 0% 0% no-repeat padding-box ",
          // border: "1px solid green",
          width: "90%"
          , borderRadius: "10px",
          color: "White",
          fontSize: "12px",
          textAlign: "left"
        }}>
          <div style={{ margin: "20px 0 " }}>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "10px" }}>
              <div>Productivity on Monday</div>
              <div style={{ color: "#36A546" }}>4%</div>
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
              <div style={{ color: "#36A546" }}>92%</div>
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
              <div style={{ color: "#36A546" }}>122%</div>
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
              <div style={{ color: "#36A546" }}>93%</div>
            </div>
            <div style={{
              width: "43%",
              border: "1px solid #36A546",
              height: "5px",
              borderRadius: "20px",
              backgroundColor: "#36A54680",
              marginLeft: "10px"
            }}>
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "10px" }}>
              <div>Productivity on Friday</div>
              <div style={{ color: "#36A546" }}>89%</div>
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
              <div style={{ color: "#36A546" }}>98%</div>
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
      </div>
      <div className='bottom-con'>

        <div onClick={goHome}>Home</div>
        <div onClick={goEmp}>Emp</div>
      </div>
    </div >
  )
}
