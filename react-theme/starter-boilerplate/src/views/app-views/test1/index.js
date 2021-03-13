import React from 'react'
import  { Redirect } from 'react-router-dom'

const test1 = (props) => {
	if (props.loggedinUserEmail !== 'foo1@themnate.net')
    return <Redirect to='/app/test2'  />	
  return <div> My Test 1 Component </div>
}

export default test1
