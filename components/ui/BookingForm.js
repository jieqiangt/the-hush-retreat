import InputBar from "../ui/InputBar";
import InputSelect from "../ui/InputSelect";
import InputOptions from "./InputOptions";

export default function BookingForm(props) {
  const radioOptions = [
    {
      name: "vaccinated",
      value: true,
      label: "I certify that I am fully vaccincated.",
    },
  ];

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form action="#" className={props.classes[`${props.baseClass}--form`]}>
      <InputBar
        label="First Name"
        type="text"
        inputName="upcoming--form--first-name"
        inputPlaceholder="First Name"
        inputGroupClass={props.classes[`${props.baseClass}--form--first-name`]}
        inputClass={
          props.classes[`${props.baseClass}--form--first-name--input`]
        }
        labelClass={
          props.classes[`${props.baseClass}--form--first-name--label`]
        }
      />
      <InputBar
        label="Last Name"
        type="text"
        inputName="upcoming--form--last-name"
        inputPlaceholder="Last Name"
        inputGroupClass={props.classes[`${props.baseClass}--form--last-name`]}
        inputClass={props.classes[`${props.baseClass}--form--last-name--input`]}
        labelClass={props.classes[`${props.baseClass}--form--last-name--label`]}
      />
      <InputBar
        label="Email"
        type="email"
        inputName="upcoming--form--email"
        inputPlaceholder="Email"
        inputGroupClass={props.classes[`${props.baseClass}--form--email`]}
        inputClass={props.classes[`${props.baseClass}--form--email--input`]}
        labelClass={props.classes[`${props.baseClass}--form--email--label`]}
      />
      <InputBar
        label="Contact No."
        type="text"
        inputName="upcoming--form--contact"
        inputPlaceholder="Contact No."
        inputGroupClass={props.classes[`${props.baseClass}--form--contact`]}
        inputClass={props.classes[`${props.baseClass}--form--contact--input`]}
        labelClass={props.classes[`${props.baseClass}--form--contact--label`]}
      />
      <InputBar
        label="No. of Retreatees"
        type="number"
        inputName="upcoming--form--num"
        inputPlaceholder="No. of Retreatees"
        inputGroupClass={props.classes[`${props.baseClass}--form--num`]}
        inputClass={props.classes[`${props.baseClass}--form--num--input`]}
        labelClass={props.classes[`${props.baseClass}--form--num--label`]}
        datalistId="num--list"
        datalist={["1", "2", "3", "4", "5", "6"]}
      />
      <InputSelect
        label="Retreat Name"
        inputName="upcoming--form--retreat-name"
        inputGroupClass={
          props.classes[`${props.baseClass}--form--retreat-name`]
        }
        inputClass={
          props.classes[`${props.baseClass}--form--retreat-name--input`]
        }
        labelClass={
          props.classes[`${props.baseClass}--form--retreat-name--label`]
        }
        inputOptions={props.retreatList.map((item) => (
          <option key={item.retreatId} value={item.retreatId}>
            {item.retreatName}
          </option>
        ))}
      />
      <InputBar
        label="Message"
        type="textarea"
        inputName="upcoming--form--message"
        inputPlaceholder="Message"
        inputGroupClass={props.classes[`${props.baseClass}--form--message`]}
        inputClass={props.classes[`${props.baseClass}--form--message--input`]}
        labelClass={props.classes[`${props.baseClass}--form--message--label`]}
        rows="3"
      />
      <InputOptions
        options={radioOptions}
        type="checkbox"
        radioGroupClass={props.classes[`${props.baseClass}--form--vaccinate`]}
        radioLegendClass={
          props.classes[`${props.baseClass}--form--vaccinate--legend`]
        }
        optionGroupClass={
          props.classes[`${props.baseClass}--form--vaccinate--group`]
        }
        labelClass={props.classes[`${props.baseClass}--form--vaccinate--label`]}
        btnClass={props.classes[`${props.baseClass}--form--vaccinate--btn`]}
      />
      <button
        className={props.classes[`${props.baseClass}--form--btn`]}
        onClick={submitHandler}
      >
        Register
      </button>
    </form>
  );
}
