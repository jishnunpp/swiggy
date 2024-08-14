import React ,{useState}from 'react'
import { FaStar } from "react-icons/fa";
import './card.css'
import {CardData }from '../CardData/Data'

const Card = ({name,cloudinaryImageId,aggregatedDiscountInfoV3,avgRating,sla,locality,areaName}) => {


const {header} ={...aggregatedDiscountInfoV3};
const {slaString} ={...sla};


  return (
    <div className='card'>
        <div className='image-section'>
            <img className='food-image' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+cloudinaryImageId }alt='ss'/>
        <p className='hotel-offer'>{header}</p>

        </div>
        
<p className='hotel-name'>{name}</p>

 <p className='hotel-rating'><span><FaStar className='star'/></span>{avgRating}<span className='time'>{slaString}</span></p>
<p className='hotel-locality'>{locality}</p>
<p className='hotel-area'>{areaName}</p> 
 </div>
  )
}

export default Card