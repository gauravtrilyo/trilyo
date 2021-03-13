import React from 'react'
import  { Redirect } from 'react-router-dom'
import exampleService from '../../../services/ExampleService'

function fetchData(){
  exampleService.fetchData(JSON.stringify({
    user:'foo2',
    password:'foo2'
  })).then(resp => console.log('resp', resp))
}
fetchData()

const test2 = (props) => {
	if (!props.token)
    return <Redirect to='/app/test1'  />	
  return <div> My Test Component </div>
}

export default test2


