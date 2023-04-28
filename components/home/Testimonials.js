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
          "What an amazing and relaxing experience with Hush Retreats! It was my first time to attend a meditation retreat & the Hush team exceeded my expectations. The organizers were on point at every aspect of the retreat from the moment you leave your home (with a free limo ride), attention to every small detail (personalized letters and gifts) to the choice of yoga & meditation teachers making your stay truly a weekend to fully disconnect & reflect. Overall, Hush Retreats is highly recommended for an all-inclusive retreat.",
        participantName: "Lawrence A.",
        href: "/explore#here-and-now",
        retreatName: "Here & Now",
        retreatDate: "Oct 2021",
        active: true,
      },
      {
        quote:
          "I attended my first ever retreat with Hush Retreats and I think it's gonna be hard to ever beat this experience. It was luxurious, very well thought out, personalized & intimate. The hosts were so amazing in making us feel comfortable & so many new friends unfolded. Thankful and grateful for this experience.",
        participantName: "Louisa Y.",
        href: "/explore#here-and-now",
        retreatName: "Here & Now",
        retreatDate: "Jan 2022",
        active: false,
      },
      {
        quote:
          "The surf-HIIT event was well orgnaized. There was ample time for us to get ready and get changed before the workout started. Mandi's workout was intense but it was a good session! There were juices proivded by mougou & it was very refreshing, especially after an intense workout! Overall, I enjoyed myself!",
        participantName: "Angelica",
        href: "/explore#sweat-suurv",
        retreatName: "SWEAT x Suurv",
        retreatDate: "Mar 2023",
        active: false,
      },
      {
        quote:
          "I love that it is an outdoor workout so you get in touch with nature, because most of the time we work out in the gym and don’t get in touch with the sunlight. Especially with a group of females, it is all feminine energy and REALLY EMPOWERING!!!",
        participantName: "Joyce T.",
        href: "/explore#sweat-suurv",
        retreatName: "SWEAT x Suurv",
        retreatDate: "Mar 2023",
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
    }, 18000);

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
