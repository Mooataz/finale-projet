
import './App.css';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import List from './components/Models/List';
import Navigation from './components/Navigation';
import Price from './components/Price/Price';
import UpdateList from './components/Update/updateList';
import ChangeList from './components/changeList/ChangeList';
import Prix from './components/Models/Modele'
function App() {

  return (
    <div className="App"> 
<Router>

<Navigation />


  <Routes>
      <Route path='/' element={<List />} />
      <Route path='/Price/:id' element={<Price />} />
      <Route path='/Add' element={<UpdateList />} />
      <Route path='/Modif' element={<ChangeList />} />
  </Routes>
</Router>



    </div>
  );
}

export default App;
