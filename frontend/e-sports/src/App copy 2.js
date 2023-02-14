import logo from './logo.svg';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import './App copy.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { createBrowserHistory } from "history";

import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import { Link, Route, Routes } from 'react-router-dom'






function App() {




    /*  
    return (
      <div>
     
        <Link to="/about">
          <button>Click</button>
        </Link>
  
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    );
     
    */




  const Todos = ({ todos }) => {

    return (
      <div className="todos">
        {todos.map((jogador) => {
  
          return (
            <div className="todo">

              <p> Nome: {jogador.nome}</p>

              <p>Idade: {jogador.idade}</p>
  
              <button onClick={() => handleWithEditButtonClick(jogador)}>
                  <AiOutlineEdit size={30} color={"#063970"}></AiOutlineEdit>
                </button>
                <button onClick={() => deleteTodo(jogador)}>
                  <AiOutlineDelete size={30} color={"#6d0a16"}></AiOutlineDelete>
                </button>
            </div>


              
  
          );

    
        })}
    
      </div>
    );


  };



  async function editTodo() {
    const response = await axios.put("http://localhost:3333/jogador", {
      id: selectedTodo.id,
      nome: inputValue,
    });
    setSelectedTodo();
    setInputVisility(false);
    getTodos();
    setInputValue("");
  }
  async function handleWithEditButtonClick(jogador) {
    setSelectedTodo(jogador);
    setInputVisility(true);
  }



  async function deleteTodo(jogador) {
    const response = await axios.delete(
      `http://localhost:3333/jogador/${jogador.id}`
    );
    getTodos();
  }
  

  async function createTodo() {
    const response = await axios.post("http://localhost:3333/jogador", {
      nome: inputValue,
    });
    getTodos();
    setInputVisility(!inputVisbility);
    setInputValue("");
  }

   /*
  async function createTodo() {
    const response = await axios.post("http://localhost:3333/jogador", {
      nome: inputValue,
   
    });
    getTodos();
    setInputVisility(!inputVisbility);
    setInputValue("");
  }
  /*
  async function createTodo() {
    const response = await axios.post("http://localhost:3333/todos", {
      name: inputValue,
    });
    getTodos();
    setInputVisility(!inputVisbility);
    setInputValue("");
  }
  */

  async function handleWithNewButton() {
    
    console.log("fasfas");
    setInputVisility(!inputVisbility);
  }


  async function getTodos() {
    const response = await axios.get("http://localhost:3333/jogador");
    setTodos(response.data);
    console.log(response.data);
  }

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputVisbility, setInputVisility] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();


  useEffect(() => {
    getTodos();
  }, []);



  return (
    <div className="App">
      <header className="container">
      <div className="header">
          <h1>Jogadores</h1>
        </div>

        <Todos todos={todos}></Todos>
        <input 
              value={inputValue}
              style={{ display: inputVisbility ? "block" : "none" }}
             onChange={(event) => {
                setInputValue(event.target.value);
             }}
        
        className='inputName'></input>
        <button  onClick={
            inputVisbility
              ? selectedTodo
                ? editTodo
                : createTodo
              : handleWithNewButton
          }
          className='newTaskButton'>   {inputVisbility ? "Confirm" : "+ New Jogador"}</button>
          
      


      </header>
    </div>


  );

 

  

  
}

export default App;
