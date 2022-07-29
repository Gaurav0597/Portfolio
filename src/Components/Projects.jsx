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
      name: 'Indiamart Clone',
      img:
        'https://user-images.githubusercontent.com/95076519/181744956-9935e14f-f6eb-4cd7-8a61-cf5feb7e3167.png',
      gh: 'https://github.com/Sagar160301/IndiaMart',
      url: 'https://heroic-zabaione-a1a115.netlify.app/',
      desc:
        "This is India's largest online marketplace which connects buyers and suppliers (E-commerce website)",
        Feature:"Signin,login, Products Page,Product Ordering page sorting Filtering",
        Responsibility: "Responsible for Navbar,Headers, Footer and some part of Product pages",
      stack: 'React.js, Node.js,Express,Mongodb,Redux, Material UI',
    },
    {
      id: '4',
      name: 'Shoppers Stop Clone',
      img:
        'https://user-images.githubusercontent.com/95076519/181747267-f706243a-784d-408f-b1c8-1f92872fcb3c.png',
      gh: 'https://github.com/Gaurav0597/UNIT4-PROJECT-SHOPPERS-STOP',
      url: 'https://shoppersdemo.netlify.app/',
      desc:
        "This is India's largest E-commerce website deals with Clothing, Accessories,Shoes Jewellery,Cosmetics Health and Beauty products",
        Feature:"Signin,login, Products Page,Product Ordering page sorting Filtering",
        Responsibility: "Responsible for Product pages and Products details Pages",
      stack: 'JavaScript,CSS,Node.js,Express,Mongodb',
    },
    
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
