import BookingForm from "../ui/BookingForm";
import Modal from "../ui/Modal";

export default function NewRetreatBookingModal(props) {
  const { classes, baseClass } = props;
  const text = [
    "Fugiat quis ut voluptate anim proident exercitation reprehenderit tempor non ut dolor. Et qui eu duis proident et veniam irure in  ",
    "Velit id anim nostrud eu proident. Cupidatat nostrud duis sunt ea excepteur excepteur consequat quis quis cillum eu. Id irure  ",
  ];

  const paragraphs = text.map((item, idx) => <p key={idx}>{item}</p>);
  const content = (
    <article className={classes[`${baseClass}--aside--content`]}>
      {paragraphs}
    </article>
  );

  const retreatList = [{ retreatId: "0", retreatName: "Release & Renew" }];

  const aside = (
    <section className={classes[`${baseClass}--aside`]}>
      <h3 className={classes[`${baseClass}--aside--title`]}>
        Release & Renew &#8212; <span>2023</span>
      </h3>
      {content}
      <h4 className={classes[`${baseClass}--aside--title`]}>
        Register Your Interest
      </h4>
      <BookingForm
        baseClass={baseClass}
        classes={classes}
        retreatList={retreatList}
      />
    </section>
  );

  const img = (
    <div className={classes[`${baseClass}--img--outer`]}>
      <div
        className={`${classes[`${baseClass}--img`]} ${
          classes[`${baseClass}--img--1`]
        }`}
      >
        &nbsp;
      </div>
      <div
        className={`${classes[`${baseClass}--img`]} ${
          classes[`${baseClass}--img--2`]
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
      baseClass={baseClass}
      classes={classes}
    />
  );
}
