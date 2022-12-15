import Image from "next/image";

export default function FeatureBoxItem(props) {
  const scaleFactor = 12.5;

  return (
    <li key={props.title} className="feature-box--item--outer">
      <div className="feature-box--item">
        <Image
          className="feature-box--item--img"
          src={props.imgSrc}
          alt={props.title}
          width={6000 / scaleFactor}
          height={4000 / scaleFactor}
        />
        <h3 className="feature-box--item--title">{props.title}</h3>
        <p className="feature-box--item--desc">{props.desc}</p>
      </div>
    </li>
  );
}

;
