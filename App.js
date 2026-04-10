import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Student from "./components/Student";
import Counter from "./components/Counter";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "Dhairya",
      course: "Computer Science",
    };
  }

  componentDidMount() {
    console.log("App Mounted");
  }

  componentDidUpdate() {
    console.log("App Updated");
  }

  componentWillUnmount() {
    console.log("App Will Unmount");
  }

  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/student"
            element={
              <Student
                name={this.state.studentName}
                course={this.state.course}
              />
            }
          />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </>
    );
  }
}

export default App;
