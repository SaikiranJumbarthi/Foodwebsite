import React, { useState } from 'react';
import Mealcards from './Mealcards';


const Mainpage = () => {
    const [data,setData] = useState();
    const [search, setSearch] = useState("");
    const [msge,setMsge] = useState("");

    const handleInput = (event) => {
       setSearch(event.target.value)
    }

   const myFun = async() => {
    if(search == "") {
      setMsge("Please Enter Input")
    } else {
       const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`) 
       const jsonData = await get.json()
    //    console.log(jsonData.meals);
       setData(jsonData.meals)
       }   
    //    console.log(data);
  }

  return (
    <>
       <h1 className='head'>Food Recipe App</h1>
      <div className='container'>
        <div className='searchBar'>
            <input type='text' placeholder='EnterDishes' onChange={handleInput}/>
            <button onClick={myFun}>Search</button>       

        </div>
        <h4 className='error'>{msge}</h4>
        <div>
        <Mealcards detail = {data}/>
        </div>
      </div>

    </>
  )
}

export default Mainpage