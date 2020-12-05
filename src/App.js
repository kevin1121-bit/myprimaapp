import Header from "./components/header";
import Search from "./components/search";
import './styles/App.css';
import { Component } from "react";
import Barber from "./user/barber";



class App extends Component {
 
  render(){
   return (
    <div className="App">
      
          <Header />
          <Search />
          <Barber />
      </div>
    );
  }
}

export default App;
