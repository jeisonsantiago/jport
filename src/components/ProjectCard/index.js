// import { react } from 'react';
import { Row, Col } from 'react-bootstrap';

import { ContainerStyle } from './style';

const ProjectCard = (props) => {
  return (
    <>
      <ContainerStyle>
        <Row>
          {/* <Col md={4}> */}
          {/* <div className="overlayImg">
            <img className="img-fluid" src={props.image} alt="" />
            </div> */}
          <Col>
          <a href="#">
          <img className="img-fluid" src={props.image} alt="" />
          <div class="overlayImg">
          </div>
          </a>
          </Col>
            
          
          <Row className="kind">
            <h1>{props.kind}</h1>
          </Row>

          <Row className="titleProject">
            <a href="#">
              <h1>{props.title}</h1>
            </a>
          </Row>
          <Row>
          <Col md={5}></Col>
          <Col md={7} className="description">
            <p>{props.description}</p>
          </Col>
          </Row>
          <Row className="tech">
            <p>{props.tech}</p>
          </Row>

        </Row>
      </ContainerStyle>
    </>
  );
}

export default ProjectCard;