import React from 'react'
import Home from './Home'

export default function Sports({category,setProgress}) {
  return (
    <div>
      <Home category={category} setProgress={setProgress}/>
    </div>
  )
}
