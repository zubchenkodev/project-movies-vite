import React from 'react'
import BackButton from '../components/BackButton'
import { Link } from 'react-router-dom'

const PageIsNotFound = () => {
  return (
    <div className="container">
        <div className='not-found'>
            <h1>404</h1>
            <h3>Page is not found</h3>
            <BackButton target={'movies'}>Go to Movies</BackButton>
        </div>
    </div>
    
    

  )
}

export default PageIsNotFound