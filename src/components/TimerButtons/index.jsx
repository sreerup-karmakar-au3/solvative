import { useAppContext } from "../../context/AppContext";
import Button from "../../ui/Buttons";

export default function TimerButtons() {
  const { timerVal, setTimerVal, timerStatus, setTimerStatus, startBtnActive, setStartBtnActive } = useAppContext()

  const start_pause_handler = () => {
    setTimerStatus((status) => !status);
  };

  const stop_handler = () => {
    setStartBtnActive(true);
    setTimerStatus(false);
  };

  const reset_handler = () => {
    setStartBtnActive(false);
    setTimerVal(0);
  };

  return (
    <>
      <Button
        onclick={start_pause_handler}
        name={timerStatus ? "Pause" : "Start"}
        active={startBtnActive}
      />
      <Button onclick={stop_handler} name="Stop" active={timerVal === 0} />
      <Button onclick={reset_handler} name="Reset" active={timerVal === 0} />
    </>
  );
}
