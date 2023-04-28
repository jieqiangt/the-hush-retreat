import { useContext } from "react";
import ModalContext from "../../store/modalContext";
import Banner from "../ui/Banner";
import NewRetreatInfo from "./NewRetreatInfo";

export default function NewRetreatBanner(props) {
  const { retreat, classes, baseClass } = props;
  const { openModal } = useContext(ModalContext);

  const bannerDetails = (
    <NewRetreatInfo
      retreat={retreat}
      onClick={openModal}
      baseClass={baseClass}
      classes={classes}
    />
  );

  return (
    <Banner
      classes={classes}
      baseClass={baseClass}
      title={retreat.title}
      caption={retreat.caption}
      bannerDetails={bannerDetails}
    />
  );
}
