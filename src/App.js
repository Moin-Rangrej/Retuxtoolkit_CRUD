import { Routes, Route } from 'react-router-dom';
import './App.css';
import Createpost from './components/Createpost';
import Post from './components/Post';


function App() {
  return (
    <>
    <div className='container'>
      <Routes>
          <Route path='/' element={<Post />} />
          <Route path='/createpost' element={<Createpost />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
