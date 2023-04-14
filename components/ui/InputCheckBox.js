import InputOption from "./InputOption";

export default function InputCheckBox(props) {
  const {
    labelClass,
    optionGroupClass,
    overallGroupClass,
    btnClass,
    legend,
    legendClass,
    inputOptions,
  } = props;


  const options = inputOptions.map((item) => (
    <InputOption
      key={item.name}
      name={item.name}
      type="checkbox"
      value={item.value}
      label={item.label}
      onChange={item.onChange}
      labelClass={labelClass}
      optionGroupClass={optionGroupClass}
      btnClass={btnClass}
    />
  ));

  const inputReturn = (
    <fieldset className={overallGroupClass}>
      {legend ? <legend className={legendClass}>{legend}</legend> : ""}
      {options}
    </fieldset>
  );

  return inputReturn;
}
