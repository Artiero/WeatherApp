import React, { useEffect, useState } from 'react'
import { Card,
CardBody,
Row,
Col } from 'reactstrap'
import ImageOption from '../image/Group 11.png'
import ImageOption2 from '../image/Group 22.png'
import ImageOption3 from '../image/outline.png'
import ImageOption4 from '../image/Group 23.png'
import ImageOption5 from '../image/Group 24.png'
import rain from '../image/rain.png'
import humidity from '../image/humidity.png'
import Wind from '../image/Wind.png'
import './index.css'

export default function CardOption(e) {
    // console.log("data daily.",e)
    const [image, setImage] = useState("")
    useEffect(() => {
        if (e?.data1?.weather[0]?.main === "Rain" ){
            setImage(ImageOption)
        } else if (e?.data1?.weather[0]?.main === "Clouds") {
            setImage(ImageOption2)
        } else if (e?.data1?.weather[0]?.main === "Thunderstorm") {
            setImage(ImageOption3)
        } else if (e?.data1?.weather[0]?.main === "Snow") {
            setImage(ImageOption4)
        } else if (e?.data1?.weather[0]?.main === "Clear") {
            setImage(ImageOption5)
        }
    }, [])

  return (
    <>
        
                <div>
                <Card
                className="backgound-custom my-2"
                style={{ borderRadius:'20px'}}>
                
                <CardBody style={{padding:'0px'}}>
                <Row>
                    <Col
                    style={{padding:'0px'}} >
                        <img src={image} alt="" style={{paddingTop:'40px', paddingLeft:'30px'}}/>
                        <p style={{fontSize:'32px', fontWeight:'500', color:'#EBE2CD', margin:'0px',paddingTop:'10px',paddingLeft:'30px'}}>{e.data1.weather[0].main}</p>
                    </Col>
                    <Col
                    style={{paddingLeft:'20px', margin:'0px'}} >
                    <div className='contens' style={{ paddingTop:'40px'}}>
                        <p style={{fontSize:'32px', fontWeight:'300', margin:"0px", paddingBottom:'5px'}}>{e.data1.main.pressure} <img className='rain' src={rain} alt=""/></p>
                        <p style={{fontSize:'32px', fontWeight:'300', margin:"0px", paddingBottom:'5px'}}>{e.data1.main.humidity} <img className='humidity' src={humidity} alt=""/> </p>
                        <p style={{fontSize:'32px', fontWeight:'300', margin:"0px", paddingBottom:'15px'}}>{e.data1.wind.speed} <img className='Wind' src={Wind} alt=""/> </p>
                    </div>
                    </Col>
                </Row>
        
                </CardBody>
                
                </Card>
            </div>
        
    </>
)
}
