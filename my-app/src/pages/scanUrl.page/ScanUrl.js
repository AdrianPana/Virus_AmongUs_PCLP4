import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from '../../components/navbar.componenets';
import { URLUpload } from '../../components/urlupload.component';

function URLPage() {

  return (  
    <div>
      <Navbar></Navbar>
      <header className="Bg-pattern">
        <URLUpload/>
      </header>
    </div>
  );
}


export default URLPage
