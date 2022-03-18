import "./App.css";

import Header from "./components/Header";

import styles from "./styles/App.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowDelete from "./components/ShowDelete";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Router>
        <div className={styles.App}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/showdelete" element={<ShowDelete />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
