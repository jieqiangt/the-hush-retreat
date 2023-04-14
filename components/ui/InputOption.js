export default function InputOption(props) {
  const {
    type,
    name,
    value,
    onChange,
    optionGroupClass,
    btnClass,
    labelClass,
    label,
    optionClass,
  } = props;

  let inputReturn;

  if (type === "checkbox") {
    inputReturn = (
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

  if (type === "select") {
    inputReturn = (
      <option className={optionClass} value={value}>
        {name}
      </option>
    );
  }

  return inputReturn;
}
