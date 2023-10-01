import React from 'react'
import Home from './Home'

export default function Tech({category,setProgress}) {
  return (
    <>
      <Home category={category} setProgress={setProgress}/>
    </>
  )
}
