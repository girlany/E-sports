//import logo from './logo.svg';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
//import './App copy.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { createBrowserHistory } from "history";

import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import { Link, Route, Routes } from 'react-router-dom'



function About() {


  const Todos = ({ todos }) => {

    return (
      <div className="todos">
        {todos.map((jogador) => {

          

          // if(pedido.alimento == 'Coxinha'){
           //return pedido.alimento = 'Não temos no momento';
           //}

          //if(jogador.time_id >'5'){
            //setCount(count + 1);

            //console.log(todos);

           //return  setCount(count + 1);
           
           //return jogador.time_id = 'Não temos no momento';


          //}

          return (

            
            <div className="todo">

      
              
          
              
              <p> Nome:  {jogador.nome}</p>

              <p> Idade: {jogador.idade}</p>
              <p> id_time:  {jogador.id_time}</p>
              
            
            
              <button  onClick={() => handleWithEditButtonClick(jogador)}>
                  <AiOutlineEdit size={30} color={"#063970"}></AiOutlineEdit>
                </button>
                <button  onClick={() => deleteTodo(jogador)}>
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
      idade: inputValue2,
      time_id: inputValue3,
      
     
      

    });
    setSelectedTodo();
    setInputVisility(false);
    getTodos();
    setInputValue("");
  }
  async function handleWithEditButtonClick(jogador) {
    setSelectedTodo(jogador);
    getTodos();
    setInputValue(jogador.nome);
    setInputValue2(jogador.idade);
    setInputValue3(jogador.time_id);
    
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
      idade: inputValue2,
      time_id: inputValue3,
      
    });
    getTodos();
    setInputVisility(!inputVisbility);
    setInputValue("");

  }



  async function handleWithNewButton() {
    
    console.log("fasfas");
    setInputVisility(!inputVisbility);
  }


  async function getTodos() {
    const response = await axios.get("http://localhost:3333/jogador");
    setTodos(response.data);
    console.log(response.data);

   
  }


   
  async function getTodos2(todo) {
    const response = await axios.get("http://localhost:3333/todos");
    setTodos(response.data);
    console.log(response.data);
  }



  const [todos, setTodos] = useState([]);
  

  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputVisbility, setInputVisility] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();


  const [count, setCount] = useState(0);

  // Similar ao componentDidMount e componentDidUpdate:
  //useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    //document.title = `Você clicou ${count} vezes`; nome para pag 
  //});


  useEffect(() => {
     // Atualiza o título do documento usando a API do browser
   // document.title = `Você clicou ${count} vezes`;
    getTodos();
  
    //getTodoss();
    
  }, []);


  //const Todos2 = ({ todoss2 }) => {
  //}
 ///       


// const Todoss = ({ todos }) => {

  //return (
    ///<div className="todos">
      //{todos.map((jogador) => {


//<select>
 /// <option value="grapefruit">{jogador.time_id}</option>
  ///<option value="lime">Lime</option>
  //<option selected value="coconut">Coconut</option>
  //<option value="mango">Mango</option>
//</select>

  
  //    })}
  
    //</div>
  //);


//};


//import React, { useState, useEffect } from 'react';

//function Exemplo() {
  //const [count, setCount] = useState(0);

  // Similar ao componentDidMount e componentDidUpdate:
  //useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    //document.title = `Você clicou ${count} vezes`;
  //});

  //return (
    //<div>
      //<p>Você clicou {count} vezes</p>
      //<button onClick={() => setCount(count + 1)}>
        //Clique aqui
      //</button>
    //</div>
  //);
//}


    ///<select>
    //{todos.map((jogador) => (


   ///<option value={jogador.id}>{jogador.time_id}</option>

   //))}
    ///</select>

     ////<select>
    ////{todos.map((todo) => (
 
     //<option value={todo.id}>{todo.name}</option>
    ///))}
  ///</select>





  return (

    <div className="App">


      <header className="container">
      <div className="header">
          <h1>Jogadores</h1>
        </div>

        <Todos todos={todos}></Todos>




        <p
        
        style={{ display: inputVisbility ? "block" : "none" }}
        onChange={(event) => {
           setInputValue(event.target.value);
        }}
   
        
        
        >Nome</p>


        <input
                 value={inputValue}
               style={{ display: inputVisbility ? "block" : "none" }}
             onChange={  (event) => {
                

                setInputValue(event.target.value);
             }
            
            
            } 
        
             
             className='inputName'></input>


<p
        
        style={{ display: inputVisbility ? "block" : "none" }}
        onChange={(event) => {
           setInputValue(event.target.value);
           
        }}
   
        
        
        >
          Idade
        </p>


          <input 
              value={inputValue2}
              style={{ display: inputVisbility ? "block" : "none" }}
             onChange={(event) => {
                setInputValue2(event.target.value);
             }}
        
             className='inputName'></input>


<p
        
        style={{ display: inputVisbility ? "block" : "none" }}
        onChange={(event) => {
           setInputValue(event.target.value);
        }}
   
        
        
        >Time</p>

            <input 
            
              value={inputValue3}
              style={{ display: inputVisbility ? "block" : "none" }}
             onChange={(event) => {

              //if(event.target.value <= 5){

                setInputValue3(event.target.value);

              //}
              
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

export default About;
