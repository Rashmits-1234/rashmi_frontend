import React from'react'
import Heading from './Heading';
import Table from './Table';


const DynamicContent = ({isLoggedIn}) => {
    const Component= isLoggedIn ? Heading :Table;
return <Component/>; //rendered as a component
    
}
export default DynamicContent