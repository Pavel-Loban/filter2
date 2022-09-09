import React, { useState, useEffect } from "react";
import axios from 'axios'
// import { Got } from "got";
import  superagent  from "superagent";
import './App.scss';

import InputSearch from "./Components/InputSearch/InputSearch";
import Lists from "./Components/Lists/Lists";


function App() {

  const baseURL = 'https://jsonplaceholder.typicode.com/albums'

  const [list, setList] = useState(null);
  const [error, setError] = useState(null);




  // =========== Fetch
  // useEffect(() => {
  //   fetch(baseURL)
  //     .then((res) => res.json())
  //     .then((data) => setList(data))

  // }, [])



// =============== Axios

// useEffect(() => {
//  axios
//  .get(baseURL)
//  .then((response) => {
//   setList(response.data)
//  }).catch((error) => {
//   setError(error)
// })
// }, [])

// ===============superAgent

useEffect(() => {
 superagent
 .get(baseURL)
 .end(( error,response) => { //как правильно обработать ошибки?
  // console.log(response)
  setList(response.body)
  setError(response.error)
 })

}, [])


if (error) return (`Error: ${error.message}`);




  return (!!list &&(

      <div className="App">
        <InputSearch  listItems={list} setList={setList}/>

        <ul></ul>
        <Lists listItems={list}/>

    </div>

  ));

}

export default App;
