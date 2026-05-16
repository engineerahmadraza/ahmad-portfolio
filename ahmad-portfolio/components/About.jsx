import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <p className="section-label">Who I Am</p>
            <h2 className="section-title">
              Turning Complex <span className="accent">Engineering</span> Into Reliable Solutions
            </h2>
            <p className={styles.body}>
              I'm a PEC Level II Mechatronics and Control Systems Engineer from UET Lahore, 
              specializing in the intersection of automation, embedded systems, robotics, and AI.
            </p>
            <p className={styles.body}>
              From designing humanoid robots for the textile industry to building predictive ML models 
              for marine water quality, I work across the full engineering stack — hardware, firmware, 
              simulation, and software. Every deliverable is verified, documented, and built to impress.
            </p>
            <p className={styles.body}>
              With 3+ years of freelance consultancy serving students, universities, and industrial clients 
              worldwide, I bring both academic rigor and real-world execution to every project.
            </p>
          </div>

          <div className={styles.right}>
            <div className={styles.panelGrid}>
              {[
                { label: 'Engineering Focus', value: 'Mechatronics & Control', color: 'var(--accent)' },
                { label: 'Affiliation', value: 'UET Lahore · PEC Level II', color: 'var(--accent3)' },
                { label: 'Service Mode', value: 'Remote · Worldwide', color: 'var(--accent2)' },
                { label: 'Languages', value: 'Python · C/C++ · MATLAB', color: 'var(--accent)' },
                { label: 'Industries', value: 'FMCG · Defense · Energy', color: 'var(--accent3)' },
                { label: 'Response Time', value: '< 24 hours', color: 'var(--accent2)' },
              ].map(item => (
                <div key={item.label} className={styles.panelItem}>
                  <p className={styles.panelLabel}>{item.label}</p>
                  <p className={styles.panelValue} style={{color: item.color}}>{item.value}</p>
                </div>
              ))}
            </div>

            <div className={styles.quote}>
              <span className={styles.quoteIcon}>"</span>
              <p className={styles.quoteText}>
                Don't risk late submissions or low grades. Get engineering solutions you can 
                confidently explain in your viva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
