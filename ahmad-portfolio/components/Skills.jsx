import { useEffect, useRef } from 'react';
import styles from './Skills.module.css';

const skillGroups = [
  {
    category: 'Automation & Control',
    icon: '⚙',
    color: 'var(--accent)',
    skills: [
      { name: 'PLC Programming', level: 85 },
      { name: 'MATLAB / Simulink', level: 90 },
      { name: 'Control Systems Design', level: 88 },
      { name: 'Arduino / Embedded', level: 92 },
    ],
  },
  {
    category: 'Software & AI/ML',
    icon: '◈',
    color: 'var(--accent3)',
    skills: [
      { name: 'Python (AI/ML/DL)', level: 85 },
      { name: 'SolidWorks / AutoCAD', level: 80 },
      { name: 'OpenCV / Computer Vision', level: 75 },
      { name: 'Data Analysis', level: 82 },
    ],
  },
  {
    category: 'Engineering Design',
    icon: '⬡',
    color: 'var(--accent2)',
    skills: [
      { name: 'Robotics & Kinematics', level: 88 },
      { name: '3D Printing & Fabrication', level: 78 },
      { name: 'Pneumatic Systems', level: 80 },
      { name: 'IoT Integration', level: 85 },
    ],
  },
];

const tools = [
  'MATLAB', 'Python', 'SolidWorks', 'AutoCAD', 'Arduino IDE',
  'PLC (FATEK)', 'Simulink', 'Proteus', 'Blynk IoT', 'Webots',
  'Abaqus FEA', 'OpenSim', 'MPLAB X', 'Festo', 'VS Code',
  'C / C++', 'C#', 'SQL', 'HTML/CSS', 'MS Office',
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-level]').forEach(bar => {
              const level = bar.dataset.level;
              setTimeout(() => { bar.style.width = level + '%'; }, 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className={styles.section} ref={sectionRef}>
      <div className="container">
        <p className="section-label">Technical Arsenal</p>
        <h2 className="section-title">
          Core <span className="accent">Competencies</span>
        </h2>

        <div className={styles.grid}>
          {skillGroups.map(group => (
            <div key={group.category} className={`card ${styles.card}`}>
              <div className={styles.cardHeader}>
                <span className={styles.icon} style={{color: group.color}}>{group.icon}</span>
                <h3 className={styles.cardTitle} style={{color: group.color}}>{group.category}</h3>
              </div>
              <div className={styles.skillsList}>
                {group.skills.map(skill => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillTop}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPct} style={{color: group.color}}>{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        data-level={skill.level}
                        style={{width: 0, background: `linear-gradient(90deg, ${group.color}, rgba(0,212,255,0.5))`}}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.toolsSection}>
          <p className={styles.toolsLabel}>
            <span className="mono accent" style={{fontSize:'0.75rem', letterSpacing:'0.2em'}}>// TOOLS & TECHNOLOGIES</span>
          </p>
          <div className={styles.toolsGrid}>
            {tools.map(tool => (
              <span key={tool} className={`tag ${styles.tool}`}>{tool}</span>
            ))}
          </div>
        </div>

        <div className={styles.certs}>
          <p className="section-label">Certifications</p>
          <div className={styles.certGrid}>
            {[
              { title: 'Agile Project Management', org: 'HP Inc.' },
              { title: 'Robotics & Autonomous Systems', org: 'Stanford Engineering' },
              { title: 'Machine Learning & AI', org: 'MindLabs' },
              { title: 'SolidWorks & AutoCAD', org: 'Machinelearning.in.org' },
              { title: 'CNC Coding Complete', org: 'UET Lahore' },
            ].map(c => (
              <div key={c.title} className={styles.cert}>
                <span className={styles.certIcon}>▸</span>
                <div>
                  <p className={styles.certTitle}>{c.title}</p>
                  <p className={styles.certOrg}>{c.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
