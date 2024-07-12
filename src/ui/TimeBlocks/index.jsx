import "./style.scss"

export default function TimerBlocks({ value }) {

  return (
    <span className="timer-blocks">
      {value < 10 ? `0${value}` : value}
    </span>
  );
}
