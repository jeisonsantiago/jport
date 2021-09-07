// import { react } from 'react';
import { Row, Col } from 'react-bootstrap';

import { ContainerStyle } from './style';



const WorkExperience = (props) => {
  return (
    <>
      <ContainerStyle>
        <Row>
          <Col md={5}>
            <h2>{props.location}</h2>
            <h3>{props.workDates}</h3>
          </Col>
          <Col>
            <h2 class="jobTitle">{props.jobTitle}</h2>
            
            <div>
              {

                props.taskList.map((item)=>{
                  return (
                    <>
                      <ul>
                        <li>{item}</li>
                      </ul>
                    </>
                  );
                })
              }
            </div>
          </Col>
        </Row>

      </ContainerStyle>
    </>
  );
}

export default WorkExperience;