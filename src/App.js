import { Routes, Route } from 'react-router-dom'
import Comments from './components/Comments';
import Posts from './components/Posts';
import Users from './components/Users';

function App() {
  return (
    <div className="app__app">
      <Routes>
        <Route path='/users' element={<Users />}/>
        <Route path='/posts' element={<Posts />}/>
        <Route path='/comments' element={<Comments />}/>
      </Routes>
    </div>
  );
}

export default App;
