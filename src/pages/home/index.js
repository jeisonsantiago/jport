import React from 'react';
import SectionSite from '../../components/SectionSite';
import { HomeDetails } from './style';

const Home = () => {

  return (
    <>
      <SectionSite>
        <HomeDetails className="w-75 mx-auto">
          <div>
            <p class="hitext">Hi, my name is</p>
            <h1 class="name">Jeison Santiago.</h1>
            <h1 class="craft" >Applications for the web and beyond.</h1>
          </div>
          <hr class="separator" />
          <div class="decription">
            I'm a software developer based in Edmonton - AB, specializing in Qt/C++ framework, GIS application development,
            setting my foot on building apps for the web.
          </div>
        </HomeDetails>
      </SectionSite>
    </>
  );
}

export default Home;