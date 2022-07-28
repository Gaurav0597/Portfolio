import React from 'react'
import styled from 'styled-components'
import Project from './Project'
import { v4 as uuid } from 'uuid'

export default function Projects() {
  const projectData = [
    {
      id: '1',
      name: 'Event Management Application',
      img: 'https://user-images.githubusercontent.com/95076519/180952001-8071fe6b-feee-4bd5-884a-640552890457.png',
      gh: 'https://github.com/Gaurav0597/Event-Management-System-MERN',
      url: 'https://event-management-app-mern.netlify.app',
      desc:
        'Event-Management-Application-MERN- works and updates the Events records and Participants records also keep track of all Participants and their registration accordingly',
        Feature:"Addition,Deletion of event and Deletion of user by admin ,Registration of events, deletion of event by Participants",
        Responsibility:"An individual project built by me and still working on the same",
      stack: 'React.js, Node.js,Express,Mongodb, Tailwind CSS',
    },
    {
      id: '2',
      name: 'MaxFashion Clone',
      img:
        'https://user-images.githubusercontent.com/95076519/181442531-2256692f-0675-43c5-a0e9-2660a2f34745.png',
      gh: 'https://github.com/Gaurav0597/MaxFashion-Clone-MERN',
      url: 'https://maxfashion-clone-mern-by-gauravpetkar.netlify.app/',
      desc:
       "MaxFashion-Clone-An e-commerce website that deals with Clothing products.",
       Feature:"signin,signup,Products carousel,sort,and filter,user authentication,add to cart Checkout Pages",
       Responsibility: "An individual project built by me and still working on the same",
      stack: 'React.js, Node.js,Express,Mongodb, Tailwind CSS',
    },
    {
      id: '3',
      name: 'Food App',
      img:
        'https://user-images.githubusercontent.com/95076519/165964044-4a1bfe49-a105-4c21-9d79-fe6d29a4b360.png',
      gh: 'https://github.com/Gaurav0597/Food-App-Javascript',
      url: 'https://food-app-henna.vercel.app/',
      desc:
        'Food App',
        Feature:"Food App is provide the random food on home page, Provides special menus also Login and authentication of user name by registering.",
        Responsibility: "It was an Individual Project- Completed in 1 day.",
      stack: 'HTML, CSS, JavaScript, Api',
    },
    /* {
      id: "4",
      name: "Flipkart - clone",
      img: "FK.png",
      gh: "https://github.com/gsunil1996/flipkart_updated",
      url: "https://linkedin-clone-sigma.vercel.app/",
      desc: "Flipkart clone s a collaborative project of four people where we developed functionalities in 6 days.",
      stack: "HTML, CSS, Javascript",
    },*/

    //     { id: "5", name: "Internshala - clone", img: "internshala2.png", gh:"https://github.com/Deependra-Negi/internshala_project", url:"https://pulkit0111.github.io/internshala_project/", desc: "An online internship and training platform. A collaborative project, developed along with 3 team members in 10 days.", stack:"HTML, CSS, JavaScript"}
  ]

  return (
    <Cont id="projects" key={uuid()}>
      <Heading>Projects</Heading>
      <ProjectsCont>
        <Project data={projectData} />
      </ProjectsCont>
    </Cont>
  )
}

const Cont = styled.div`
  box-sizing: border-box;
  background-color: rgb(176, 196, 219);
  margin-top: -105px;
  margin-bottom: -100px;
  padding-bottom: 14vw;
  height: auto;
  clip-path: polygon(
    0 2%,
    /* left top */ 100% 0,
    /* right top */ 100% 98%,
    /* right bottom */ 0 100% /* left bottom */
  );

  @media (max-width: 500px) {
    margin-bottom: -120px;
    padding-bottom: 6vw;
    clip-path: polygon(
      0 2%,
      /* left top */ 100% 0,
      /* right top */ 100% 98%,
      /* right bottom */ 0 100% /* left bottom */
    );
  }

  @media (max-width: 768px) {
    clip-path: polygon(
      0 2%,
      /* left top */ 100% 0,
      /* right top */ 100% 98%,
      /* right bottom */ 0 100% /* left bottom */
    );
  }

  @media only screen and (min-width: 501px) and (max-width: 800px) {
    margin-top: -150px;
  }

  @media only screen and (min-width: 768px) and (max-width: 801px) {
    margin-bottom: -125px;
  }

  @media (max-width: 1264px) {
    clip-path: polygon(
      0 2%,
      /* left top */ 100% 0,
      /* right top */ 100% 98%,
      /* right bottom */ 0 100% /* left bottom */
    );
  }
`
const Heading = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: black;
  padding-top: 5rem;
  text-align: center;
  font-size: 2rem;
`
const ProjectsCont = styled.div`
  margin: 5rem auto 0;
  width: 70vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (max-width: 1264px) {
    margin: 2rem auto 0;
    width: 80vw;
  }
  @media (max-width: 768px) {
    margin: 2rem auto 0;
    width: 90vw;
    padding-bottom: 3rem;
  }
  @media (max-width: 500px) {
    margin: auto;
    width: 90vw;
    padding-bottom: 3rem;
    font-size: 14px;
  }
`
