import { useState } from 'react'

const State = () => {
   const [name, setName] = useState('mario')
   const [age, setAge] = useState(25)

    return ( 
        <div className="state">
        <h4>{name} is {age}</h4>
            <button onClick={()=>{
                setName('Luigi')
                setAge(30)
            }}>Change the name</button>
        </div>
     );
}
 
export default State;