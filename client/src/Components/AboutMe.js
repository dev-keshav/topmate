import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

function AboutMe() {
    const [listData, setlistData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/v1/api/profileListData")
    .then((response) => response.json())
    .then((data) => setlistData(data))
    .catch((error) => console.error("Error fetching data:", error))
  }, [])

  return (
    <div className="about_div">
      <h1>About me</h1>
      <div className="social_icons">
        <InstagramIcon className="icon" />
      </div>
      <div className="social_icons">
        <LinkedInIcon className="icon" />
      </div>
      <div className="social_icons">
        <GitHubIcon className="icon" />
      </div>
      <div className="social_icons">
        <LanguageIcon className="icon" />
      </div>
      <div>
        <p className="about_para">
        <ul>
            {listData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
