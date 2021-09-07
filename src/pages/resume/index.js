import React, { useEffect, useState } from 'react';
import SectionSite from '../../components/SectionSite';
import WorkExperience from '../../components/WorkExperience';

import { Row, Col } from 'react-bootstrap';

import { ResumeStyle } from './style';

import workExperienceList from '../../data/work_experience.json';

const Resume = () => {

  const [listJobs, setlistJobs] = useState([]);

  useEffect(() => {
    var list = [];

    workExperienceList.WorkExperience.forEach((item) => {
      list.push(item);
      // console.log(item);   
    });

    setlistJobs(list);
  }, []);

  // console.log(workExperienceList.WorkExperience);
  // console.log(JSON.parse(workExperienceList.WorkExperience));

  // load list


  return (
    <>
      <SectionSite>
        <ResumeStyle className="w-75 mx-auto">

          <Row>
            <h1 className="title">Work Experiences</h1>
          </Row>
          <hr className="separator" />

          {
            workExperienceList.WorkExperience.map((item) => {
              return (
                <>
                  <WorkExperience
                    location={item.location}
                    jobTitle={item.job_title}
                    workDates={item.dates}
                    taskList={item.task_list}
                  />
                </>
              );
            })
          }
        </ResumeStyle>
      </SectionSite>
    </>
  );
}

export default Resume;