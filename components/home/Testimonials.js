import { useEffect } from "react";
import { useState } from "react";
import classes from "../../sass/pages/home.module.scss";
import Carousel from "../ui/Carousel";
import TestimonialItem from "../home/TestimonialItem";
import Icon from "../ui/Icon";

export default function Testimonials() {
  const [activeItem, setActiveItem] = useState(0);
  const [testimonialItems, setTestimonialItems] = useState([]);
  const [intervalId, setIntervalId] = useState();

  let testimonialsArr = [
    {
      quote:
        "I very much enjoyed the Sunrise Yoga & Meditation session and learnt valuable techniques on how to look inward, reflect and bring forward positive energy.",
      participantName: "Alex B.",
      href: "/",
      retreatName: "Sound of Healing",
      retreatDate: "Oct 2021",
      active: true,
    },
    {
      quote:
        "It was luxurious, personalised and intimate. I learnt so many ways I can practice mindfulness and meditation. It was an experience that truly grounded me.",
      participantName: "Louisa Y.",
      href: "/",
      retreatName: "Sound of Healing",
      retreatDate: "Jan 2022",
      active: false,
    },
    {
      quote: "It is definitely a 'must-go' at least once in a lifetime",
      participantName: "Eugene Y.",
      href: "/",
      retreatName: "Sound of Healing",
      retreatDate: "Nov 2022",
      active: false,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((activeItem) => {
        return (activeItem + 1) % testimonialsArr.length;
      });
      setIntervalId(() => interval);
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, [intervalId]);

  const changeActiveItem = (newActiveItem) => {
    clearInterval(intervalId);
    setIntervalId(() => 0);
    setActiveItem(newActiveItem);
  };

  useEffect(() => {
    const createTestimonialItem = (item) => (
      <TestimonialItem
        key={item.quote}
        quote={item.quote}
        participantName={item.participantName}
        href={item.href}
        retreatName={item.retreatName}
        retreatDate={item.retreatDate}
        active={item.active}
        carouselItemClass={classes["testimonials--carousel--item"]}
        carouselItemActiveClass={
          classes["testimonials--carousel--item--active"]
        }
      />
    );
    const setActiveTestimonial = (testimonials, idx) => {
      const testimonialsOutput = testimonials.map((item) => ({
        ...item,
        active: false,
      }));

      const activeTestimonial = testimonials[idx];
      activeTestimonial["active"] = true;
      testimonialsOutput.splice(idx, 1, activeTestimonial);

      return testimonialsOutput;
    };

    const testimonials = setActiveTestimonial(testimonialsArr, activeItem);
    setTestimonialItems(testimonials.map(createTestimonialItem));
  }, [activeItem]);

  return (
    <section className={classes["testimonials"]}>
      <Icon
        iconClass={classes["testimonials--icon"]}
        iconName="icon-logo-no-words-sm"
      />
      <h2 className={classes["testimonials--title"]}>Testimonials</h2>
      <Carousel
        carouselItems={testimonialItems}
        activeItem={activeItem}
        changeActiveItem={changeActiveItem}
        carouselClass={classes["testimonials--carousel"]}
        carouselListClass={classes["testimonials--carousel--list"]}
        carouselBtnLeftClass={classes["testimonials--carousel--btn--left"]}
        carouselBtnRightClass={classes["testimonials--carousel--btn--right"]}
        carouselNavClass={classes["testimonials--carousel--nav"]}
        carouselNavDotClass={classes["testimonials--carousel--nav--dot"]}
        carouselNavDotActiveClass={
          classes["testimonials--carousel--nav--dot--active"]
        }
      />
    </section>
  );
}
