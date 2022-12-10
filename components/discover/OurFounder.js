import ImgComposition from "../ui/ImgComposition";
import classes from "./sass/discover.module.scss";

export default function OurFounder() {
  return (
    <section className={classes["founder"]}>
      <div className={classes["founder-desc"]}>
        <h2 className={classes["founder-desc-title"]}>Our Founder</h2>
        <div className={classes["founder-desc-text"]}>
          <span className={classes["founder-desc-text-1"]}>
            Mandi is the founder of The Hush Retreats. Established in 2021,
            Mandi curates bespoke wellness retreats and events for individuals
            and corporates.
          </span>
          <span className={classes["founder-desc-text-2"]}>
            Aside from being a yoga teacher, Mandi believes in the importance of
            wellness and mindfulness in our daily lives. She aspires to build a
            wellness community in Singapore and provide an avenue for people who
            seek mindful experiences.
          </span>
          <span className={classes["founder-desc-text-3"]}>
            With her experience as a flight attendant, rest assured you will be
            well taken care of by Mandi and her team. She aims to bring The Hush
            Retreats across the borders of Singapore one day.
          </span>
        </div>
      </div>
      <aside className={`composition ${classes['founder-img']}`} >
        <ImgComposition />
      </aside>
    </section>
  );
}
