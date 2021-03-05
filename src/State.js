import { useState } from 'react'

const State = () => {
   const [name, setName] = useState('mario')

    return ( 
        <div className="state">
        <h4>{name}</h4>
            <button onClick={()=>{
                setName('Luigi')
            }}>Change the name</button>
        </div>
     );
}
 
export default State;