import { useEffect, useState } from "react";
import Carousel from "../ui/Carousel";
import TestimonialItem from "../home/TestimonialItem";
import Icon from "../ui/Icon";

export default function Testimonials(props) {
  const [activeItem, setActiveItem] = useState(0);
  const [testimonialItems, setTestimonialItems] = useState([]);
  const [intervalId, setIntervalId] = useState();
  const { baseClass, classes } = props;

  useEffect(() => {
    let testimonialsArr = [
      {
        quote:
          "I very much enjoyed the Sunrise Yoga & Meditation session and learnt valuable techniques on how to look inward, reflect and bring forward positive energy.",
        participantName: "Alex B.",
        href: "/explore#here-and-now",
        retreatName: "Here & Now",
        retreatDate: "Oct 2021",
        active: true,
      },
      {
        quote:
          "It was luxurious, personalised and intimate. I learnt so many ways I can practice mindfulness and meditation. It was an experience that truly grounded me.",
        participantName: "Louisa Y.",
        href: "/explore#here-and-now",
        retreatName: "Here & Now",
        retreatDate: "Jan 2022",
        active: false,
      },
      {
        quote: "It is definitely a 'must-go' at least once in a lifetime",
        participantName: "Eugene Y.",
        href: "/explore",
        href: "/explore#here-and-now",
        retreatName: "Here & Now",
        retreatDate: "Nov 2022",
        active: false,
      },
    ];

    const createTestimonialItem = (item) => (
      <TestimonialItem
        key={item.quote}
        quote={item.quote}
        participantName={item.participantName}
        href={item.href}
        retreatName={item.retreatName}
        retreatDate={item.retreatDate}
        active={item.active}
        carouselItemClass={classes[`${baseClass}--carousel--item`]}
        carouselItemActiveClass={
          classes[`${baseClass}--carousel--item--active`]
        }
        classes={classes}
        baseClass={baseClass}
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
  }, [activeItem, baseClass, classes]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((activeItem) => {
        return (activeItem + 1) % testimonialItems.length;
      });
      setIntervalId(() => interval);
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, [intervalId, testimonialItems]);

  const changeActiveItem = (newActiveItem) => {
    clearInterval(intervalId);
    setIntervalId(() => 0);
    setActiveItem(newActiveItem);
  };

  return (
    <section className={classes[baseClass]}>
      <Icon
        iconClass={classes[`${baseClass}--icon`]}
        iconName="icon-logo-no-words-sm"
      />
      <h2 className={classes[`${baseClass}--title`]}>What Our Guests Say</h2>
      <Carousel
        carouselItems={testimonialItems}
        activeItem={activeItem}
        changeActiveItem={changeActiveItem}
        carouselClass={classes[`${baseClass}--carousel`]}
        carouselListClass={classes[`${baseClass}--carousel--list`]}
        carouselBtnLeftClass={classes[`${baseClass}--carousel--btn--left`]}
        carouselBtnRightClass={classes[`${baseClass}--carousel--btn--right`]}
        carouselNavClass={classes[`${baseClass}--carousel--nav`]}
        carouselNavDotClass={classes[`${baseClass}--carousel--nav--dot`]}
        carouselNavDotActiveClass={
          classes[`${baseClass}--carousel--nav--dot--active`]
        }
      />
    </section>
  );
}
