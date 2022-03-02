import './assets/css/style.css'
import ListaUsuarios from './components/ListaUsuarios';
import UserState from './context/UserState';
import FormUsuario from './components/FormUsuario';

function App() {
  return (
    <>
      <UserState>
        <FormUsuario />
        <ListaUsuarios />
      </UserState>
    </>
  );
}

export default App;
