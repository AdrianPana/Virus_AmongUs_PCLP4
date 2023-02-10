import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from '../../components/navbar.componenets';
import { FileUpload } from '../../components/fileupload.component';

function FilePage() {

  return (  
    <div>
      <Navbar></Navbar>
        <header className="Bg-pattern">
          <FileUpload/>
        </header>
    </div>
  );
}


export default FilePage
