import React, { useState } from 'react'

const Pallete = props => {

    const [data, setData] = useState(props.value)

    function handleTyping(e) {
        setData({
        ...data,
        [e.name]: e.value
    })}
    

    return (
        <div>
            <textarea value={JSON.stringify(data)} onChange={e => handleTyping(e)}></textarea>
            <div>
                {console.log(data)}
               {Object.values(data).map((color, index) => {
                   return(
                        <div key={index}
                            style={{
                                height: '100px',
                                width: '100px',
                                background: color
                            }}
                        >
                            {color}
                        </div>
                   )
               })} 
            </div>
        </div>
    )
}

export default Pallete;