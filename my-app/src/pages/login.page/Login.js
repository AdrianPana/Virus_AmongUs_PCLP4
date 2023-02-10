import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from '../../components/navbar.componenets';
import { LoginForm } from '../../components/login.component';
import '../home.page/App.css'

function LoginPage() {

  return (  
    <div>
      <Navbar></Navbar>
      <header className="Bg-pattern">
          <LoginForm/>
        </header>
    </div>
  );
}


export default LoginPage
