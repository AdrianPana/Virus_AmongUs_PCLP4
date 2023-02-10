import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Navbar } from '../../components/navbar.componenets';
import { DownloadModal } from '../../components/downloadmodal.component';
import { Description } from '../../components/description.component';
import { Reviews } from '../../components/reviews.component';

function App() {

  return (  
    <div className="Bg-pattern-home">
      <Navbar></Navbar>
      <Description/>
      <Reviews/>
      <DownloadModal/>
    </div>
  );
}


export default App;
