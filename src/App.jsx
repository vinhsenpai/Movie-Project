import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar.jsx'
import Movie from './Movie/Movie.jsx'
import Movies from './Data/Data.jsx'
import Description from './Description/Description.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Navbar />
      <div className='explore-test'>Explore</div>
      <div className='question-test'>What are you gonna watch today ?</div>
      <Description />
      <div className='lastestRelease'>
        <div className='newRelease-test'>New Release</div>
        <div className='anime-list'>
          <div className="div1"><Movie item={Movies[1]} /></div>
          <div className="div2"><Movie item={Movies[2]} /></div>
          <div className="div3"><Movie item={Movies[3]} /></div>
          <div className="div4"><Movie item={Movies[4]} /></div>
          <div className="div5"><Movie item={Movies[5]} /></div>
          <div className="div6"><Movie item={Movies[6]} /></div>
        </div>
      </div>
    </div>
  )
}

export default App
