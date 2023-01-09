import InputOption from "./InputOption";

export default function InputOptions(props) {
  const options = props.options.map((item) => (
    <InputOption
      key={item.name}
      name={item.name}
      type={props.type}
      value={item.value}
      label={item.label}
      labelClass={props.labelClass}
      optionGroupClass={props.optionGroupClass}
      btnClass={props.btnClass}
    />
  ));

  return (
    <fieldset className={props.radioGroupClass}>
      {props.legend ? (
        <legend className={props.radioLegendClass}>{props.legend}</legend>
      ) : (
        ""
      )}
      {options}
    </fieldset>
  );
}
