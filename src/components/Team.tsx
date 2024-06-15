import React from 'react';
import Aos from "aos";
import "aos/dist/aos.css";


const Team = () => {
  const supervisors = [
    {
      name: 'Dr. Nalaka Lankasena',
      role: 'Senior Lecturer',
      additionalRole: 'Faculty of Technology, University of Sri Jayewardenepura',
      email: 'nalaka@sjp.ac.lk',
      contact: '(Main Supervisor)',
      image: '/img/team/Dr.Nalaka.jpg'
    },
    {
      name: 'Ms. Madushika Hansamali',
      role: 'Research Assistant',
      additionalRole: 'Faculty of Technology, University of Sri Jayewardenepura',
      email: '',
      contact: '(Co-Supervisor)',
      image: './img/team/Ms.Hansamali.jpeg'
    },
  ];

  const teamMembers = [
    {
      name: 'B.M.P. Dhanawardhana',
      role: 'Software Technology, ICT/19/816',
      email: 'ict19816@fot.sjp.ac.lk',
      contact: '0711130422',
      image: '/img/team/Piumal.jpg',
    },
    {
      name: 'K.A.D. Chalana',
      role: 'Software Technology, ICT/19/810',
      email: 'ict19810@fot.sjp.ac.lk',
      contact: '0754458535',
      image: '/img/team/Chalana.jpg',
    },
    {
      name: 'I.D.S.P. Abeywardana',
      role: 'Software Technology, ICT/19/802',
      email: 'ict19802@fot.sjp.ac.lk',
      contact: '0712303513',
      image: '/img/team/Abewardhana.jpg',
    },
  ];

  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <div style={{ padding: '40px 0' }}>

          {/* Section header */}
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', paddingBottom: '40px' }} data-aos="fade-up">
            <h2 className="text-5xl font-bold mb-4 ">Research Team</h2>
          </div>

          {/* Supervisors */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            {supervisors.map((supervisor, index) => (
              <div
                style={{
                  backgroundColor: 'white',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                  borderRadius: '0.75rem',
                  padding: '20px',
                  marginBottom: '20px',
                  textAlign: 'center',
                  flex: '1 1 300px'
                }}
                key={index}
                data-aos="flip-right"
                data-aos-delay={index * 200}
              >
                <div style={{ marginBottom: '1rem' }}>
                  <img
                    src={supervisor.image}
                    alt={supervisor.name}
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      margin: '0 auto',
                      marginBottom: '1rem',
                    }}
                  />
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#1e3a8a' }}>{supervisor.name}</h4>
                  <p style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '0.5rem' }}>{supervisor.role}</p>
                  <p style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '0.5rem' }}>{supervisor.additionalRole}</p>
                  {supervisor.email && <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{supervisor.email}</p>}
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{supervisor.contact}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Team Members */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            {teamMembers.map((member, index) => (
              <div
                style={{
                  backgroundColor: 'white',
                  boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                  borderRadius: '0.75rem',
                  padding: '20px',
                  marginBottom: '20px',
                  textAlign: 'center',
                  flex: '1 1 300px'
                }}
                key={index}
                data-aos="flip-left"
                data-aos-delay={index * 200}
              >
                <div style={{ marginBottom: '1rem' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      margin: '0 auto',
                      marginBottom: '1rem',
                    }}
                  />
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#1e3a8a' }}>{member.name}</h4>
                  <p style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '0.5rem' }}>{member.role}</p>
                  {member.email && <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{member.email}</p>}
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{member.contact}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Team;
