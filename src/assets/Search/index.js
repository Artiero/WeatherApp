import React from 'react'
import { InputGroup,
Input } from 'reactstrap'
import SearchZoomIn from '../image/search.png'
import './index.css'

export default function SearchWeather() {
    return (
        <div className='search-filed d-flex'>
            <Input style={{backgroundColor:'#F5ECD7', border:'0'}} placeholder="Seacrh Location" className='input-group'></Input>
            <img className='searchImg' src={SearchZoomIn} alt="logo" width='35px' style={{padding:'7px'}}/>
        </div>
    )
}
