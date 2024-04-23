import React, {useContext} from 'react'
import {DataContext} from './Parent'


const GrandChild = () => {
    const [data, setData] = useContext(DataContext);
  return (
    <div>
        <button onClick={()=>setData(data+1)}Increment></button>
        <h1>{data}</h1>
    </div>
  )
}

export default GrandChild