import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomNavigation from "./Components/BottomNavigation";
import DashBoard from "./Pages/DashBoard";
// import WarningLogs from "./Pages/WarningLogs"; // example extra page
// import Profile from "./Pages/Profile";         // example extra page

function App() {
  return (
    <Router>
      <div className="pb-16"> {/* padding so content doesn't overlap BottomNavigation */}
        <Routes>
          <Route path="/" element={<DashBoard />} />
          {/* <Route path="/warnings" element={<WarningLogs />} />
          <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </div>

      {/* Fixed bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0">
        <BottomNavigation />
      </div>
    </Router>
  );
}

export default App;
