import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todos, setTodos] = useState(["homework", "clean", "laundry"])
	const [tasks, setTasks] = useState("")
	
	let allTodos = todos.map((todo, index)=>{
		return(
			<li key={index}>{todo}
				<div style={{float:"right"}}
				onClick={()=>removeTodo(index)}
				>X</div>
			</li>
		)
	})

const newTodo = (onKeyDownEvent) => {
	if (onKeyDownEvent.key === "Enter") {
		const newTask = [...todos,tasks]
		setTodos(newTask)
		setTasks("")
	}
}

const removeTodo=(index) => {
	const newArray=todos.filter((todo,i) => i !== index)
	setTodos(newArray)
}
	return (
		<div className="text-center">
			<h1>todos</h1>
			<div>
				<input 
				type="text" 
				placeholder="Add Your Task Here"
				value={tasks}
				onChange={(e)=>setTasks(e.target.value)}
				onKeyDown={newTodo}
				/>	
			</div>
			<ul>{allTodos}</ul>
			<h6>{allTodos.length} left todo</h6>
		</div>
	);
};

export default Home;
