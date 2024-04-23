import React, {useState} from 'react'
import Child from './Child'
export const DataContext = React.createContext();
const Parent = () => {
    const [data, setData] = useState(0)
    return (
        <DataContext.Provider value = {[data,setData]}>
        <Child/>
        </DataContext.Provider>
    )
}
export default Parent