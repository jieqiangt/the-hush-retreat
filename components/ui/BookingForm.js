import InputBar from "../ui/InputBar";

export default function BookingForm(props) {
  return (
    <form action="#" className={props.classes[`${props.baseClass}--form`]}>
      <InputBar
        label="First Name"
        inputType="text"
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
        inputType="text"
        inputName="upcoming--form--last-name"
        inputPlaceholder="Last Name"
        inputGroupClass={props.classes[`${props.baseClass}--form--last-name`]}
        inputClass={props.classes[`${props.baseClass}--form--last-name--input`]}
        labelClass={props.classes[`${props.baseClass}--form--last-name--label`]}
      />
      <InputBar
        label="Email"
        inputType="email"
        inputName="upcoming--form--email"
        inputPlaceholder="Email"
        inputGroupClass={props.classes[`${props.baseClass}--form--email`]}
        inputClass={props.classes[`${props.baseClass}--form--email--input`]}
        labelClass={props.classes[`${props.baseClass}--form--email--label`]}
      />
      <InputBar
        label="No. of Retreatees"
        inputType="number"
        inputName="upcoming--form--num-retreatees"
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
        inputOptions={props.retreatsList.map((item) => (
          <option value={item.retreatId}>{item.retreatName}</option>
        ))}
      />
      <button className={props.classes[`${props.baseClass}--form--btn`]}>
        Register
      </button>
    </form>
  );
}
