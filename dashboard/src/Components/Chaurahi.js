import React, { useState } from 'react'

function Chaurahi() {



    // const [news, setNews] = useState('')
    const [data, setData] = useState('')
    const [enteredSearchData1, setEnteredSearchData1] = useState('')
    const Getdata = async () => {

        const res = await fetch(`http://localhost:5000/api/wholedata/${enteredSearchData1}`);
        const data = await res.json();
        setData(data.data)
        console.log("fetched", data);
    }
    return (
        <div>

            {/* // search By plotID */}
            <input className="form-control me-2" onChange={(e) => {
                setEnteredSearchData1(e.target.value)

            }} style={{ width: "12%" }} type="search" placeholder="PlotID-Chaurahi " aria-label="Search" />
            <button onClick={Getdata} >Search</button>


             {/* //search By FarmerID */}
            <input className="form-control me-2" onChange={(e) => {
                // setSearchFarmerData(e.target.value)

            }} style={{ width: "12%" }} type="search" placeholder="Farmer-ID-Chaurahi " aria-label="Search" />
            <button onClick={Getdata} >Search</button>




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

export default Chaurahi