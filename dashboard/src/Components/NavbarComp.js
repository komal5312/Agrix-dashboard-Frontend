import React, { useState, useEffect } from 'react'
//import { Navbar, Nav, Container, NavDropdown, NavLink } from 'react-bootstrap'
import axios from 'axios'
import './Agrix'


function NavbarComp() {



  
    const [data, setData] = useState('')
    const [enteredSearchData,setEnteredSearchData]=useState('')
    const getdata = async () => {
       
        const res = await fetch(`http://localhost:5000/Alldata/${enteredSearchData}`);
        const data = await res.json();
        setData(data.farmarData)
        console.log("fgdghfvhj",data);
        

    }

    useEffect(() => {
      
    getdata();
      
    }, [])
    

    // const [allData, setAllData] = useState([]);
    // const [filteredData, setFilteredData] = useState(allData);

    // useEffect(() => {
    //     axios('https://jsonplaceholder.typicode.com/albums/1/photos')
    //         .then(response => {
    //             console.log(response.data)
    //             setAllData(response.data);
    //             setFilteredData(response.data);
    //         })
    //         .catch(error => {
    //             console.log('Error getting fake data: ' + error);
    //         })
    // }, []);



console.log(typeof(data))

    return (

        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid" style={{ backgroundColor: '#23218f' }} >
                    <a className="navbar-brand" href='/' style={{ color: '#fff' }} >Agrix-Plot-Dashboard</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Overview" style={{ color: '#fff' }}>Overview</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Farmer_List" style={{ color: '#fff' }}>Farmers List</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/Implement_Banks" style={{ color: '#fff' }}>Implement Banks</a>

                            </li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" style={{ color: '#fff' }} href="/Cluster" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Clusters
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
                                    <li><a className="dropdown-item" href="/keshauri" style={{ color: '#9b32a8' }}>BH007(KESHAURI)</a></li>
                                    <li><a className="dropdown-item" href="/chaurahi" style={{ color: '#9b32a8' }}>BH005(CHAURAHI)</a></li>
                                    <li><a className="dropdown-item" href="/dumrama"style={{ color: '#9b32a8' }}>BH03(DUMRAMA)</a></li>
                                    <li><a className="dropdown-item" href="/daulatpur"style={{ color: '#9b32a8' }}>BH04(DAULATPUR)</a></li>
                                    <li><a className="dropdown-item" href="/lakhisharai"style={{ color: '#9b32a8' }}>BH05(LAKHISHARAI)</a></li>
                                    <li><a className="dropdown-item" href="/darbhanga">BH02(DARBHANGA)</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>

                        </ul>
    
 <input className="form-control me-2" onChange ={(e)=> {setEnteredSearchData(e.target.value)
                       
                        }}style={{ width: "12%" }} type="search" placeholder="Search-By-PlotID " aria-label="Search" />
                        <button onClick={getdata} >Search</button>
                       
                    </div>
                </div>
            </nav>



            <div className='container'>
                <div className='row'>
                    {
                        data.length>0 &&  data.map((value => {             //Mapping the fetched value from Api
                            return (
                                <div className="col-4">
                                    <div className="card" style={{ width: "100%" }}>
                                        
                                        <div className="card-body">
                                            <p>{value.FarmerName}</p>
                                            <p>{value.plotId}</p>
                                            <p>{value.VillageName}</p>
                                            <p>{value.VillageId}</p>
                                            <p>{value.Latitude}</p>
                                            <p>{value.Longitue}</p>
                                            <p>{value.Area}</p>
                                            <p>{value.mobileNo}</p>
                                            <p>{value.soilType}</p>
                                            

                                        </div>
                                    </div>

                                </div>
                            )

                        }))
                    }
                </div>
            </div>
        </div>







    )

}


export default NavbarComp