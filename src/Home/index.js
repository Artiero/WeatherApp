import { MDBSpinner } from 'mdb-react-ui-kit'
import React from 'react'
import './index.css'
import location from '../assets/image/location.png'
import { Row, Col} from 'reactstrap'
import CardWeather from '../assets/Card'
import CardOption from '../assets/CardOption'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
    const [weather, setWeather] = useState([])
    const [daily, setDaily] = useState([])
    // Weather = variabel, setWeather = mengeset data ke dalam Weather
    // useState = deklarasi untuk tipe data variabel
    
    useEffect(() => {
        const dataWeather = async() => {
            await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=c8521d3f5c08eea07bce474b3af00a6b')
            .then( (response) => {
            // handle success
            // console.log("cek data",response)
            setWeather(response.data);
            // data diseimpan ke dalam SetWeather
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })
    }
        // console.log("weather", weather.length===0)
        // console.log("data weather",weather)
    dataWeather()

        const dataDay = async() => {
            // console.log("cek data day")
            await axios.get('https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=c8521d3f5c08eea07bce474b3af00a6b')
            .then((response) => {
                // console.log("dataDay", response)
                setDaily(response.data.list);
            })
            .catch(function(error){
                console.log(error)
            })
    }
    dataDay()

}, [])

    const TheDay = (a) => {
        const time = (a)
        const date = new Date(time * 1000);
        const day = date.getDay();
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const dayName = daysOfWeek[day]

        return dayName;
    }
    

    // console.log("ini daily",daily)

return (
    <>
        {weather&&daily.length===0?(<MDBSpinner grow>
        <span className='visually-hidden'>Loading...</span>
        </MDBSpinner>):(<div className='homepage'>
        
        <div className='container' style={{padding:'0px'}}>
            <Row>
                <Col>
                <h1>Hi, Weather . . .</h1>
                    <Row>
                        <Col className='d-flex' style={{paddingLeft:'0'}} sm="6" lg="5">
                            <img className='imageLocation' src={location} alt="" style={{ height:'30px'}} />
                            <h2>{weather.name}, {weather.sys.country}</h2>
                        </Col>
                        <Col style={{paddingLeft:'0'}} sm="6" lg="5">
                        </Col>
                    </Row>
                </Col>
                <Col style={{paddingTop:'50px'}} >
                <CardWeather data={weather}/>
                </Col>
            </Row>
            <Row>
                {daily.length !== 0 && daily.filter((f,key) => key < 5).map((e,index) => {
                    return (<Col key={index} className='DataDaily' lg='4'>
                    <h1 style={{fontFamily:'Roboto', fontSize:'20px', fontWeight:'700px'}}>{TheDay(e.dt)} {e.dt_txt}</h1>
                    <CardOption data1={e} />{console.log("data e",daily)}
                </Col>)
                })}
            </Row>
        </div>
        </div>)}
    </>
    
)
}

