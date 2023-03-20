import '../styles/Header.scss'
import todoLogo from '../assets/todo-logo.svg'

export function Header() {
  return(
    <>
      <header>
       <img src= {todoLogo} alt="Logo ToDo" />
      </header>
    </>
  );
}