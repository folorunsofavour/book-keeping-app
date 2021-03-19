import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AddBook from './components/Books/AddBook';
import BookList from './components/Books/BookList';
import Navbar from './components/Navbar/Navbar';
import RegisterUser from './components/Users/RegisterUser';
import LoginUser from './components/Users/LoginUser';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import UpdateProfile from './components/Profile/UpdateProfile';

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
          <Route exact path="/" component={Home}/>
          <Route exact path="/books" component={BookList} />
          <Route exact path="/books/create" component={AddBook} />
          <Route exact path="/users/register" component={RegisterUser} />
          <Route exact path="/users/login" component={LoginUser} />
          <Route exact path='/users/profile' component={Profile} />
          <Route exact path='/users/update' component={UpdateProfile} />
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