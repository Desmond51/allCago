// import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

export default function LoadingBox() {
  return (
    <Spinner> 
    <span className='visually-hidden'> Loading...</span>
    </Spinner>
  )
}
