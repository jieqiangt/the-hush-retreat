import ZLayout from "../ui/ZLayout";
import ZLayoutArticle from "../ui/ZLayoutArticle";

export default function Immersive(props) {
  const title = "Immersive";
  const caption =
    "Imbue unique & novel intricacies into your wellness practice";
  const desc =
    "Explore a wide range of multi-dimensional, immersive experiences, from sound to cacao, carefully designed to maximise your practice.";
  const btnText = "Explore More";
  const btnHref = "/explore";

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
