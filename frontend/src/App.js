import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AddBook from './components/Books/AddBook';
import BookList from './components/Books/BookList';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    // <div className="App">
    //   <h1>Book App</h1>
    //   <AddBook />
    // </div>
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/books" component={BookList} />
          <Route exact path="/books/create" component={AddBook} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

{/* <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </> */}