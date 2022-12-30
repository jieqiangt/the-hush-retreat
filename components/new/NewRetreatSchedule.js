import Schedule from "../retreat/Schedule";
import ZLayout from "../ui/ZLayout";

export default function NewRetreatSchedule(props) {
  const scheduleList = [
    {
      timeRange: "0900 - 0930",
      iconName: "icon-logo-words-circular",
      numDots: 4,
      title: "Opening Circle",
    },
    {
      timeRange: "0945 - 1215",
      iconName: "icon-logo-words-circular",
      numDots: 10,
      title: "Release",
      desc: "Breathwork, Embodied Dance Movement, Journalling, Fire Ceremony, Meditation",
    },
    {
      timeRange: "1230 - 1330",
      iconName: "icon-logo-words-circular",
      numDots: 6,
      title: "Lunch @ Tamarind Hill",
      desc: "Vegeterian & non-vegeterain options available.",
    },
    {
      timeRange: "1400 - 1600",
      iconName: "icon-logo-words-circular",
      numDots: 10,
      title: "Renew",
      desc: "Breathwork, Expressive Art, Write A Letter To Yourself, Somatic Movement, Conscious Dreaming",
    },
    {
      timeRange: "1615 - 1645",
      iconName: "icon-logo-words-circular",
      title: "Closing Circle",
    },
  ];

  const content = (
    <Schedule
      scheduleList={scheduleList}
      baseClass={props.baseClass}
      classes={props.classes}
    />
  );

  return (
    <ZLayout
      classes={props.classes}
      baseClass={props.baseClass}
      content={content}
    />
  );
}
