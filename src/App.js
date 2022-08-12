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
import RiskManagement from "./router/RiskManagement";
import SecurityCheck from "./router/SecurityCheck";
import UserUpdate from "./router/UserUpdate";
import Home from "./router/Home";
import Nav from "./components/Nav";
import CheckDetail from "./router/CheckDetail";
import CheckOperate from "./router/CheckOperate";
import Requirements from "./router/Requirements";
import PersonalInformation from "./router/PersonalInformation";
import TechCheck from "./router/TeckCheck";
import AssetList from "./router/AssetList";
import AssetNetWork from "./router/Network";
import Protect from "./router/Protect";
import Analysis from "./router/Analysis";
import Results from "./router/Results";
import ManagemenetCheck from "./router/ManagemenetCheck";
import SecurityPlan from "./router/SecurityPlan";
import DocumentTraces from "./router/DocumentTraces";
import Receipt from "./router/Receipt";
import Menu1 from "./router/Menu1";
import Menu2 from "./router/Menu2";
import Menu3 from "./router/Menu3";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/page/PolicyManagement" element={<PolicyManagement />}>
              <Route path="protect" element={<Protect/>} />
            </Route>
          <Route path="/page/AssetManagement" element={<AssetManagement />}>
            <Route path="list" element={<AssetList />} />
            <Route path="network" element={<AssetNetWork/>}/>
          </Route>
          <Route path="/page/CheckManegent" element={<CheckManegent />}>
            <Route path="detail" element={<CheckDetail />} />
            <Route path="operate" element={<CheckOperate/>}/>
            <Route path="requirements" element={<Requirements/>}/>
            <Route path="personal" element={<PersonalInformation/>}/>
            <Route path="techcheck" element={<TechCheck/>}/>
          </Route>
          <Route path="/page/RiskManagement" element={<RiskManagement />}>
            <Route path="analysis" element={<Analysis />} />
            <Route path="results" element={<Results/>}/>
            <Route path="managementcheck" element={<ManagemenetCheck/>}/>
            <Route path="securityplan" element={<SecurityPlan/>}/>
          </Route>
          <Route
            path="/page/DocumentsManegent"
            element={<DocumentsManegent />}
          >
          <Route path="list" element={<DocumentTraces />} />
          <Route path="receipt" element={<Receipt/>}/>  
          </Route>
          <Route path="/page/SecurityCheck" element={<SecurityCheck />}>
            <Route path="menu1" element={<Menu1 />} />
            <Route path="menu2" element={<Menu2/>}/>
            <Route path="menu3" element={<Menu3/>}/>
          </Route>
          <Route path="/page/Admin" element={<Admin />}></Route>
          <Route path="/page/UserUpdate" element={<UserUpdate />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
