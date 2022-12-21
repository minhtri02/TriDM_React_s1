import './App.css';
import Student_list from "./student/student_list";
import React from "react";
import Header from "./layout/header.js"

function App() {
  return (
    <div className="App">
        <Header/>
        <br/>
        <h1 color="red">Danh sách học viên</h1>
        <br/>
        <Student_list/>
    </div>
  );
}

export default App;
