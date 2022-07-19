import React, {useState} from 'react'

const State = () => {
   const [text, setText] = useState('no click');
  return (
     <div className='container'>
        <button onClick={ ()=> setText('click')}>click me</button>
        <p>{ text }</p>
     </div>
  )
}

export default State