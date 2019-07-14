import React from "react";

import profile from "./yogesh.jpeg";
import { initGA, logPageView } from "./utils/analytics";

class App extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }
  render() {
    return (
      <main>
        <div className="img-container">
          <div className="img-box">
            <img src={profile} alt="yogesh kumar, ykumar, boskysoft" />
          </div>
        </div>
        <div className="intro">Hello, I'm Yogesh Kumar.</div>
        <div className="tagline">
          Solution Architect | Full Stack Dev | Serverless Enthusiast | Cloud
          Fanatic
        </div>
        <div className="about">
          I have a Masters Degree in Computer Applications and React Nanodegree
          from Udacity. I am passionate about building high performance,
          scalable, resilient software systems using opensource technologies and
          have good experience at making production ready applications. I{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://ibosky.blogspot.com/"
          >
            blog
          </a>{" "}
          my learnings sometimes. My most neglected hobbies are photography and
          music.
        </div>
        <br />
        <div className="icons-social">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/yogeshhkumarr"
          >
            <i className="fab fa-linkedin" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kumarryogeshh"
          >
            <i className="fab fa-github" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@yogeshkumarr"
          >
            <i className="fab fa-medium" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/igoy_k"
          >
            <i className="fab fa-twitter" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://stackoverflow.com/users/1022003/yogeshhkumarr"
          >
            <i className="fab fa-stack-overflow" />
          </a>
        </div>
      </main>
    );
  }
}

export default App;
