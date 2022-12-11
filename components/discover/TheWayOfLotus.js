import classes from "./sass/discover.module.scss";

export default function TheWayOfLotus() {
  return (
    <section className={classes["lotus"]}>
      <div className={classes["lotus--logo-top"]}>Small Lotus Logo</div>
      <h2 className={`${classes["section--title"]}`}>
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
          wellbeing. Mindfulness practices is Mandi's way of slowing down while
          navigating on her journey inwards to a deeper understanding of her
          self and purpose. She wants to build a platform to help others live
          their most authentic truth with a holistic approach to life and
          wellness.
        </p>
        <p>
          With an 8 years experience in the service industry, Mandi wish to
          deliver the best service and hospitality in her retreats so that you
          can truly rest, reset and reconnect with yourself as you go on your
          personal journey. Rest assured you will be well taken care of by the
          team at The Hush Retreats.
        </p>
        <p>
          Born to curate restful spaces for the Seeker, be empowered to step
          away from the hustle of everyday life and practice to be Here. The
          Hush Retreats is also a platform to connect people and building a
          supportive wellness community.
        </p>
        <p>
          Experience the power of mindfulness. Whether you are seeking to heal,
          connect, or to pick up a mindful practice, step into our sanctuary and
          be guided by the way of the lotus.
        </p>
      </article>
      <div className={classes["lotus--logo-bottom"]}>Blooming Lotus Logo</div>
    </section>
  );
}
