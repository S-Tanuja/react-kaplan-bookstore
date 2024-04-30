import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BooksList from './components/books-list';

function Root() {
  return (
    <Router>
      <div className="Root">
        {/* <Switch> */}
       <Routes>
       <Route path="/" exact component={BooksList} />
         <Route path="/books" exact component={BooksList} />
       </Routes>
          {/* <Route path="/books/:id" component={BookDetails} /> */}
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default Root;
