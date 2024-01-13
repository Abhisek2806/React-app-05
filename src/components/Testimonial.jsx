import React from 'react';
import user from "../assets/user.png"

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard
          name={'Abhisek'}
          feedback={'Your teaching skills are so good'}
        />
        <TestimonialCard
          name={'Suman'}
          feedback={'Your teaching skills are so good'}
        />
        <TestimonialCard
          name={'Ram'}
          feedback={'Your teaching skills are so good'}
        />
      </section>
    </div>
  );
};
const TestimonialCard = ({name,feedback}) => (
  <article>
    <img src={user} alt="User" />
    <h4>{name}</h4>
    <p>{feedback}</p>

  </article>
);
export default Testimonial;
