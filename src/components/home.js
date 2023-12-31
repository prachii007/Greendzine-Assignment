import React, { useState } from 'react'
import Woman from '../assets/Group 46.png'
import Logo from '../assets/moptro logo.png'
import { EmpCard } from './empCard';
import EmpData from '../components/empData.json'
export const Home = () => {

  const [keyword, updateKeyword] = useState("");
  const [showHomeComp, setShowHomeComp] = useState(true);
  const [showEmpComp, setShowEmpComp] = useState(false)

  const HomeShow = () => {
    setShowHomeComp(true);
    setShowEmpComp(false)
  }
  const EmpShow = () => {
    setShowHomeComp(false);
    setShowEmpComp(true)
  }
  return (
    <div className='Container'>
      <div className='top-con'>
        <img className='woman' src={Woman} />
        <div className='big-circle'>
          <div className='small-circle'>{EmpData.length}</div>
        </div>
      </div>
      {showHomeComp &&
        <div className='middle-con' >
          <div style={{
            backgroundColor: "#1A2C2C",
            width: "90%",
            color: "#8e9085", lineHeight: "45px", borderRadius: "20px"
          }}>Employee Productivity Dashboard</div>
          <div style={{
            background: "#131917",
            boxShadow: "inset 0px 4px 0px #00000040",
            width: "90%",
            borderRadius: "10px",
            color: "White",
            fontSize: "12px",
            padding: "20px",
            boxSizing: "border-box"
          }}>
            <div style={{ marginBottom: "20px" }}>
              <div style={{
                display: "flex", justifyContent: "space-between"
                , width: "80%"
                , margin: "0 auto 10px", marginBottom: "10px"
              }}>
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
              <div style={{ display: "flex", justifyContent: "space-between", width: "80%", margin: "0 auto 10px", marginBottom: "10px" }}>
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
              <div style={{ display: "flex", justifyContent: "space-between", width: "80%", margin: "0 auto 10px", marginBottom: "10px" }}>
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
              <div style={{ display: "flex", justifyContent: "space-between", width: "80%", margin: "0 auto 10px", marginBottom: "10px" }}>
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
              <div style={{ display: "flex", justifyContent: "space-between", width: "80%", margin: "0 auto 10px", marginBottom: "10px" }}>
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
              <div style={{ display: "flex", justifyContent: "space-between", width: "80%", margin: "0 auto 10px", marginBottom: "10px" }}>
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
        </div>}
      {showEmpComp &&
        <div className='middle-con' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className='search-wrapper' style={{ width: "90%" }}>
            <input
              id="searchbar"
              onChange={obj => updateKeyword(obj.target.value)}
              type='text' placeholder='Search with name'
              style={{
                borderRadius: "20px",
                lineHeight: "42px",
                color: "white",
                backgroundColor: "#131716",
                border: "black",
                marginBottom: "25px",
                width: "100%",
                textAlign: 'center',
                fontWeight: "bold",
                marginTop: "20px",
                fontSize: "20px"
              }}
            />
            <div className='search-icon'>
              <i className="ri-search-line" style={{
                color: "#C0C4C3", fontSize: "20px"
              }} />
            </div>
          </div>
          <div className='scroll-container' style={{
            width: "90%",
            maxHeight: '400px',
            overflowY: 'auto',
            overflowX: "hidden",
            display: 'flex',
            flexDirection: "column",
            paddingBottom: "70px",
          }}>
            {EmpData.filter(item => {
              if (item.name.toLowerCase().includes(keyword.toLowerCase())) {
                return item;
              }
            }).map((data, index) => {
              return (
                <EmpCard key={index} data={data} />)
            })}
          </div>
        </div>
      }
      <div className='bottom-con'>
        <div onClick={HomeShow}>
          <i className="ri-home-4-fill" style={{ color: "green" }} />
        </div>
        <div onClick={EmpShow}>
          <i className="ri-user-fill" style={{ color: "green" }} />
        </div>
      </div>
    </div >
  )
}
