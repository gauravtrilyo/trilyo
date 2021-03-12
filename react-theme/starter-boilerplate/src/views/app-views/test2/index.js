import React from 'react'
import  { Redirect } from 'react-router-dom'

const test2 = (props) => {
	if (!props.token)
    return <Redirect to='/app/test1'  />	
  return <div> My Test Component </div>
}

export default test2
