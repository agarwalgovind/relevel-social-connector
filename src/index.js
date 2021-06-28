import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Suspense
              fallback={
                  <div align="center" className="mt-4">
                      <div className="spinner-border text-success" role="status">
                          <span className="sr-only">Loading...</span>
                      </div>
                  </div>
              }
          >
          <App />
          </Suspense>
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
