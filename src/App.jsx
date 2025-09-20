import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomNavigation from "./Components/BottomNavigation";
import DashBoard from "./Pages/DashBoard";
import TopBar from "./Components/TopBar";
import WarningLogs from "./Pages/WarningLogs";
import ProfilePage from "./Pages/ProfilePage";


function App() {
  return (
    <Router>
      <TopBar />
      <div className="pb-16 pt-16">
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/warnings" element={<WarningLogs />} />
          <Route path="/profile" element={<ProfilePage />} /> 
        </Routes>
      </div>

      <div className="fixed bottom-0 left-0 right-0">
        <BottomNavigation />
      </div>
    </Router>
  );
}

export default App;
