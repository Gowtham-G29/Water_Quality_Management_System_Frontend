import { useEffect } from "react";
import { fetchUser } from "../Api";
import WarningLogsCard from "../Components/WarningLogsCard";
import { useState } from "react";

function WarningLogs() {

  const [warningLogs,setWarningLogs]=useState([]);

  const fetchWarningLogs = async () => {
    try {
      const userData = await fetchUser();   
      setWarningLogs(userData.data.alertStatusList);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }       
  }

  useEffect(()=>{
    fetchWarningLogs();
  },[]);


  return (
    <div className="p-4 flex flex-col items-center sm:items-start gap-4 md:flex-row md:flex-wrap md:justify-start">
      <WarningLogsCard warningLogs={warningLogs} />
    
    </div>
  );
}

export default WarningLogs;
