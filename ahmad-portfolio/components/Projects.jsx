import styles from './Projects.module.css';

const projects = [
  {
    id: '01',
    title: 'Humanoid Fashion Robot',
    subtitle: 'Final Year Project — Industry Sponsored',
    client: 'Ahmad Jamal Textiles',
    desc: 'Designed, built, and optimized a humanoid robot to automate fashion display with 95% gait-cycle precision. Integrated embedded systems, biomedical sensing, and mechatronic actuation.',
    tags: ['Robotics', 'Embedded Systems', 'Control', 'SolidWorks', 'Arduino'],
    highlight: 'var(--accent)',
    metric: '95% Gait Precision',
  },
  {
    id: '02',
    title: 'Marine Water Quality Analyzer',
    subtitle: 'Research Tool — Python GUI',
    client: 'Collaborative Research',
    desc: 'Python-based GUI for marine water quality analysis integrating statistical methods, time-series forecasting, and machine learning models for predictive environmental monitoring.',
    tags: ['Python', 'ML', 'Time Series', 'Tkinter', 'Data Analysis'],
    highlight: 'var(--accent3)',
    metric: 'Real-time Prediction',
  },
  {
    id: '03',
    title: 'Crypto Price Prediction System',
    subtitle: 'Multi-horizon Forecasting',
    client: 'University Project',
    desc: 'Built using real-time APIs, 20+ technical indicators, and Random Forest models achieving 60–75% directional accuracy for automated trading insights.',
    tags: ['Python', 'Random Forest', 'API', 'Finance', 'ML'],
    highlight: 'var(--accent2)',
    metric: '75% Directional Accuracy',
  },
  {
    id: '04',
    title: 'IoT Pneumatic Stamping Machine',
    subtitle: 'Industrial Automation',
    client: 'UET Lahore',
    desc: 'Developed an IoT-enabled pneumatic stamping machine with Blynk, achieving 95% consistency, 80% labor reduction, and 70% sustainable material usage.',
    tags: ['IoT', 'Blynk', 'Pneumatics', 'PIC18', 'Automation'],
    highlight: 'var(--accent)',
    metric: '80% Labor Reduction',
  },
  {
    id: '05',
    title: 'Arduino-MATLAB Radar System',
    subtitle: 'Defense Signal Processing',
    client: 'Defense System Project',
    desc: 'Engineered a low-cost radar achieving 97% object detection accuracy with real-time MATLAB visualization and precision servo control for target tracking.',
    tags: ['Arduino', 'MATLAB', 'Signal Processing', 'Servo Control'],
    highlight: 'var(--accent3)',
    metric: '97% Detection Accuracy',
  },
  {
    id: '06',
    title: 'Chocolate Melter QA Analysis',
    subtitle: 'Root Cause Analysis',
    client: 'Magnum — Unilever Walls',
    desc: 'Conducted root cause analysis of short-circuit failures in production machinery, implemented corrective actions, and ensured ISO safety and quality compliance.',
    tags: ['QA', 'Root Cause Analysis', 'ISO', 'Electrical', 'Safety'],
    highlight: 'var(--accent2)',
    metric: 'ISO Compliant',
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <p className="section-label">Engineering Portfolio</p>
        <h2 className="section-title">
          Featured <span className="accent">Projects</span>
        </h2>

        <div className={styles.grid}>
          {projects.map(p => (
            <div key={p.id} className={`${styles.card} corner-box`}>
              <div className={styles.cardTop}>
                <span className={styles.id} style={{color: p.highlight}}>#{p.id}</span>
                <span className={styles.metric} style={{borderColor: p.highlight, color: p.highlight}}>
                  {p.metric}
                </span>
              </div>
              <div className={styles.clientRow}>
                <span className="mono" style={{fontSize:'0.7rem', color:'var(--text-dim)', letterSpacing:'0.15em'}}>
                  CLIENT: {p.client.toUpperCase()}
                </span>
              </div>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.subtitle}>{p.subtitle}</p>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.tags}>
                {p.tags.map(t => (
                  <span key={t} className="tag" style={{borderColor: `${p.highlight}40`, color: p.highlight}}>
                    {t}
                  </span>
                ))}
              </div>
              <div className={styles.accent} style={{background: p.highlight}} />
            </div>
          ))}
        </div>

        <div className={styles.freelance}>
          <div className={styles.freelanceContent}>
            <div>
              <p className="section-label">Freelance Track Record</p>
              <h3 className={styles.freelanceTitle}>50+ Projects Delivered on Fiverr & Freelancer.com</h3>
              <p className={styles.freelanceDesc}>
                Covering robotics, control systems, MATLAB simulations, Python AI/ML, 
                technical documentation, and engineering consultancy for academic and industrial clients globally.
              </p>
            </div>
            <div className={styles.freelanceLinks}>
              <a href="https://www.fiverr.com/s/kL4b1vL" target="_blank" rel="noopener noreferrer" className="btn-primary">
                View Fiverr Profile ↗
              </a>
              <a href="https://www.linkedin.com/in/engineerahmadraza" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
