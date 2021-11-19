import React, { useEffect, useState } from 'react';
import Card  from './Card';
import '../css/covid.css'

const CovidHeader = () =>{

    //https://api.covid19india.org/data.json
    let initialObject = {
        confirmed: 2000,
        deaths: 1000,
        recovered: 10000,
        lastupdatedtime: '13/08/2021 23:27:22'
    }
    let [ data, setData ] = useState( [ initialObject ] );

    const getCovidData =  () =>{
        return new Promise( ( resolve, reject ) => {
            fetch('https://data.covid19india.org/data.json').then( ( covidData ) => {
                return covidData.json();

            }).then( ( actualData ) =>{
                console.log(actualData);
                //console.trace(actualData);
                setData( actualData.statewise )
                resolve( actualData);
            } );
        });
    }

    useEffect( () =>{
        getCovidData( )
    }, [] );

    return(
        <div className='app'>
             <div className='header'>
                Covid-19  CoronaVirus Tracker
             </div>

            <ul className = 'cards'>
                <Card title="Our Country" value ="India"></Card>
                <Card title="Total Confirmed" value ={data[0].confirmed}></Card>
                <Card title="Total Recovered" value ={data[0].recovered}></Card>
                <Card title="Total Deceseasd" value ={data[0].deaths}></Card>
                <Card title="Last Update Time" value ={data[0].lastupdatedtime}></Card>
            </ul>


        </div>

    );

};

export default CovidHeader;