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
import Admin from "./router/admin/Admin";
import AssetManagement from "./router/assetManagement/AssetManagement";
import CheckManegent from "./router/checkManagement/CheckManegent"; 
import DocumentsManagement from "./router/documentManagement/DocumentsManegent"; 
import PolicyManagement from "./router/policyManagementpage/PolicyManagement";
import RiskManagement from "./router/riskManagement/RiskManagement"; 
import SecurityCheck from "./router/securityCheck/SecurityCheck"; 
import UserUpdate from "./router/UserUpdate";
import Home from "./router/Home";
import Nav from "./components/Nav";
import CheckDetail from "./router/checkManagement/CheckDetail"; 
import CheckOperate from "./router/checkManagement/CheckOperate";
import Requirements from "./router/checkManagement/Requirements"; 
import PersonalInformation from "./router/checkManagement/PersonalInformation"; 
import TechCheck from "./router/checkManagement/TeckCheck"; 
import AssetList from "./router/assetManagement/AssetList"; 
import AssetNetWork from "./router/assetManagement/Network";
import Protect from "./router/policyManagementpage/Protect"; 
import Analysis from "./router/riskManagement/Analysis"; 
import Results from "./router/riskManagement/Results"; 
import ManagemenetCheck from "./router/riskManagement/ManagemenetCheck"; 
import SecurityPlan from "./router/riskManagement/SecurityPlan"; 
import DocumentTraces from "./router/documentManagement/DocumentTraces";
import Receipt from "./router/documentManagement/Receipt"; 
import Menu1 from "./router/securityCheck/Menu1";
import Menu2 from "./router/securityCheck/Menu2";
import Menu3 from "./router/securityCheck/Menu3";
import AdminManagement from "./router/admin/AdminManagement";
import AdminList from "./atom/AdminList";
import AdminRegister from "./router/admin/AdminRegister";

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
          </Route>
            <Route path="/page/Admin/userManagement" element={<AdminManagement/>} />
          <Route path="/page/UserUpdate" element={<UserUpdate />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
