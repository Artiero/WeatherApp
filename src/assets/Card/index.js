import React from 'react'
import { Card,
CardBody, Row, Col
} from 'reactstrap'
import './index.css'
import rain from '../image/rain.png'
import humidity from '../image/humidity.png'
import Wind from '../image/Wind.png'
import ImageCuaca from '../image/Group 4.png'


export default function CardWeather({data}) { 
  // console.log("ini data props", data)

  const TheDay = (a) => {
    const time = (a)
    const date = new Date(time * 1000);
    const day = date.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const dayName = daysOfWeek[day]

    return dayName;
}

  // console.log("hari ini", dayName)

  const Formating = (a) => {
      return Math.round(a-273.15);
    }
    
  
  return (
    <>
  <Card className="backgound-custom my-2" style={{ borderRadius:'20px'}}>
    <CardBody style={{padding:'0px'}}>
      <Row>
        <Col  lg={{ offset: 2, size:4}} style={{padding:'0px'}} >
          <div className='contens' style={{ paddingTop:'40px'}}>
            <h1 style={{fontSize:'40px', fontWeight:'400', padding:"0px"}} >Today</h1>
              <p style={{fontSize:'20px', fontWeight:'300',paddingTop:'8px',paddingBottom:'20px',margin:'0px'}} > 
                {Formating(data?.main?.temp_min)}&#8451; - {Formating(data?.main?.temp_max)}&#8451;</p>
              <p style={{fontSize:'32px', fontWeight:'300', margin:"0px", paddingBottom:'5px'}}>
                {data?.main?.pressure} <img className='rain' src={rain} alt=""/></p>
              <p style={{fontSize:'32px', fontWeight:'300', margin:"0px", paddingBottom:'5px'}}>
                {data?.main?.humidity} <img className='humidity' src={humidity} alt=""/> </p>
              <p style={{fontSize:'32px', fontWeight:'300', margin:"0px", paddingBottom:'15px'}}>
                {data?.wind?.speed} <img className='Wind' src={Wind} alt=""/> </p>
              <p style={{fontSize:'20px', fontWeight:'700', marginBottom:"23px"}}>{TheDay(data?.dt)}</p>
          </div>
        </Col>
        <Col lg={{ offset: 0, size: 6}} style={{padding:'0px', margin:'0px'}} >
          <img src={ImageCuaca} alt="" style={{paddingTop:'40px'}}/>
          <p style={{fontSize:'32px', fontWeight:'500', color:'#EBE2CD', margin:'0px',paddingTop:'10px',paddingLeft:'5px', textTransform:'capitalize'}}>
            {data.weather[0].description}</p>
        </Col>
      </Row>

    </CardBody>
    
  </Card>
    </>
  )
}

