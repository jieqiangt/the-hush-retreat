export default function ZLayout(props) {
  const { classes, baseClass, content } = props;
  return (
    <section className={classes[baseClass]}>
      <div className={`${classes[`${baseClass}--img`]} hidden`} />
      {content}
    </section>
  );
}
