import teamImage1 from "../assets/images/teamImage1.png";
import teamImage2 from "../assets/images/teamImage2.png";
import teamImage3 from "../assets/images/teamImage3.png";
import teamImage4 from "../assets/images/teamImage4.png";
import {
  teamSectionWrapper,
  teamSectionMemberList,
  teamSectionTitle,
  teamSectionCart,
  teamSectionCartName,
  teamSectionCartTitle,
  teamSectionIcon,
  teamSectionCartDate,
} from "../helpers/style";

import { CiTwitter, CiYoutube } from "react-icons/ci";

const teamMembers = [
  {
    img: teamImage1,
    name: "Jennifer Smith",
    title: "Jennifer Smith",
    date: "Joined July 2020",
  },
  {
    img: teamImage2,
    name: "Kevin Stone",
    title: "Jennifer Smith",
    date: "Joined Feb 2020",
  },
  {
    img: teamImage3,
    name: "kevin Smith",
    title: "Jennifer Smith",
    date: "Joined Mar 2020",
  },
  {
    img: teamImage4,
    name: "Jennifer stone",
    title: "Jennifer Smith",
    date: "Joined June 2020",
  },
];

const TeamSection = () => {
  const memberList = teamMembers.map((member, index) => (
    <div key={index} style={teamSectionCart}>
      <img src={member.img} alt="" />
      <h4 style={teamSectionCartName}>{member.name}</h4>
      <p style={teamSectionCartTitle}>{member.title}</p>
      <div>
        <span>
          {" "}
          <a href="#" style={teamSectionIcon}>
            {" "}
            <CiTwitter />{" "}
          </a>{" "}
        </span>
        <span>
          {" "}
          <a href="#" style={teamSectionIcon}>
            {" "}
            <CiYoutube />{" "}
          </a>{" "}
        </span>
      </div>
      <p style={teamSectionCartDate}>{member.date}</p>
    </div>
  ));

  return (
    <section style={teamSectionWrapper}>
      <h3 style={teamSectionTitle}>Our Amazing Team</h3>
      <div style={teamSectionMemberList}>{memberList}</div>
    </section>
  );
};
export default TeamSection;
