import Home from "./route/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./route/navigation/navigation.component";
import Authentication from "./route/authentication/authentication.component";
import Shop from "./route/shop/shop.component";
import CheckOut from "./route/checkout/checkout.component";




const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/auth" element={<Authentication/>}></Route>
          <Route path="/checkout" element = { <CheckOut/> }></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
