import React from 'react'
import loader from '../../assets/loader.gif'

const Spinner = () => {
  return (
    <>
      <img 
      src={loader} 
      alt='Loading...'
        style={{display:'flex', justifyContent:'center', width: '300px', height:'300px'}}
      />
    </>
  )
}

export default Spinner
