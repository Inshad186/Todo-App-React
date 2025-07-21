// //! Created a Todo App using with Class Component

// import React, {Component} from "react";
// import "./todo.css"

// class Todo extends Component {

//     state = {
//         input : '',
//         items : []
//     }

//     onHandle = (event) => {
//         this.setState({
//             input : event.target.value
//         })
//     }

//     storeItem = (event)=>{
//         event.preventDefault()
//         const {input} = this.state
//         this.setState({
//             items : [...this.state.items , input],
//             input : ""
//         })
//     }

//     deleteItem = (key) =>{
//         this.setState({
//             items : this.state.items.filter((value,index) => key !== index)
//         })
//     }

//     render(){
//         const {input , items} = this.state
//         console.log(items)
//         return(
//             <div className="todo-container">

//                 <form className="input-section" onSubmit={this.storeItem}>
//                 <h1>Todo App</h1>
//                 <input type="text" value={input} onChange={this.onHandle} placeholder="Enter Items..." />
//                 </form>

//                 <div>
//                     <ul>
//                         {items.map((value , index )=>(
//                             <li key={index}>{value} <i className="fa-solid fa-trash" onClick={()=>this.deleteItem(index)}></i> </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         )
//     }
// }
// export default Todo

// //! Created a Todo App using with funcion Component

// import React, { useState } from "react";
// import "./todo.css";

// const Todo = () => {
//   const [input, setInput] = useState("");
//   const [items, setItems] = useState([]);

//   const onHandle = (event) => {
//     setInput(event.target.value);
//   };
//   const storeItem = (event) => {
//     event.preventDefault();
//     setItems([...items, input]);
//     setInput(""); 
//   };
//   const deleteItem = (key) => {
//     setItems(items.filter((_, index) => key !== index));
//   };

//   return (
//     <div className="todo-container">
//       <form className="input-section" onSubmit={storeItem}>
//         <h1>Todo App</h1>
//         <input type="text" value={input} onChange={onHandle} placeholder="Enter Items..." />
//       </form>

//       <div>
//         <ul>
//           {items.map((value, index) => (
//             <li key={index}>
//               {value}
//               <i className="fa-solid fa-trash" onClick={() => deleteItem(index)} ></i>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Todo;


// //! Created a Full Todo App using with funcions Or HOOKs

// import React, { useState } from "react"
// import "./todo.css"

// const TodoApp = () => {

//     const [input , setInput] = useState("")
//     const [items , setItems] = useState([])
//     const [isEditing , setIsEditing] = useState(false)
//     const [currentIndex , setCurrentIndex] = useState(null)

//     const onHandle = (event) =>{
//         setInput(event.target.value)
//         console.log(input)
//     }

//     const storeItems = (event) => {
//         event.preventDefault()
//         if(isEditing){
//             const update = items.map((item , index)=>
//                 index === currentIndex ? { ...item, text: input } : item
//             )
//             setItems(update)
//             setInput("")
//             setCurrentIndex(null)
//             setIsEditing(false)
//         }else{
//         setItems([...items, { text: input, completed: false }]);
//         setInput("")
//         }
//     }
//     console.log(items)

//     const deleteItem = (key)=>{
//         setItems(items.filter((value , index) => index !== key))
//     }

//     const editItem = (key) =>{
//         setInput(items[key].text)
//         setIsEditing(true)
//         setCurrentIndex(key)
//     }

//     const completed = (key) => {
//         const updatedItems = items.map((item, index) =>
//           index === key ? { ...item, completed: !item.completed } : item
//         );
//         setItems(updatedItems);
//       };

//     return(
//         <div className="todo-container">

//             <form className="input-section" onSubmit={storeItems}>
//             <h1>TODO APP</h1>
//                 <input type="text" value={input} onChange={onHandle} placeholder="Enter Items..." />
//             </form>
//             <div>
//                 <ul>
//                     {items.map((item , index) => (
//                         <li key={index} className={item.completed ? "completed" : ""}>
//                         <i class="complete-icon fa-regular fa-circle" onClick={() => completed(index)}></i>
//                         <span>{item.text}</span>
//                         <i className="edit-icon fa-solid fa-pen-to-square" onClick={() => editItem(index)}></i>
//                         <i className="delete-icon fa-solid fa-trash" onClick={() => deleteItem(index)}></i>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default TodoApp;
