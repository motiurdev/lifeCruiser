import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import AboutHome from './Pages/About/AboutHome/AboutHome';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ContactHome from './Pages/Contact/ContactHome';
import ExperiencesHome from './Pages/Experiences/ExperiencesHome';
import BlogDetailsHome from './Pages/Home/BlogDetails/BlogDetailsHome';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="about" element={<PrivateRoute><AboutHome /></PrivateRoute>}></Route>
          <Route path="experience" element={<PrivateRoute><ExperiencesHome /></PrivateRoute>}></Route>
          <Route path="blogDetail/:blogDetail" element={<BlogDetailsHome />}></Route>
          <Route path="contact" element={<ContactHome />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
