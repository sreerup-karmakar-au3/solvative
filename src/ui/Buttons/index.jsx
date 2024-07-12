import "./style.scss";

export default function Button({ name, onclick, active }) {
  return (
    <button className="action-btns" onClick={() => onclick()} disabled={active}>
      {name}
    </button>
  );
}
