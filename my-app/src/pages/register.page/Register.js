import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from '../../components/navbar.componenets';
import { RegisterForm } from '../../components/register.component';
import '../home.page/App.css'

function RegisterPage() {

  return (  
    <div>
      <Navbar></Navbar>
        <header className="Bg-pattern">
          <RegisterForm/>
        </header>
    </div>
  );
}


export default RegisterPage
