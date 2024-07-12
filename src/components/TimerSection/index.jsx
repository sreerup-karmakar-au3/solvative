import { useAppContext } from "../../context/AppContext";
import TimerBlocks from "../../ui/TimeBlocks";

export default function TimerSection() {
  const { timerVal } = useAppContext()

  return (
    <>
      <TimerBlocks value={parseInt(timerVal / 3600) % 60} /> :{" "}
      <TimerBlocks value={parseInt(timerVal / 60) % 60} /> :{" "}
      <TimerBlocks value={timerVal % 60} />
    </>
  );
}
