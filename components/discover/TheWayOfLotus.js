import { Fragment } from "react";
import DescriptionSection from "../ui/DescriptionSection";

export default function TheWayOfLotus(props) {
  const content = (
    <div className={props.classes[`${props.baseClass}--aside--content`]}>
      <p>
        It started with a lotus. The lotus flower is a symbol of daily
        resurrection. Even with its roots submerged in the dirtiest waters, it
        miraculously re-blooms into the most beautiful flower. A lotus seed can
        withstand thousands of years without water, and is a symbol of the
        fascinating will to live. The lotus becomes a guiding compass.
      </p>
      <p>
        Living in a fast-paced society, sometimes we get swept away by the daily
        happenings in life and neglect our physical and mental wellbeing.
        Mindfulness practices helps us slow down while navigating a journey
        inwards to a deeper understanding of our self and purpose.
      </p>
      <p>
        Experience the power of mindfulness. Be empowered to step away from the
        hustle of everyday life and practice to be Here. Whether you are seeking
        to heal, connect, or to pick up a mindful practice, step into our
        sanctuary and be guided by the way of the lotus.
      </p>
    </div>
  );
  const img = <div className={props.classes[`${props.baseClass}--img`]} />;

  return (
    <DescriptionSection
      classes={props.classes}
      baseClass={props.baseClass}
      title="The Way of The Lotus"
      content={content}
      img={img}
    />
  );
}
