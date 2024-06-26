import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="p-8 bg-gray-100">
      <h2 className="text-3xl mb-4">Work Experience</h2>
      <div className="mb-4">
        <h3 className="text-2xl">Assistant Co-ordinator</h3>
        <p>Konnexions, Bhubaneswar (08/2021 - Present)</p>
        <ul className="list-disc ml-6">
          <li>Organized tech events</li>
          <li>Lead multiple teams</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-2xl">Volunteer</h3>
        <p>National Service Scheme, KIIT Bureau (08/2022 - Present)</p>
        <ul className="list-disc ml-6">
          <li>Creative team leader</li>
          <li>Conducted awareness programs and rallies</li>
          <li>Donated blood at multiple health camps</li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl">Graphic Designer Lead</h3>
        <p>Little Paws Care, INDIA (10/2021 - Present)</p>
        <ul className="list-disc ml-6">
          <li>Conducted recruitment drives</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
