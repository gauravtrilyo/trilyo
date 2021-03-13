import React from 'react'
import  { Redirect } from 'react-router-dom'
import exampleService from '../../../services/ExampleService'


const test1 = (props) => {
  function fetchData(){
    exampleService.fetchData(JSON.stringify({
      user:'foo1',
      password:'foo1'
    })).then(resp => console.log('resp', resp))
  }
  fetchData()
  return(
    <div>
      <h1>user</h1>
    </div>
  )
}

export default test1
