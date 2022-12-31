import DescriptionSection from "../ui/DescriptionSection";
import ImgComposition from "../ui/ImgComposition";

export default function OurFounder(props) {
  const title = "Our Founder";
  const text = [
    "As a yoga teacher, Mandi believes in the importance of wellness and mindfulness in our daily lives. Aspiring to create a wellness community in Singapore and provide an avenue for people who seek mindful experiences, she started curating bespoke wellness retreats and events for individuals and corporates, which eventually led to the founding of The Hush Retreats in 2021.",
    "Established with the vision to curate restful spaces for all & empowering everyone to step away from the hustle of everyday life and practice to be Here, The Hush Retreats has the far-reaching mission of ultimately being a platform that connects people by building a supportive wellness community.",
    "Armed with 8 years of experience in the service industry, she strives to deliver the best service and hospitality in all her retreats so that you can truly rest, reset and reconnect with yourself as you go on your personal journey. Rest assured you will be well taken care of by the team at The Hush Retreats.",
  ];

  const paragraphs = text.map((item, idx) => <p key={idx}>{item}</p>);
  const content = (
    <article className={props.classes[`${props.baseClass}--aside--content`]}>
      {paragraphs}
    </article>
  );

  const imgUrlList = [
    "/img/mandi-2-lg.jpg",
    "/img/mandi-1-lg.jpg",
    "/img/mandi-3-lg.jpg",
  ];

  const img = (
    <div className={props.classes[`${props.baseClass}--img`]}>
      <ImgComposition
        classes={props.classes}
        baseClass={props.baseClass}
        imgUrlList={imgUrlList}
      />
    </div>
  );

  return (
    <DescriptionSection
      classes={props.classes}
      baseClass={props.baseClass}
      title={title}
      content={content}
      img={img}
    />
  );
}

{
  /* <section className={props.classes[props.baseClass]}>
  <div className={props.classes[`${props.baseClass}--desc`]}>
    <article className={props.classes[`${props.baseClass}--desc--article`]}>
      <h2 className={props.classes[`${props.baseClass}--title`]}>
        Our Founder
      </h2>
      <p>
        As a yoga teacher, Mandi believes in the importance of wellness and
        mindfulness in our daily lives. Aspiring to create a wellness community
        in Singapore and provide an avenue for people who seek mindful
        experiences, she started curating bespoke wellness retreats and events
        for individuals and corporates, which eventually led to the founding of
        The Hush Retreats in 2021.
      </p>
      <p>
        Established with the vision to curate restful spaces for all &
        empowering everyone to step away from the hustle of everyday life and
        practice to be Here, The Hush Retreats has the far-reaching mission of
        ultimately being a platform that connects people by building a
        supportive wellness community.
      </p>
      <p>
        Armed with 8 years of experience in the service industry, she strives to
        deliver the best service and hospitality in all her retreats so that you
        can truly rest, reset and reconnect with yourself as you go on your
        personal journey. Rest assured you will be well taken care of by the
        team at The Hush Retreats.
      </p>
    </article>
  </div>
</section>; */
}
