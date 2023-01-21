export default function InputOption(props) {
  const {
    type,
    name,
    value,
    onChange,
    btnClass,
    labelClass,
    label,
    optionGroupClass,
  } = props;

  return (
    <div className={optionGroupClass}>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      <span className={btnClass}>&nbsp;</span>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
    </div>
  );
}
