import React from 'react';
import { Carousel } from 'react-bootstrap';

class Author extends React.Component {
  render() {
    const { name, image, description } = this.props;

    return (
      <div>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    );
  }
}

class AboutUs extends React.Component {
  render() {
    const authors = [
      {
        name:'Dasha Burgos',
        image:'/images/dashaHeadshot.png',
        description: 'Dasha Burgos is a veteran who has been working in IT for several years. Despite her success in the field, she has always had a passion for coding and software development. She made the decision to attend a fullstack software development bootcamp to pursure her dream of becoming a software developer.  She applied her military experience to her studies and excelled in the program.  She is now a fullstack developer with a passion for creating dynamic and interactive user interfaces.  She is excited to continue her journey as a software developer and is looking forward to the challenges that lie ahead.',
      },
      {
        name: 'Alex Carr',
        image: '/images/alexHeadshot.png',
        description:
          'After serving in the US Navy for 8 years where I was a leading supervisor for over 90 sailors and provided technical expertise support. To now taking technical support to another level, following a long-lost dream of computers and their make-up. The under-lining language behind the finished product of any technology has always been something that really intrigued my interest. Being a Dev has allowed me to move into the direction of understanding and not only has it dressed an open wound, but it has actually showed me that there really is not a wound at all. Every Role that I am blessed to fulfil I do so at the highest of standards and leave absolutely no doubts of prosperity.',
      },
      {
        name: 'Nicholas Brown',
        image: '/images/nickHeadshot.png',
        description:
          'My name is Nick Brown.  I am a software developer residing in Arkansas with my wife and children on our homestead. I have a specialized technical background as a military helicopter pilot and flight engineer. I am thus highly skilled in kinetic environment prioritization, adaptation, and problem solving.',
      },
      {
        name: 'Ryan Eastman',
        image: '/images/ryanHeadshot.png',
        description:
          'My name is Ryan Eastman. I am a software developer currently living in the panhandle of Idaho. I am a United States Navy veteran and use my experience as a leader to help my team succeed. I am passionate about learning new technologies and applying them to real world problems. I am excited to be a part of the Surfing America team and look forward to the challenges that lie ahead.'
      },
    ];

    return (
      <div>
        <h1>About Us</h1>
        <p>
          Welcome to Surfing America! Our team is dedicated to providing high-quality solutions to our clients.
          Our mission is to create the ideal surfing environment for our clients by providing them with a private location where they can schedule surfing sessions.
        </p>
        <p>
          Our team is composed of experienced developers with a passion for technology. We use the latest tools and techniques to ensure that our projects are of the highest quality. We believe that collaboration is key to success, and we work closely with our clients to understand their needs and goals.
        </p>
        <p>
          If you have any questions or would like to learn more about our services, please don't hesitate to contact us.
          We look forward to hearing from you!
        </p>

        <h2>Meet Our Team</h2>
        <Carousel>
          {authors.map((author) => (
            <Carousel.Item key={author.name}>
              <Author name={author.name} image={author.image} description={author.description} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default AboutUs;