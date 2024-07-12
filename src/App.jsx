import TimerSection from "./components/TimerSection";
import TimerButtons from "./components/TimerButtons";

import { AppWrapper } from "./context/AppContext";

import "./App.scss";

export default function App() {
  return (
    <div className="timer-app">
      <AppWrapper>
        <div className="timer-value-section">
          <TimerSection />
        </div>
        <div className="timer-button-section">
          <TimerButtons />
        </div>
      </AppWrapper>
    </div>
  );
}