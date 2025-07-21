import React, { useState , useEffect } from "react"
import "./TodoApp.css"

const TodoApp = () => {

    const [input , setInput] = useState("")
    const [items , setItems] = useState([])
    const [isEditing , setIsEditing] = useState(false)
    const [currentIndex , setCurrentIndex] = useState(null)

    useEffect(() => {
        const storedItems = localStorage.getItem("todoItems");
        if (storedItems) {
          setItems(JSON.parse(storedItems));
        }
      }, []);

      useEffect(() => {
        if (items.length > 0) {
        localStorage.setItem("todoItems", JSON.stringify(items));
        }
      }, [items]);

    const onHandle = (event) =>{
        setInput(event.target.value)
        console.log(input)
    }

    const storeItems = (event) => {
        event.preventDefault()
        if(isEditing){
            const update = items.map((item , index)=>
                index === currentIndex ? { ...item, text: input } : item
            )
            setItems(update)
            setInput("")
            setCurrentIndex(null)
            setIsEditing(false)
        }else{
        setItems([...items, { text: input, completed: false }]);
        setInput("")
        }
    }
    console.log(items)

    const deleteItem = (key)=>{
        setItems(items.filter((value , index) => index !== key))
    }

    const editItem = (key) =>{
        setInput(items[key].text)
        setIsEditing(true)
        setCurrentIndex(key)
    }

    const completed = (key) => {
        const updatedItems = items.map((item, index) =>
          index === key ? { ...item, completed: !item.completed } : item
        );
        setItems(updatedItems);
      };

    return(
        <div className="todo-container">

            <form className="input-section" onSubmit={storeItems}>
            <h1>TODO APP</h1>
                <input type="text" value={input} onChange={onHandle} placeholder="Enter Items..." />
            </form>
            <div>
                <ul>
                    {items.map((item , index) => (
                        <li key={index} className={item.completed ? "completed" : ""}>
                        <i class="complete-icon fa-regular fa-circle" onClick={() => completed(index)}></i>
                        <span>{item.text}</span>
                        <i className="edit-icon fa-solid fa-pen-to-square" onClick={() => editItem(index)}></i>
                        <i className="delete-icon fa-solid fa-trash" onClick={() => deleteItem(index)}></i>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoApp;