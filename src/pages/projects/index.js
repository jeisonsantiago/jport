import React from 'react';
import SectionSite from '../../components/SectionSite';

import { Row, Col } from 'react-bootstrap';

import { ProjectDetails } from './style';

import { } from '../../components/ProjectCard';
import ProjectCard  from '../../components/ProjectCard';

// images
import windtreck_img from '../../assets/images/portifolio/windrose2.png';
import hand_img from '../../assets/images/portifolio/handscreen.png';
import pantilt_img from '../../assets/images/portifolio/pantilt2.png';

const Projects = () => {

  return (
    <>
      <SectionSite>
        <ProjectDetails  className="w-75 mx-auto">

        <Row>
            <h1 className="title">What have I built?</h1>
        </Row>
        <hr className="separator"/>
        <Row>
        <ProjectCard
          kind="C++/Qt Desktop Application"
          title="Wind Trek"
          image={windtreck_img}
          description="A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm."
          tech="VS Code Sublime Text Atom iTerm2 Hyper"
        >
        </ProjectCard>
        </Row>
        <Row>
        <ProjectCard
          kind="C++/Qt Desktop Application"
          title="HAND Model"
          image={hand_img}
          description="A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm."
        >
        </ProjectCard>
        </Row>
        <Row>
        <ProjectCard
          kind="Python CLI Application"
          title="Remote Pan-Tilt"
          image={pantilt_img}
          description="A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm."
        >
        </ProjectCard>
        </Row>

        </ProjectDetails>
      </SectionSite>
    </>
  );
}

export default Projects;