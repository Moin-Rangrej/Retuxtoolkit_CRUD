import { Routes, Route } from 'react-router-dom';
import './App.css';
import Axiosex from './AxioVSFetch/Axiosex';
import FetchEx from './AxioVSFetch/FetchEx';
import Createpost from './components/Createpost';
import Error from './components/Error';
import Header from './components/Header';
import Post from './components/Post';


function App() {
  return (
    <>
    <div className='container'>

    <Header/>
      <Routes>
          <Route path='/' element={<Post />} />
          <Route path='/createpost' element={<Createpost />} />
          <Route path='/*' element={<Error />}/>
      </Routes>
      {/* <Axiosex />
      <FetchEx /> */}
      </div>
    </>
  );
}

export default App;
