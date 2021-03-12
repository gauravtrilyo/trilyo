import React from 'react'
import  { Redirect } from 'react-router-dom'

const test1 = (props) => {
	if (props.token)
    return <Redirect to='/app/test2'  />	
  return <div> My Test Component </div>
}

export default test1
