// import Main from "./containers/Main";
import Navbar from "./containers/Navbar";
import Overview from "./containers/Overview";
import Sidebar from "./containers/Sidebar";
import "./pages/app.scss"



function App() {
  return (
    <div className="App">
      
      <Sidebar className="sidebar"/>
     <div className="content">
       <Navbar className="navbar"/>
      {/* <Main/> */}
      {<Overview/>}

     </div>
    </div>
  );
}

export default App;
