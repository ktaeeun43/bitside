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
import Admin from "./pages/Admin/Admin";
import AssetManagement from "./pages/assetManagement/AssetManagement";
import CheckManegent from "./pages/checkManagement/CheckManegent"; 
import DocumentsManagement from "./pages/documentManagement/DocumentsManegent"; 
import PolicyManagement from "./pages/policyManagementpage/PolicyManagement";
import RiskManagement from "./pages/riskManagement/RiskManagement"; 
import SecurityCheck from "./pages/securityCheck/SecurityCheck"; 
import UserUpdate from "./pages/UserUpdate";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import CheckDetail from "./pages/checkManagement/CheckDetail"; 
import CheckOperate from "./pages/checkManagement/CheckOperate";
import Requirements from "./pages/checkManagement/Requirements"; 
import PersonalInformation from "./pages/checkManagement/PersonalInformation"; 
import TechCheck from "./pages/checkManagement/TeckCheck"; 
import AssetList from "./pages/assetManagement/AssetList"; 
import AssetNetWork from "./pages/assetManagement/Network";
import Protect from "./pages/policyManagementpage/Protect"; 
import Analysis from "./pages/riskManagement/Analysis"; 
import Results from "./pages/riskManagement/Results"; 
import ManagemenetCheck from "./pages/riskManagement/ManagemenetCheck"; 
import SecurityPlan from "./pages/riskManagement/SecurityPlan"; 
import DocumentTraces from "./pages/documentManagement/DocumentTraces";
import Receipt from "./pages/documentManagement/Receipt"; 
import Menu1 from "./pages/securityCheck/Menu1";
import Menu2 from "./pages/securityCheck/Menu2";
import Menu3 from "./pages/securityCheck/Menu3";
import AdminManagement from "./pages/Admin/AdminManagement";
import AdminRegister from "./pages/Admin/AdminRegister";

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
          <Route path="/page/DocumentsManagement" element={<DocumentsManagement />}  >
          <Route path="list" element={<DocumentTraces />} />
          <Route path="receipt" element={<Receipt/>}/>  
          </Route>
          <Route path="/page/SecurityCheck" element={<SecurityCheck />}>
            <Route path="menu1" element={<Menu1 />} />
            <Route path="menu2" element={<Menu2/>}/>
            <Route path="menu3" element={<Menu3/>}/>
          </Route>
          <Route path="/page/Admin" element={<Admin />}>
          <Route path="register" element={<AdminRegister/>} />
            <Route path="userManagement" element={<AdminManagement/>} />
          </Route>
          <Route path="/page/UserUpdate" element={<UserUpdate />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
