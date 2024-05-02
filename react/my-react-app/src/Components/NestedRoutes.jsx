import React from "react";
import{useNavigate, useParams} from 'react-router-dom'

const FeaturedProduct =() =>
{
const navigate = useNavigate()
const params = useParams()
return(

    <div>FeaturedProduct
    {console.log(params.productId)}
    <button onClick={()=>navigate('/')}>Back to Home</button>
    </div>
)
}
export default FeaturedProduct;
