import { useContext } from "react";
import ModalContext from "../../store/modalContext";
import Banner from "../ui/Banner";
import NewRetreatInfo from "./NewRetreatInfo";

export default function NewRetreatBanner(props) {
  const { retreatDetails, classes, baseClass } = props;
  const { openModal } = useContext(ModalContext);

  const bannerDetails = (
    <NewRetreatInfo
      retreatDetails={retreatDetails}
      onClick={openModal}
      baseClass={baseClass}
      classes={classes}
    />
  );

  return (
    <Banner
      classes={classes}
      baseClass={baseClass}
      title={retreatDetails.title}
      caption={retreatDetails.caption}
      bannerDetails={bannerDetails}
    />
  );
}
