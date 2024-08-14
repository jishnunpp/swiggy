import React  from 'react'
import'./body.css'
import Card from '../Card/Card'
import {CardData }from '../CardData/Data'
import { useState }  from  'react';
import {useEffect}from 'react';


function filterData (searchText,restaurants){
  // const {name}=restaurants.info;
  const filterData=restaurants.filter ((value)=>value.info.name.includes(searchText));
 
  return filterData;
 
};

const Body = () => {
  const [searchText,setSearchText]=useState()
  const [restaurants,setRestaurants]=useState(CardData)

  useEffect(()=>{
  getrestaurants()
},[])

async function getrestaurants(){
  const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
  const json = await data.json();
  // console.log(json)
  setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}




  return (
    <>
    <div className='search container'>
      <input type='text' placeholder='search here ' value={searchText} onChange={ (e)=>{setSearchText(e.target.value)}}/>
      <button onClick={ ()=>{ const data= filterData(searchText,restaurants); setRestaurants(data);} }>search</button>
    <h1>{searchText}</h1>

    </div>
    <div className='body'>

      
    {restaurants.map((restaurant)=>{
      return <Card {...restaurant.info} />
    })}
    

    </div>
    </>
  )
}

export default Body

{/* <Card name={CardData[0].info.name}  cloudinaryImageId={CardData[0].info.clo udinaryImageId} avgRating={CardData[0].info.avgRating} time={CardData[0].info.sla.slaString} offer={CardData[0].info.aggregatedDis countInfoV3.header} />
     */} 