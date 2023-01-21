import InputOption from "./InputOption";

export default function InputOptions(props) {
  const {
    type,
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
      type={type}
      value={item.value}
      label={item.label}
      onChange={item.onChange}
      labelClass={labelClass}
      optionGroupClass={optionGroupClass}
      btnClass={btnClass}
    />
  ));

  return (
    <fieldset className={overallGroupClass}>
      {legend ? <legend className={legendClass}>{legend}</legend> : ""}
      {options}
    </fieldset>
  );
}
