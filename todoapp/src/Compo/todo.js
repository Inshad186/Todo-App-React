//! Counter Application

// import React , {useState} from "react"

// const Counter = ()=>{
    
//     const [value,setValue] = useState(0)

//     return(
//         <div>
//             <h2>{value}</h2>
//             <button onClick={()=>setValue(value + 1)}>Increment</button>
//             <button onClick={()=>setValue(value - 1)}>Decrement</button>
//         </div>
//     )
// }
// export default Counter


//! Form Application

// import React, { useState } from "react"

// const MyForm = () =>{
//     const [name,setName] = useState("")

//     const handleForm = (event) => {
//         setName(event.target.value)
//     }
//     const onHandle = (event)=>{
//         event.preventDefault()
//         alert(`Form submitted with name ${name}`)
//     }
//     return(
//         <form onSubmit={onHandle}>
//             <h2>Enter Your Name</h2>
//             <input type="text" value={name} onChange={handleForm} />
//             <button>Submit</button>
//         </form>
//     )
// }
// export default MyForm;