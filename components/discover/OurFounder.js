import ImgComposition from "../ui/ImgComposition";
import classes from "./sass/discover.module.scss";

export default function OurFounder() {
  return (
    <section className={classes["founder"]}>
      <div className={classes["founder--desc"]}>
        <h2 className={classes["section--title"]}>Our Founder</h2>
        <article className={classes["founder--desc--article"]}>
          <p>
            Mandi is the founder of The Hush Retreats. Established in 2021,
            Mandi curates bespoke wellness retreats and events for individuals
            and corporates.
          </p>
          <p>
            Aside from being a yoga teacher, Mandi believes in the importance of
            wellness and mindfulness in our daily lives. She aspires to build a
            wellness community in Singapore and provide an avenue for people who
            seek mindful experiences.
          </p>
          <p>
            With her experience as a flight attendant, rest assured you will be
            well taken care of by Mandi and her team. She aims to bring The Hush
            Retreats across the borders of Singapore one day.
          </p>
        </article>
      </div>
      <div className={`${classes["founder--img"]}`}>
        <ImgComposition />
      </div>
    </section>
  );
}
