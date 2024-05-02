import React from 'react'
const ToggleContent = () =>{

    const[toggle,setState] = useState(false)
    const toggleHandler = () => {

    }
    return (
        <div>
            <button onClick={toggleHandler}>
                {toggle ? ('Hide Content') : ('showContent')}

            </button>
            {toggle && <p>Dynamic Rendering</p>}
        </div>
    )
}
export default ToggleContent