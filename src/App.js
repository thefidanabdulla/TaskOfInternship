import { Routes, Route } from 'react-router-dom'
import Comments from './components/Comments';
import Navigation from './components/Navigation';
import Posts from './components/Posts';
import Users from './components/Users';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <div className={``}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Posts />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/comments' element={<Comments />}/>
      </Routes>
    </div>
  );
}

export default App;
