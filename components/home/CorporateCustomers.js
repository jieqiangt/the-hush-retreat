import Icon from "../ui/Icon";

export default function CorporateCustomers(props) {
  const { baseClass, classes } = props;
  return (
    <section className={classes[baseClass]}>
      <aside className={classes[`${baseClass}--clients`]}>
        <h3 className={classes[`${baseClass}--title`]}>Corporate Clients</h3>
        <div className={classes[`${baseClass}--icons`]}>
          <Icon
            iconClass={`${classes[`${baseClass}--icon`]} ${
              classes[`${baseClass}--icon--accenture`]
            } hidden`}
            iconName="icon-accenture"
          />
        </div>
      </aside>
      <aside className={classes[`${baseClass}--partners`]}>
        <h3 className={classes[`${baseClass}--title`]}>Wellness Partners</h3>
        <div className={classes[`${baseClass}--icons`]}>
          <Icon
            iconClass={`${classes[`${baseClass}--icon`]} hidden`}
            iconName="icon-oasia"
          />
          <Icon
            iconClass={`${classes[`${baseClass}--icon`]} hidden`}
            iconName="icon-raffles"
          />
          <Icon
            iconClass={`${classes[`${baseClass}--icon`]} ${
              classes[`${baseClass}--icon--tamarind`]
            } hidden`}
            iconName="icon-tamarind-hill"
          />
          <Icon
            iconClass={`${classes[`${baseClass}--icon`]} ${
              classes[`${baseClass}--icon--samadhi`]
            } hidden`}
            iconName="icon-samadhi"
          />
          <Icon
            iconClass={`${classes[`${baseClass}--icon`]} ${
              classes[`${baseClass}--icon--hummingbird`]
            } hidden`}
            iconName="icon-hummingbird"
          />
        </div>
      </aside>
    </section>
  );
}
