export default function InputOption(props) {
  return (
    <div className={props.optionGroupClass}>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        value={props.value}
      />
      <span className={props.btnClass}>&nbsp;</span>
      <label htmlFor={props.name} className={props.labelClass}>
        {props.label}
      </label>
    </div>
  );
}
