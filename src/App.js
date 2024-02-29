import SignIn from "./components/LoginForm";
// import Navbar from "./components/Navbar";
import SignUp from "./components/RegistrationForm";
// import AppAppBar from "./components/AppBar";
// import HomePage from "./components/HomePage";
// import ChangePassword from "./components/ChangePasswordForm";
import ForgetPassword from "./components/ForgetPasswordForm";
import { Routes, Route} from "react-router-dom";
import ClippedDrawer from "./components/Drower";
// import AddressForm from "./components/AddressForm";

function App() {
  return (
    <>
      {/* <AppAppBar /> */}
      {/* <Navbar /> */}
      {/* <ForgetPassword /> */}  
      {/* <AddressForm /> */}
      <ClippedDrawer />
      <Routes>
        <Route path="/register" element={<SignUp />}/>
        <Route path="/login" element={<SignIn />}/>
        <Route path="/forget_password" element={<ForgetPassword />}/>
      </Routes>
    </>
  );
}

export default App;
