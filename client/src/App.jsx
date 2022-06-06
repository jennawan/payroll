import Login from "./pages/Login";
import NewPayslip from "./pages/NewPayslip";
import PreviewPaySlip from "./pages/PreviewPaySlip";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import PayslipSuccess from "./pages/PayslipSuccess";
import PayslipList from "./pages/PayslipList";
import Payslip from "./pages/Payslip";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  if (user) {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Navigate to="/" replace />} />
          <Route path="/newpayslip" element={<NewPayslip />} />
          <Route path="/previewpayslip" element={<PreviewPaySlip />} />
          <Route path="/payslip/:id" element={<Payslip />} />
          <Route path="/payslipsuccess" element={<PayslipSuccess />} />
          <Route path="/paysliplist" element={<PayslipList />} />
        </Routes>
        <Footer />
      </Router>
    );
  } else {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    );
  }
};

export default App;
