import './App.css';
import Login from './components/login';
import AddStudent from './components/reader';
import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Studentlist from './components/rev';

function App() {
  const LOCAL_STORAGE_KEY = "students";
  const [students, setStudents] = useState([]);
  const addStudentHandler = (student)=>{
    console.log(student);
    setStudents([...students,student]);
  }
  useEffect(() => {
    const retriveStudents = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveStudents) setStudents(retriveStudents);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(students));
  }, [students]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' render={()=> <Login/>}>
          </Route>
          <Route exact path='/reader' render={()=> <AddStudent addStudentHandler={addStudentHandler}/>}></Route>
          <Route  path='/rev' render={()=><Studentlist students={students}/>}></Route>
        </Switch>
      </Router>
      {/* <Studentlist students={students}></Studentlist> */}
    </div>
  );
}

export default App;
