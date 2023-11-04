import React from 'react'

function Heading(props) {
  return (
    <h1 className='font-serif text-slate-950 underline mb-1 font-extrabold text-center mt-12 text-4xl'>{props.title}</h1>
  )
}

export default Heading