import logo from './logo.svg';
import CovidHeader from './components/CovidHeader';
import {NetflixSeries} from './components/NetflixSeries'
import {CurrentDate} from './components/CurrentDate'
import { Greetings} from './components/Greteeings'
//import ImportExport from './components/ImportExport'
import Calculator from './components/Calculator';
import { ButtonClick } from "./components/ButtonClick";
import Timer from './components/Timer';
import ChangeBackGround from "./components/ChangeBackGround";
import LoginForm  from './components/LoginForm';
import TodoList from './components/TodoList';

function App() {
  //console.log(ImportExport);
  return (
    <div className="app">
      {/* <CovidHeader/>
          <NetflixSeries/>
          <CurrentDate/>
          <Greetings/>
          <ImportExport/>
          <Calculator/>
          <ButtonClick/>
               <ChangeBackGround/>
 <LoginForm/>
       */}
       <Timer/>
       <TodoList/>

    </div>
  );
}

export default App;
