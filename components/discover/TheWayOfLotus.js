import classes from "../../sass/pages/discover.module.scss";

export default function TheWayOfLotus() {
  return (
    <section className={classes["lotus"]}>
      <div className={classes["lotus--logo-top"]}>Small Lotus Logo</div>
      <h2 className={`${classes["lotus--title"]}`}>
        The Way of the <span>Lotus</span>
      </h2>
      <article className={classes["lotus--article"]}>
        <p>
          It started with a lotus. The lotus flower is a symbol of daily
          resurrection. Even with its roots submerged in the dirtiest waters, it
          miraculously re-blooms into the most beautiful flower. A lotus seed
          can withstand thousands of years without water, and is a symbol of the
          fascinating will to live. The lotus becomes a guiding compass.
        </p>
        <p>
          Living in a fast-paced society, sometimes we get swept away by the
          daily happenings in life and neglect our physical and mental
          wellbeing. Mindfulness practices helps us slow down while navigating a
          journey inwards to a deeper understanding of our self and purpose.
        </p>
        <p>
          Experience the power of mindfulness. Be empowered to step away from
          the hustle of everyday life and practice to be Here. Whether you are
          seeking to heal, connect, or to pick up a mindful practice, step into
          our sanctuary and be guided by the way of the lotus.
        </p>
      </article>
      <div className={classes["lotus--logo-bottom"]}>Blooming Lotus Logo</div>
    </section>
  );
}

