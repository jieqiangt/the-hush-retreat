import { Fragment } from "react";
import InputOption from "./InputOption";

export default function InputSelect(props) {
  const {
    inputGroupClass,
    inputName,
    inputClass,
    onChange,
    inputOptions,
    labelClass,
    label,
    optionClass,
  } = props;

  const options = inputOptions.map((item) => (
    <InputOption
      key={item.name}
      name={item.name}
      type="select"
      value={item.value}
      optionClass={optionClass}
      onChange={onChange}
    />
  ));

  return (
    <Fragment>
      <div className={inputGroupClass}>
        <label htmlFor={inputName} className={labelClass}>
          {label}
        </label>
        <select
          name={inputName}
          id={inputName}
          className={inputClass}
          onChange={onChange}
        >
          {options}
        </select>
      </div>
    </Fragment>
  );
}
