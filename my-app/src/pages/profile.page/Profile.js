import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from '../../components/navbar.componenets';
import { LoginForm } from '../../components/login.component';
import '../home.page/App.css'
import { renderURLs } from '../../services/profile.service';
import { UrlsDisplay } from '../../components/urlsdisplay.component';
import { FilesDisplay } from '../../components/filesdisplay.component';

function ProfilePage() {

  return (  
    <div>
      <Navbar></Navbar>
      <header className='Bg-pattern'>
        <UrlsDisplay/>
        <FilesDisplay/>
      </header>
    </div>
  );
}

export default ProfilePage
