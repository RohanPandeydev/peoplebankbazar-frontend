import { useEffect } from "react";
import RoutesPath from "./routes";
import { initializeAlerts, useAlert } from "./components/ui/AlertModal";








function App() {
    const alertContext = useAlert();

  
    // Initialize once
    useEffect(() => {
      initializeAlerts(alertContext);
    }, [alertContext]);
  return <RoutesPath />;
}

export default App;
