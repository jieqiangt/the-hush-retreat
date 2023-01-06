import { useEffect, useState } from "react";
import FAQItem from "../help/FAQItem";
import Accordion from "../ui/Accordion";
import Icon from "../ui/Icon";

const FAQItemsList = [
  {
    question: "Why choose The Hush Retreats?",
    answer:
      "We offer thoughtfully planned retreats, with mindfulness as a core pillar. Every hush retreat is kept to small, exclusive groups for an intimate and wholesome experience. We take care of everything from start to end – the retreats are luxurious, all-inclusive, with carefully curated workshops to guide you towards a nourishing weekend. You just have to show up, sit back and unwind - we will take care of the rest.",
    active: false,
  },
  {
    question: "What does the retreat include?",
    answer:
      "The retreat package includes a luxurious hotel stay, chauffeured limousine 2-way rides from your doorstep, curated meals and retreat experiences. More details on specific inclusions can be found on the retreat information page. ",
    active: true,
  },
  {
    question: "Do I need any type of experience to join the retreat?",
    answer:
      "You do not need any experience to join the retreat. This is designed for everyone, from experienced practitioners to mindfulness to those just exploring.",
    active: false,
  },
  {
    question: "How do I make payment?",
    answer:
      "Once you have reached out to us via email and confirmed your spot, details for payment will be sent to you. At the moment, we accept only bank transfers and i-banking transfers. Credit card payments are not available.",
    active: false,
  },
  {
    question: "Can I opt out of any experiences?",
    answer:
      "Yes, you may. However, the retreat rate will remain the same. Do share your preferences with our friendly hosts in the contact us section and we will be most happy to assist you. Alternatively, you can send an email to hello@thehushretreats.com. with your preferences.",
    active: false,
  },
  {
    question: "Can I request to upgrade my accomodation?",
    answer:
      "Details of the room included in the retreat package can be found in the retreat detail page. Room upgrades are possible upon request (subject to availability), but the fee difference will have to be borne by you. Please reach out to our hosts so we can best accommodate your needs.",
    active: false,
  },
  {
    question: "How many people are there in each retreat?",
    answer:
      "We limit our retreat sizes to 10-20 pax, for the best experience. Retreat group sizes can be discussed for private events and corporations.",
    active: false,
  },
  {
    question: "How do I book a retreat?",
    answer:
      "You can book a retreat by sending us an email here at hello@thehushretreats.com.",
    active: false,
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "All reservations are non-cancellable and non-refundable. Any no shows on the day of the retreat is also non-refundable. However, should an emergency arise, your reservation can be transferred to a friend at least 72 hour prior to the start of the retreat. Please write in to hello@thehushretreats.com so we can make the necessary arrangements.",
    active: false,
  },
];

export default function FAQ(props) {
  const [activeItems, setActiveItems] = useState([]);
  const [FAQItems, setFAQItems] = useState([]);

  useEffect(() => {
    const createFAQItem = (item, idx) => (
      <FAQItem
        key={idx}
        number={String(idx + 1).padStart(2, "0")}
        question={item.question}
        answer={item.answer}
        active={item.active}
        onClick={setActiveItemHandler}
        idx={idx}
      />
    );

    const setActiveItemHandler = (event) => {
      event.preventDefault();
      const clickedIdx = parseInt(event.target.getAttribute("idx"));
      const idx = activeItems.indexOf(clickedIdx);
      const newActiveItems = [...activeItems];

      if (idx !== -1) {
        newActiveItems.splice(idx, 1);
      } else {
        newActiveItems.push(clickedIdx);
      }
      setActiveItems(() => newActiveItems);
    };

    const FAQItemsOutput = FAQItemsList.map((item) => ({
      ...item,
      active: false,
    }));

    for (let itemIdx of activeItems) {
      const activeFAQItem = FAQItemsOutput[itemIdx];
      const newActiveFAQItem = { ...activeFAQItem, active: true };
      FAQItemsOutput.splice(itemIdx, 1, newActiveFAQItem);
    }

    setFAQItems(FAQItemsOutput.map(createFAQItem));
  }, [activeItems]);

  return (
    <div className={props.classes[props.baseClass]} id="faq">
      <Icon
        iconClass={`${props.classes[`${props.baseClass}--icon`]} hidden`}
        iconName="icon-logo-no-words-sm"
      />
      <h2 className={`${props.classes[`${props.baseClass}--title`]} hidden`}>
        Frequently Asked Questions
      </h2>
      <Accordion
        accordionClass={`${props.classes[`${props.baseClass}--accordion`]} hidden`}
        accordionItems={FAQItems}
      />
    </div>
  );
}
