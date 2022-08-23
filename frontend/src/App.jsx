import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Home from "./pages/Home/Home";
import "./App.scss";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" component={<Home />}>
          {/* <Route path="*" component={<Home />} /> */}
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
