import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [timerVal, setTimerVal] = useState(0);
  const [timerStatus, setTimerStatus] = useState(false);
  const [startBtnActive, setStartBtnActive] = useState(false);

  useEffect(() => {
    let timer = null;

    if (timerStatus) {
      timer = setInterval(() => setTimerVal((val) => val + 1), 1000);
    }

    return () => clearInterval(timer);
  }, [timerStatus]);

  return (
    <AppContext.Provider
      value={{
        timerVal,
        setTimerVal,
        timerStatus,
        setTimerStatus,
        startBtnActive,
        setStartBtnActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
