import SignIn from "./components/LoginForm";
// import Navbar from "./components/Navbar";
import SignUp from "./components/RegistrationForm";
import HomePage from "./components/HomePage";
import ChangePassword from "./components/ChangePasswordForm";
import ForgetPassword from "./components/ForgetPasswordForm";
// import { Routes, Route} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <HomePage />
      <SignIn />
      <SignUp />
      <ChangePassword /> 
      <ForgetPassword />
      {/* <Routes>
        <Route path="/register" element={<SignUp />}/>
        <Route path="/login" element={<SignIn />}/>
      </Routes> */}
    </>
  );
}

export default App;
