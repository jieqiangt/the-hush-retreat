import ZLayout from "../ui/ZLayout";
import ZLayoutArticle from "../ui/ZLayoutArticle";

export default function Mindfulness(props) {
  const title = "Mindfulness";
  const caption = "Step away from the chatter & stresses of everyday life";
  const desc =
    "Based on our unique philosophy, we aim to provie you with a sanctuary to rest your mind, nourish your body, and practice mindfulness.";
  const btnText = "Discover More";
  const btnHref = "/discover";

  const content = (
    <ZLayoutArticle
      classes={props.classes}
      baseClass={props.baseClass}
      title={title}
      caption={caption}
      desc={desc}
      btnText={btnText}
      btnHref={btnHref}
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
