import "./css/main.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";
import { motion } from "framer-motion";
import { useState,useEffect } from "react";
// import SignUp from "./components/Login/signup";
// import Login from "./components/Login/login";
function App() {
  // const [login, setLogIn] = useState()


  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4300/todos")
      .then((r) => r.json())
      .then((todo) => setTodo(todo));
  }, []);



  return (
    <div className="App">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        ORODHESHA APP
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
      </motion.div>
        <Todos />
        <DisplayTodos todos={todo}/>

      {/* <SignUp /> */}

      {/* <Login setLogIn = { setLogIn } /> */}
    </div>
  );
}

export default App;