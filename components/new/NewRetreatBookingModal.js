import BookingForm from "../ui/BookingForm";
import Modal from "../ui/Modal";

export default function NewRetreatBookingModal(props) {
  const text = [
    "Immerse yourself in a full-day retreat to release the stories and veils of the past, through somatic practices, purified with a fire ceremony.",
    "Start the retreat with a refreshing juice from Mou Gou Juice and nourish your body with a delicious lunch from Tamarind Hill. You will also receive a Welcome Gift from The Hush Retreats that you can take home at the end of the retreat.",
    "Guided by Stephanie Chaunte Leong, through somatic practices, breathwork, embodied dance-movement, expressive art, conscious dreaming, journaling and a fire ceremony as she leads you back home to yourself.",
  ];

  const paragraphs = text.map((item, idx) => <p key={idx}>{item}</p>);
  const content = (
    <article
      className={
        props.classes[
          `${props.baseClass}--as
    
    ide--content`
        ]
      }
    >
      {paragraphs}
    </article>
  );

  const retreatList = [{ retreatId: "0", retreatName: "Release & Renew" }];

  const aside = (
    <section className={props.classes[`${props.baseClass}--aside`]}>
      <h3 className={props.classes[`${props.baseClass}--aside--title`]}>
        The Title
      </h3>
      {content}
      <BookingForm
        baseClass={props.baseClass}
        classes={props.classes}
        retreatList={retreatList}
      />
    </section>
  );

  console.log(props.classes[`${props.baseClass}--img-1`]);

  console.log(props.classes);
  const img = (
    <div className={props.classes[`${props.baseClass}--img--outer`]}>
      <div
        className={`${props.classes[`${props.baseClass}--img`]} ${
          props.classes[`${props.baseClass}--img--1`]
        }`}
      >
        &nbsp;
      </div>
      <div
        className={`${props.classes[`${props.baseClass}--img`]} ${
          props.classes[`${props.baseClass}--img--2`]
        }`}
      >
        &nbsp;
      </div>
    </div>
  );

  return (
    <Modal
      img={img}
      aside={aside}
      baseClass={props.baseClass}
      classes={props.classes}
    />
  );
}
