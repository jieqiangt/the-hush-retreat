import ImgComposition from "../ui/ImgComposition";
import classes from "../../sass/pages/discover.module.scss";

export default function OurFounder() {
  return (
    //     <section className={classes["founder"]}>
    //       <div className={classes["founder--box"]}>
    //         <div className={classes["founder--desc"]}>
    //           <article className={classes["founder--desc--article"]}>
    //             <h2 className={classes["founder--title"]}>Our Founder</h2>
    //             <p>
    //               As a yoga teacher, Mandi believes in the importance of wellness
    //               and mindfulness in our daily lives. Aspiring to create a wellness
    //               community in Singapore and provide an avenue for people who seek
    //               mindful experiences, she started curating bespoke wellness
    //               retreats and events for individuals and corporates, which
    //               eventually led to the founding of The Hush Retreats in 2021.
    //             </p>
    //             <p>
    //               Established with the vision to curate restful spaces for all &
    //               empowering everyone to step away from the hustle of everyday life
    //               and practice to be Here, The Hush Retreats has the far-reaching
    //               mission of ultimately being a platform that connects people by
    //               building a supportive wellness community.
    //             </p>
    //             <p>
    //               Armed with 8 years of experience in the service industry, she
    //               strives to deliver the best service and hospitality in all her
    //               retreats so that you can truly rest, reset and reconnect with
    //               yourself as you go on your personal journey. Rest assured you will
    //               be well taken care of by the team at The Hush Retreats.
    //             </p>
    //           </article>
    //         </div>
    //         <div className={classes["founder--img"]}>
    //           <ImgComposition />
    //         </div>
    //       </div>
    //     </section>
    //   );

    <section className={classes["founder"]}>
      <div className={classes["founder--desc"]}>
        <article className={classes["founder--desc--article"]}>
          <h2 className={classes["founder--title"]}>Our Founder</h2>
          <p>
            As a yoga teacher, Mandi believes in the importance of wellness and
            mindfulness in our daily lives. Aspiring to create a wellness
            community in Singapore and provide an avenue for people who seek
            mindful experiences, she started curating bespoke wellness retreats
            and events for individuals and corporates, which eventually led to
            the founding of The Hush Retreats in 2021.
          </p>
          <p>
            Established with the vision to curate restful spaces for all &
            empowering everyone to step away from the hustle of everyday life
            and practice to be Here, The Hush Retreats has the far-reaching
            mission of ultimately being a platform that connects people by
            building a supportive wellness community.
          </p>
          <p>
            Armed with 8 years of experience in the service industry, she
            strives to deliver the best service and hospitality in all her
            retreats so that you can truly rest, reset and reconnect with
            yourself as you go on your personal journey. Rest assured you will
            be well taken care of by the team at The Hush Retreats.
          </p>
        </article>
      </div>
      <div className={classes["founder--img"]}>
        <ImgComposition />
      </div>
    </section>
  );
}
