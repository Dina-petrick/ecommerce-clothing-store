import Home from "./route/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./route/navigation/navigation.component";
import SignIn from "./route/sign-in/sign-in.component";




const Shop = () => {
  return (
    <h1>I am a shopping page</h1>
  )
}

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/sign-in" element={<SignIn/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
