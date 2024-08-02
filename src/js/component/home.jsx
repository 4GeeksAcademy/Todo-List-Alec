import React, { useState } from "react";


const Home = () => {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState("");

	return (
		<div className="container container-body border justify-content-center mt-5">
			<div className="row justify-content-center my-3">
				<div className="col-12 col-md-8">
					<h1 className="text-center">My To-do's</h1>
				</div>
			</div>
			<div className="row justify-content-center mb-3">
				<div className="col-12 col-md-8">
					<input
						className="form-control"
						type="text"
						value={inputValue}
						onChange={(event) => setInputValue(event.target.value)}
						onKeyDown={(event) => {
							if (event.key === 'Enter') {
								setTodos([...todos, inputValue]);
								setInputValue("");
							}
						}}
						placeholder="Next Task"
						aria-label="Next Task"
					/>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-12 col-md-8">
					<div className="overflow-auto" style={{ maxHeight: '300px' }}>
						<ul className="list-group">
							{todos.length === 0 ? (
								<li className="list-group-item text-center">No hay tareas pendientes</li>
							) : (
								todos.map((task, index) => (
									<li key={index} className="task-list list-group-item d-flex justify-content-between align-items-center">
										{task}
										<i
											className="fas fa-trash-alt icon"
											onClick={() => setTodos(todos.filter((_, currentIndex) => index !== currentIndex))}
											role="button"
											aria-label="Delete task"
										></i>
									</li>
								))
							)}
						</ul>
					</div>
					<div className="list-counter mt-3 text-center fs-5">
						{`${todos.length} Tasks on your list.`}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;


