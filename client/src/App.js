
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import FormPlayer from './views/FormPlayer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Main/>}/>
        <Route path ="/new" element={<FormPlayer/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
