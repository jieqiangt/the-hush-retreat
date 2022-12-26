import Banner from "../ui/Banner";

export default function GuidingPrinciple(props) {
  const title = "Our Guiding Principle"
  const bannerDetails = (
    <p className={props.classes[`${props.baseClass}--desc`]}>
      Living life with unwavering faith and joy, <br />
      as the{" "}
      <span className={props.classes[`${props.baseClass}--em`]}> lotus </span>
      does, <br />
      to ensure the most beautiful revival
    </p>
  );

  return (
    <Banner
      title={title}
      baseClass={props.baseClass}
      classes={props.classes}
      bannerDetails={bannerDetails}
    />
  );
}
