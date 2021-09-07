import React from 'react';
import SectionSite from '../../components/SectionSite';

import {Row, Col } from 'react-bootstrap';

import jprofile from '../../assets/images/jprofile.png';

import { AboutDetails } from './style';

const About = () => {

  return (
    <>
      <SectionSite>
        <AboutDetails className="w-75 mx-auto">
          <Row>
            <h1 className="title">About Me</h1>
          </Row>
          <hr className="separator"/>
          <Row className="justify-content-md-center">
            <Col className="mt-4">
              <p>
                Hello there! My name is Jeison Santiago and I am a software developer specialized in GIS Desktop Applications and scientific data operations.
                At the moment I'm looking for oportunities to improve my knowledge on full stack web development.If you have any cool projects or opportunities, get in touch!
              </p>
            </Col>
            <Col className="mt-4">
              <img className="img-fluid" src={jprofile} alt=""/>
            </Col>
          </Row>
        </AboutDetails>
      </SectionSite>
    </>
  );
}

export default About;