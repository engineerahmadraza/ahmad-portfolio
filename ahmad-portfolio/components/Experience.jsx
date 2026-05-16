import styles from './Experience.module.css';

const experiences = [
  {
    role: 'Mechatronics Engineer',
    company: 'Projexon Engineering Solutions',
    period: 'Aug 2025 – Present',
    location: 'Lahore, Punjab',
    type: 'Full-time',
    color: 'var(--accent)',
    points: [
      'Supporting FMCG & industrial projects focused on automation, utilities, and safety systems',
      'Beverage line expertise: KHS, Sidel, Krones, Tetra Pak production lines',
      'Compressed air network studies and dust collector integration',
      'System upgradation: AC→DC conversions, PLC/HMI retrofits',
    ],
  },
  {
    role: 'Lead Mechatronics Consultant',
    company: 'Fiverr / Freelancer.com',
    period: 'Jan 2023 – Present',
    location: 'Remote — Global',
    type: 'Freelance',
    color: 'var(--accent3)',
    points: [
      'Managed 50+ engineering consultancy projects in robotics, automation, and control systems',
      'Delivered MATLAB simulations, Python AI/ML/DL models, and automated system designs',
      'Created technical documentation for academic and industrial clients worldwide',
      'Maintained 5-star reputation for accuracy, responsiveness, and technical excellence',
    ],
  },
  {
    role: 'Robotics Engineer Intern',
    company: 'Daira Engineering',
    period: 'Jul 2024 – Sep 2024',
    location: 'Johar Town, Lahore',
    type: 'Internship',
    color: 'var(--accent2)',
    points: [
      'Designed assemblies and layouts using SolidWorks and engineering schematics',
      'Conducted 3D printing and fabrication of custom parts for robotic systems',
      'Supported PLC programming, system testing, and industrial automation projects',
    ],
  },
  {
    role: 'Sustainable Energy Engineer Intern',
    company: 'Sun Power Pakistan (Pvt) Ltd',
    period: 'Jun 2024 – Jul 2024',
    location: 'Lahore District',
    type: 'Internship',
    color: 'var(--accent)',
    points: [
      'Assembled and deployed solar panel systems on commercial and residential projects',
      'Contributed to sustainable energy practices and eco-friendly system integration',
    ],
  },
  {
    role: 'Electromechanical Engineer Intern',
    company: 'PCSIR Lahore',
    period: 'Jul 2023 – Sep 2023',
    location: 'Lahore, Punjab',
    type: 'Internship',
    color: 'var(--accent3)',
    points: [
      'Performed quality control tests on mechanical and electrical components',
      'Ensured ISO-compliant evaluation of industrial samples achieving 99.5% accuracy',
      'Collaborated with R&D and production teams to troubleshoot system faults',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <p className="section-label">Career Timeline</p>
        <h2 className="section-title">
          Professional <span className="accent">Experience</span>
        </h2>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.lineCol}>
                <div className={styles.dot} style={{borderColor: exp.color, boxShadow: `0 0 10px ${exp.color}`}} />
                {i < experiences.length - 1 && <div className={styles.line} />}
              </div>
              <div className={`card ${styles.card}`}>
                <div className={styles.cardTop}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company} style={{color: exp.color}}>{exp.company}</p>
                  </div>
                  <div className={styles.meta}>
                    <span className={`tag ${styles.typeTag}`}>{exp.type}</span>
                    <p className="mono" style={{fontSize:'0.7rem', color:'var(--text-dim)', textAlign:'right'}}>
                      {exp.period}
                    </p>
                    <p className="mono" style={{fontSize:'0.65rem', color:'var(--text-dim)', textAlign:'right'}}>
                      📍 {exp.location}
                    </p>
                  </div>
                </div>
                <ul className={styles.points}>
                  {exp.points.map((pt, j) => (
                    <li key={j} className={styles.point}>
                      <span style={{color: exp.color}}>▸</span> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className={styles.education}>
          <p className="section-label">Education</p>
          <div className={`card ${styles.eduCard}`}>
            <div className={styles.eduHeader}>
              <div>
                <h3 className={styles.eduDegree}>BSc. Mechatronics & Control Systems Engineering</h3>
                <p className={styles.eduUni}>University of Engineering & Technology Lahore</p>
                <p className="mono" style={{fontSize:'0.75rem', color:'var(--text-dim)'}}>2021 – 2025 · PEC Level II (Washington Accord)</p>
              </div>
              <div className={styles.eduBadge}>
                <span>OBE</span>
                <span style={{fontSize:'0.6rem', opacity:0.6}}>Accredited</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
