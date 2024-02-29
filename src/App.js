import SignIn from "./components/LoginForm";
// import Navbar from "./components/Navbar";
// import SignUp from "./components/RegistrationForm";
import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/register" element={<SignUp />}/> */}
        <Route path="/login" element={<SignIn />}/>
      </Routes>
    </>
  );
}

export default App;
