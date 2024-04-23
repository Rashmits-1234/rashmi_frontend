import React, { useEffect,useState } from 'react'

const FetchComp = () => {
    const [data, setData] =useState();
    useEffect (() => {
        apiFetch();
    }[])
    async function apiFetch(){
        const res = await axios.get("")
        const.log(res.data);
        setData(res.data.data)
    }
  return (
    
  )
}

export default FetchComp