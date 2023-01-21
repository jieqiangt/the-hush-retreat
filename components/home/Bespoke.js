import ZLayout from "../ui/ZLayout";
import ZLayoutArticle from "../ui/ZLayoutArticle";

export default function Bespoke(props) {
  const title = "Bespoke";
  const caption = "All of us deserve the best";
  const desc =
    "That is why, we curate small-group retreats with end-to-end butler-grade service, to provide you with an transformative wellnessexperience. Your role is to show up, sit back and unwind - we take care of the rest.";
  const btnText = "Book Now";
  const btnHref = "/upcoming";
  const { baseClass, classes } = props;

  const content = (
    <ZLayoutArticle
      classes={classes}
      baseClass={baseClass}
      title={title}
      caption={caption}
      desc={desc}
      btnText={btnText}
      btnHref={btnHref}
    />
  );

  return (
    <ZLayout
      classes={classes}
      baseClass={baseClass}
      content={content}
    />
  );
}
