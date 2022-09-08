import React from "react";
import Text from "../text/Text";
import Heading from "../heading/Heading";
import "./ContentDetail.scss";
import DateTime from "../dateTime/DateTime";
import Category from "../category/Category";

const ContentDetail = () => {
  return (
    <div className="container content-detail-wrap">
      <div className=" content-detail">
        <div className="content-detail-left">
          <div className="content-detail-date">
            {" "}
            <DateTime></DateTime>
            <div className="content-detail-line"></div>
            <p>4 minutes</p>
          </div>
        </div>
        <div className="content-detail-right">
          <div>
            <div className=" content-detail-text">
              {" "}
              <Text className=" gray-color">
                Seamlessly syndicate cutting-edge architectures rather than
                collaborative collaboration and idea-sharing. Proactively
                incubate visionary interfaces whereas premium benefits.
                Seamlessly negotiate ubiquitous leadership skills rather than
                parallel ideas. Dramatically visualize superior interfaces for
                best-of-breed alignments. Synergistically formulate performance
                based users through customized relationships. Interactively
                deliver cross-platform ROI via granular systems. Intrinsicly
                enhance effective initiatives vis-a-vis orthogonal outsourcing.
                Rapidiously monetize market-driven opportunities with
                multifunctional users. Collaboratively enhance visionary
                opportunities through revolutionary schemas. Progressively
                network just in time customer service without real-time
                scenarios.
              </Text>
            </div>

            <div className="content-detail-text">
              <Text className=" gray-color">
                Synergistically drive e-business leadership with unique synergy.
                Compellingly seize market positioning ROI and bricks-and-clicks
                e-markets. Proactively myocardinate timely platforms through
                distributed ideas. Professionally optimize enabled core
                competencies for leading-edge sources. Professionally enhance
                stand-alone leadership with innovative synergy. Rapidiously
                generate backend experiences vis-a-vis long-term high-impact
                relationships. Authoritatively supply market-driven mindshare
                and bricks-and-clicks opportunities. Holisticly create diverse
                innovation through adaptive communities. Efficiently empower
                seamless meta-services with impactful opportunities.
                Distinctively transition virtual outsourcing with focused
                e-tailers.
              </Text>
            </div>

            <div className="content-detail-heading">
              {" "}
              <Heading className="title second-color ">
                “ Monotonectally seize superior mindshare rather than efficient
                technology. ”
              </Heading>
            </div>

            <div className="content-detail-text">
              <Text className=" gray-color">
                Compellingly enhance seamless resources through competitive
                content. Continually actualize 24/365 alignments for
                resource-leveling platforms. Energistically enhance high
                standards in models and professional expertise. Intrinsicly
                iterate extensible metrics for prospective opportunities.
                Continually develop leading-edge experiences through quality
                e-services.
              </Text>
            </div>
          </div>
          <div className="line"></div>


        </div>
      </div>
    </div>
  );
};

export default ContentDetail;
