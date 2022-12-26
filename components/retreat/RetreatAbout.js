export default function RetreatAbout(props) {
  return (
    <section className={props.classes["about"]}>
      <div className={props.classes["about--img"]} />
      <div className={props.classes["about--article"]}>
        <div className={props.classes["about--article--box"]}>
          <h2 className={props.classes["about--article--title"]}>{props.title}</h2>
          <article className={props.classes["about--article--desc"]}>
            {props.article.map((item) => (
              <p>{item}</p>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
}
