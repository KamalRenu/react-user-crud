import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserList from './UserList';
import CreateUser from './CreateUser';
import EditUser from './EditUser';

function App() {
  return (
    <>
      <BrowserRouter>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar />
              <div className="container-fluid">
                <Routes>
                  <Route path="/" element={<Dashboard />}></Route>
                  <Route path="/users" element={<UserList />}></Route>
                  <Route path="/createuser" element={<CreateUser />}></Route>
                  <Route path="/edituser/:id" element={<EditUser />}></Route>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
