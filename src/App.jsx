import React from 'react'
import './App.css'
import data from './data'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
function App() {
  
  const new_data=data.map((item)=>{
    return <Card
      key={item.id}
      item={item}
      

    />
  })
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      
        {/* <Card 
          img="Images/katie-zaferes.png"
          rating="5.0"
          reviewCount={6}
          title="Life Lessons with Katie Zaferes"
          price={136}
          country="INDIA"

         /> */}
         <section className="cards-list">
         {new_data}
         </section>
         
        
     
      {/* <Hero/> */}
    </div>
  )
}

export default App

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/