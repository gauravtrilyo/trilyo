import React from 'react'
import  { Redirect } from 'react-router-dom'

const test2 = (props) => {
	if (props.loggedinUserEmail !== 'foo2@themnate.net')
    return <Redirect to='/app/test1'  />	
  return <div> My Test 2 Component </div>
}

export default test2
