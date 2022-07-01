import React from "react";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// .render(
//   <React.StrictMode>
//     <UserContextProvider>
//       <Router>
//         <App />
//       </Router>
//     </UserContextProvider>
//   </React.StrictMode>
// );





