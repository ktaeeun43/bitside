import logo from "./logo.svg";
import "./App.css";
import { RecoilRoot } from "recoil";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Router,
  Routes,
} from "react-router-dom";
import Admin from "./router/Admin";
import AssetManagement from "./router/AssetManagement";
import CheckManegent from "./router/CheckManegent";
import DocumentsManegent from "./router/DocumentsManegent";
import PolicyManagement from "./router/PolicyManagement";
import RiskManegent from "./router/RiskManegent";
import SecurityCheck from "./router/SecurityCheck";
import UserUpdate from "./router/UserUpdate";
import Home from "./router/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/page/PolicyManagement"
            element={<PolicyManagement />}
          ></Route>
          <Route
            path="/page/AssetManagement"
            element={<AssetManagement />}
          ></Route>
          <Route path="/page/CheckManegent" element={<CheckManegent />}></Route>
          <Route path="/page/RiskManegent" element={<RiskManegent />}></Route>
          <Route
            path="/page/DocumentsManegent"
            element={<DocumentsManegent />}
          ></Route>
          <Route path="/page/SecurityCheck" element={<SecurityCheck />}></Route>
          <Route path="/page/Admin" element={<Admin />}></Route>
          <Route path="/page/UserUpdate" element={<UserUpdate />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
