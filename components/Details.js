import React from "react";

function Details() {
  return (
    <div className="right">
      <p className="hi">HI!</p>
      <p className="intro">
        I am a front-end web developer, I have over 4~6 months experience
        developing website, aplication with react and react native. I’m focused
        on turning ideas into delightful.
      </p>
      <p className="skill">
        <span className="head">Skill</span>
        <ul>
          <li>React, Redux, NextJs, Tslint.</li>
          <li>Node.js, ExpressJs.</li>
          <li>Style-JSX, Styled-components, Bootstrap.</li>
          <li>SEO audits.</li>
          <li>GIT, Yarn, NPM, VSCode, Trello, Dev Azure Microsoft.</li>
          <li>Portal Azure, Heroku.</li>
        </ul>
      </p>
      <div className="edu">
        <span className="head">EDUCATION</span>
        <p>
          Studied Software Engineering at Van Lang University that transferred
          from Carnegie Mellon University, US.
        </p>
        <p>Studied MERN stack at CyberSoft Academy</p>
      </div>
      <div className="project">
        <span className="head">Project</span>
        <p className="project_name">
          <a href="https://clubvanlanguniversity.z22.web.core.windows.net/">
            Club
          </a>
        </p>
        <p className="role">Software Engineering</p>
        <p className="time">May 2020 - Aug 2020 · 4 months</p>

        <ul>
          <li>
            <span className="des">Description:</span> Website for those who
            share an interest in giving hobbies club exchange and organization
            events. (As Group Facebook)
          </li>
          <li>
            <span className="des">Build API:</span> With Node.js, ExpressJS,
            MongoDB, Mongoose, JWT, Cloudinary
          </li>
          <li>
            <span className="des">Build user interface:</span> React, Redux,
            Bootstrap{" "}
          </li>
          <li>
            <span className="des"> Control Source code:</span> GitHub, Developer
            Azure Microsoft{" "}
          </li>
          <li>
            <span className="des">Deploy:</span> Portal Azure Microsoft{" "}
          </li>
        </ul>

        <p className="project_name">XEDIKE</p>
        <p className="role">MERN stack developer</p>
        <p className="time">Jun 2019 - Oct 2019 · 4 months</p>

        <ul>
          <li>
            <span className="des">Description:</span> Website for users to share
            a car when sharing the journey
          </li>
          <li>
            <span className="des">Build API:</span> With Node.js, ExpressJS,
            MongoDB, Mongoose, JWT
          </li>
          <li>
            {" "}
            <span className="des">Build user interface:</span> React, Redux,
            Bootstrap{" "}
          </li>
          <li>
            {" "}
            <span className="des">Control Source code:</span> GitHub{" "}
          </li>
        </ul>
      </div>
      <div className="hob">
        <span className="head">OTHER SKILLS & HOBBIES</span>
        <p className="head">Other skills</p>
        <ul>
          <li>Teamwork and cooperation</li>
          <li>Ability to work under pressure with time constraints</li>
        </ul>
        <div className="head">Hobbies</div>
        <ul>
          <li>Coding, swimming, playing football, and traveling</li>
        </ul>
      </div>
    </div>
  );
}

export default Details;
