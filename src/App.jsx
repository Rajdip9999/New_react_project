import React from "react";
import Navbar from '../component/nav.jsx'
import Footer from '../component/footer.jsx'
import Home from '../component/home.jsx'
import { Routes, Route, Link } from "react-router-dom"
import Cou from '../component/raaz.jsx'
import './App.css'


const App = () => { 
  let Navlist = ["Home", "About", 'Join', 'Welcome']
  let secondNav = ['Thanks', 'Home', 'back']
  const Action = async () => {
    const home = document.getElementsByClassName('homer')

    //   const h1 = home[0].querySelector('h1')
    //   const p = home[0].querySelector('p')
    for (let ff of home) {
      ff.querySelector('h1').innerText = 'Raaz'
      ff.querySelector('p').innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam'
      ff.style.backgroundColor = 'red'
      ff.style.fontWeight = 'bold'
      ff.style.color = 'white'
      ff.style.width = '300px'
    }

  }

  return (
    <>
      <div className="homeMain">
        <Navbar navlist={Navlist} logoText="weplay Friends list" />

<Routes>
  <Route path="/" element={<Cou/>}/>
  <Route path="home" element={<Home/>}/>
  <Route path="Contact" element={<Footer/>}/>
</Routes>

<Footer/>

        {/* <div className="home">
          <div className="homer">
            <h1>This is site</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam, pariatur distinctio neque necessitatibus molestiae similique natus consectetur deleniti iure ad nostrum qui?</p>
            <button onClick={Action}>Click</button>
          </div>

          <div className="homer">
            <h1>This is site</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam, pariatur distinctio neque necessitatibus molestiae similique natus consectetur deleniti iure ad nostrum qui?</p>
          </div>

          <div className="homer">
            <h1>This is site</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam, pariatur distinctio neque necessitatibus molestiae similique natus consectetur deleniti iure ad nostrum qui?</p>
          </div>

        </div> */}

        {/* <div className="home">

          <div className="homer">
            <h1>This is site</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam, pariatur distinctio neque necessitatibus molestiae similique natus consectetur deleniti iure ad nostrum qui?</p>
          </div>
          <div className="homer">
            <h1>This is site</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam, pariatur distinctio neque necessitatibus molestiae similique natus consectetur deleniti iure ad nostrum qui?</p>
          </div>
          <div className="homer">
            <h1>This is site</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam, pariatur distinctio neque necessitatibus molestiae similique natus consectetur deleniti iure ad nostrum qui?</p>
          </div>
        </div> */}
      </div>

    </>
  )
}

export default App