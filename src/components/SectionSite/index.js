// import { react } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MainContent } from './style';

const SectionSite = ({ title, children }) => {
  return (
    <>
      <Container >
        <Row>
          <MainContent>
            <div>
            <h1>{title}</h1>
            {children}
            </div>
          </MainContent>
        </Row>
      </Container>

    </>
  );
}

export default SectionSite;