import classes from "../../sass/pages/help.module.scss";
import InputBar from "../ui/InputBar";
import InputSelect from "../ui/InputSelect";

export default function ContactUs() {
  const retreatsList = [
    { retreatId: 0, retreatName: "Retreat 1" },
    { retreatId: 1, retreatName: "Retreat 2" },
  ];

  return (
    <div className={classes["contact-us"]}>
      <div className={classes["contact-us--img"]} />
      <form action="#" className={classes["contact-us--form"]}>
        <h2 className={classes["contact-us--form--title"]}>
          Ready for a retreat?
        </h2>
        <article className={classes["contact-us--form--article"]}>
          Book a retreat with us using the form below! <br />
          If you have a general question, we may have answered it in our FAQ
          section! <br />
          Alternatively, do drop us an email using the form below or at
          hello@thehushretreats.com!
        </article>
        <InputBar
          label="First Name"
          inputType="text"
          inputName="contact-us--form--first-name"
          inputPlaceholder="First Name"
          inputGroupClass={classes["contact-us--form--first-name"]}
          inputClass={classes["contact-us--form--first-name--input"]}
          labelClass={classes["contact-us--form--first-name--label"]}
        />
        <InputBar
          label="Last Name"
          inputType="text"
          inputName="contact-us--form--last-name"
          inputPlaceholder="Last Name"
          inputGroupClass={classes["contact-us--form--last-name"]}
          inputClass={classes["contact-us--form--last-name--input"]}
          labelClass={classes["contact-us--form--last-name--label"]}
        />
        <InputBar
          label="No. of Retreatees"
          inputType="number"
          inputName="contact-us--form--num-retreatees"
          inputPlaceholder="No. of Retreatees"
          inputGroupClass={classes["contact-us--form--num-retreatees"]}
          inputClass={classes["contact-us--form--num-retreatees--input"]}
          labelClass={classes["contact-us--form--num-retreatees--label"]}
          datalistId="num-retreatees-list"
          datalist={["1", "2", "3", "4", "5", "6"]}
        />
        <InputSelect
          label="Retreat Name"
          inputName="contact-us--form--retreat-name"
          inputGroupClass={classes["contact-us--form--retreat-name"]}
          inputClass={classes["contact-us--form--retreat-name--input"]}
          labelClass={classes["contact-us--form--retreat-name--label"]}
          inputOptions={retreatsList.map((item) => (
            <option value={item.retreatId}>{item.retreatName}</option>
          ))}
        />
        <InputBar
          label="Email"
          inputType="email"
          inputName="contact-us--form--email"
          inputPlaceholder="Email"
          inputGroupClass={classes["contact-us--form--email"]}
          inputClass={classes["contact-us--form--email--input"]}
          labelClass={classes["contact-us--form--email--label"]}
        />
        <InputBar
          label="Message"
          inputType="textarea"
          inputName="contact-us--form--message"
          inputPlaceholder="Message"
          inputGroupClass={classes["contact-us--form--message"]}
          inputClass={classes["contact-us--form--message--input"]}
          labelClass={classes["contact-us--form--message--label"]}
          rows="8"
        />
        <button className={classes["contact-us--form--btn"]}>
          Send Message
        </button>
      </form>
    </div>
  );
}
