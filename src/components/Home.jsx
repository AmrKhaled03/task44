import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

const Home = () => {
  return (
  <div className='home'>
<div className='container'>
<div className='row'>
<div className='col-12'>
<h1>
    WELCOME TO OUR RESTAURANT
</h1>
<p>
    Do You Want To See Our Menu ?
</p>

<Link to='/products' className='btn btn-warning text-center text-light'>
  Explore
</Link>
  

</div>
</div>
</div>
  </div>
  )
}

export default Home