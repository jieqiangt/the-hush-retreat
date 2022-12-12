import Image from "next/image";

export default function FeatureItem(props) {
  const scaleFactor = 12.5;

  return (
    <li key={props.title} className="feature--item--outer">
      <div className="feature--item">
        <Image
          className="feature--item--img"
          src={props.imgSrc}
          alt={props.title}
          width={6000 / scaleFactor}
          height={4000 / scaleFactor}
        />
        <h3 className="feature--item--title">{props.title}</h3>
        <p className="feature--item--desc">{props.desc}</p>
      </div>
    </li>
  );
}

;
