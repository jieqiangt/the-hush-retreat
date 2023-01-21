export default function Accordion(props) {
  const { accordionItems, accordionClass } = props;
  return <div className={accordionClass}>{accordionItems}</div>;
}
