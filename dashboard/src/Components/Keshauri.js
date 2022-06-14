import React, { useState } from 'react'

function Overview() {


    const [data, setData] = useState('')
    const [enteredSearchData, setEnteredSearchData] = useState('')
    const getdata = async () => {
        const api=`http://localhost:5000/Alldata/${enteredSearchData}`;
        console.log("***",api);
        const res = await fetch(`http://localhost:5000/Alldata/${enteredSearchData}`);
        const data = await res.json();
        setData(data.farmarData)
        console.log("fetched", data);


    }
    return (
        <div>

            {/* // search By plotID */}
            <input className="form-control me-2" onChange={(e) => {
                setEnteredSearchData(e.target.value)

            }} style={{ width: "12%" }} type="search" placeholder="PlotID-Keshauri " aria-label="Search" />
            <button onClick={getdata} >Search</button>


             {/* //search By FarmerID */}
            <input className="form-control me-2" onChange={(e) => {
                // setSearchFarmerData(e.target.value)

            }} style={{ width: "12%" }} type="search" placeholder="Farmer-ID-Keshauri " aria-label="Search" />
            <button onClick={getdata} >Search</button>




            <div className='container'>
                <div className='row'>
                    {
                        data.length > 0 && data.map((value => {             //Mapping the fetched value from Api
                            return (
                                <div className="col-4">
                                    <div className="card" style={{ width: "100%" }}>

                                        <div className="card-body">
                                            <p>Farmer_Name:-------- {value.FarmerName}</p>
                                            <p>Plot_ID:----------------- {value.plotId}</p>
                                            <p>VillageName:--------------{value.VillageName}</p>
                                            <p>VillageID:----------------{value.VillageId}</p>
                                            <p>Plot_Latitude:---------------{value.Latitude}</p>
                                            <p>Plot_Longitude:----------------{value.Longitue}</p>
                                            <p>Plot_Area:---------------------{value.Area}</p>
                                            <p>Farmer_MobileNumber:--------------{value.mobileNo}</p>
                                            <p>Plot_SoilType:--------------------- {value.soilType}</p>


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

export default Overview

// Area: "0.2 ac"
// Date: "2022-05-17T04:34:04.867Z"
// FarmerId: "BH18"
// FarmerName: "Ravi Singh"
// Latitude: 24.8702148
// Longitue: 85.6203725
// Perimeter: 43.43
// VillageId: "BH001001"
// VillageName: "Marui"
// crop: "Paddy"
// mobileNo: 8789690758
// plotId: "BH00700100006"
// remark: 10
// season: "summer"
// soilType: "clay soil"
// variety: "Sonam"
// yield: "abcdu"