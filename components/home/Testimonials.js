import classes from "../../sass/pages/home.module.scss";
import Carousel from "../ui/Carousel";
import TestimonialItem from "../ui/TestimonialItem";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "I very much enjoyed the Sunrise Yoga & Meditation session and learnt valuable techniques on how to look inward, reflect and bring forward positive energy.",
      participantName: "Alex B.",
      href: "#",
      retreatName: "Sound of Healing",
      retreatDate: "Oct 2021",
    },
    {
      quote:
        "It was luxurious, personalised and intimate. I learnt so many ways I can practice mindfulness and meditation. It was an experience that truly grounded me.",
      participantName: "Louisa Y.",
      href: "#",
      retreatName: "Sound of Healing",
      retreatDate: "Jan 2022",
    },
    {
      quote: "It is definitely a 'must-go' at least once in a lifetime",
      participantName: "Eugene Y.",
      href: "#",
      retreatName: "Sound of Healing",
      retreatDate: "Nov 2022",
    },
  ];

  const testimonialItems = testimonials.map((item) => (
    <TestimonialItem
      key={item.quote}
      quote={item.quote}
      participantName={item.participantName}
      href={item.href}
      retreatName={item.retreatName}
      retreatDate={item.retreatDate}
    />
  ));

  return (
    <section className={classes["testimonials"]}>
      <div>Small Lotus Logo</div>
      <h2 className={classes["section--title"]}>Retreat Reflections</h2>
      <Carousel carouselItems={testimonialItems} />
    </section>
  );
}
