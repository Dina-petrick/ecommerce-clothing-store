import Home from "./route/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./route/navigation/navigation.component";
import Authentication from "./route/authentication/authentication.component";
import Shop from "./route/shop/shop.component";
import CheckOut from "./route/checkout/checkout.component";
import PaymentPage from "./route/payment/payment.component";
import RequireAuth from "./components/require-auth/require-auth.component";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop/*" element={<Shop />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route
            path="/payment"
            element={
              <RequireAuth>
                <PaymentPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
