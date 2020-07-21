import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter"
import InstagramIcon from "@material-ui/icons/Instagram"
// import GitlabIcon from "@material-ui/icons/gitla"
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { LINKEDIN_LINK, GITHUB_LINK, EMAIL_ADDRESS, TWITTER_LINK, GITLAB_LINK, INSTAGRAM_LINK } from "../path";

const AppFooter = () => {
  return (
    <footer className=" pt-5 pb-2 bg-gray-800 text-white">
      <div className="container mx-auto ">
        <div className="flex flex-col items-center justify-around">
          {/* External link group*/}
          <div className="w-64 mb-3">
            {/* LinkedIN */}
            <div className="flex justify-around ">
              <div className="rounded-full h-8 w-8 flex items-center justify-center bg-white ">
                <a
                  href={LINKEDIN_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon color="primary" />
                </a>
              </div>
              {/* Github */}
              <div className="rounded-full h-8 w-8 flex items-center justify-center bg-white">
                <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon color="primary" />
                </a>
              </div>
              {/* Twitter */}
              <div className="rounded-full h-8 w-8 flex items-center justify-center bg-white">
                <a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer">
                  <TwitterIcon color="primary" />
                </a>
              </div>
              {/* Gitlab
              <div className="rounded-full h-8 w-8 flex items-center justify-center bg-white">
                <a href={GITLAB_LINK} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon color="primary" />
                </a>
              </div> */}
              {/* Instagram */}
              <div className="rounded-full h-8 w-8 flex items-center justify-center bg-white">
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
                  <InstagramIcon color="primary" />
                </a>
              </div>
              {/* Email */}
              <div className="rounded-full h-8 w-8 flex items-center justify-center bg-white">
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MailOutlineIcon color="primary" />
                </a>
              </div>
            </div>
          </div>
          <span className="text-gray-500 text-center ">
            HyperMarket By <a href="https://linkedin.com/in/khanna98">Mayank Khanna</a>, ©2020. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
