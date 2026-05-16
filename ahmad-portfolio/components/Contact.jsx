import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">
          Start a <span className="accent">Project</span>
        </h2>

        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.pitch}>
              <div className={`glow-dot ${styles.pitchDot}`} />
              <h3 className={styles.pitchTitle}>PROFESSIONAL EXPERT</h3>
            </div>
            <p className={styles.pitchText}>
              When results matter, guesswork is not an option. I deliver industry-level solutions 
              for students, researchers, and engineers who demand accuracy, clarity, and fully 
              functional simulations — no shortcuts, no trial-and-error.
            </p>

            <div className={styles.offerings}>
              {[
                'Structurally organized, professional code',
                'Verified simulations that actually work',
                'Step-by-step explanations for every block & equation',
                'Work that impresses professors, clients, and peers',
              ].map(o => (
                <div key={o} className={styles.offering}>
                  <span className={styles.offeringIcon} style={{color:'var(--accent3)'}}>✓</span>
                  <span>{o}</span>
                </div>
              ))}
            </div>

            <div className={styles.audience}>
              <p className="mono" style={{fontSize:'0.7rem', color:'var(--accent)', letterSpacing:'0.2em', marginBottom:'0.75rem'}}>
                // PERFECT FOR
              </p>
              {[
                'Engineering Students (Mechatronics, Electrical, Mechanical)',
                'Final Year Projects (FYP) & Research',
                'University Assignments & Coursework',
                'Industrial clients requiring technical solutions',
              ].map(a => (
                <div key={a} className={styles.audienceItem}>
                  <span style={{color:'var(--accent2)'}}>▸</span>
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <div className={`corner-box ${styles.contactBox}`}>
              <h3 className={styles.contactTitle}>Contact Channels</h3>

              <div className={styles.contactLinks}>
                <a href="https://wa.me/923453469979" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                  <div className={styles.contactIcon} style={{borderColor:'rgba(0,255,136,0.3)', color:'var(--accent3)'}}>
                    💬
                  </div>
                  <div>
                    <p className={styles.contactLabel}>WhatsApp</p>
                    <p className={styles.contactValue}>+92 345 3469979</p>
                  </div>
                  <span className={styles.contactArrow}>↗</span>
                </a>

                <a href="mailto:engrahmadraza.3@gmail.com" className={styles.contactItem}>
                  <div className={styles.contactIcon} style={{borderColor:'rgba(0,212,255,0.3)', color:'var(--accent)'}}>
                    ✉
                  </div>
                  <div>
                    <p className={styles.contactLabel}>Email</p>
                    <p className={styles.contactValue}>engrahmadraza.3@gmail.com</p>
                  </div>
                  <span className={styles.contactArrow}>↗</span>
                </a>

                <a href="https://www.linkedin.com/in/engineerahmadraza" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                  <div className={styles.contactIcon} style={{borderColor:'rgba(0,212,255,0.3)', color:'var(--accent)'}}>
                    in
                  </div>
                  <div>
                    <p className={styles.contactLabel}>LinkedIn</p>
                    <p className={styles.contactValue}>engineerahmadraza</p>
                  </div>
                  <span className={styles.contactArrow}>↗</span>
                </a>

                <a href="https://www.fiverr.com/s/kL4b1vL" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                  <div className={styles.contactIcon} style={{borderColor:'rgba(255,107,0,0.3)', color:'var(--accent2)'}}>
                    F
                  </div>
                  <div>
                    <p className={styles.contactLabel}>Fiverr</p>
                    <p className={styles.contactValue}>View my gigs ↗</p>
                  </div>
                  <span className={styles.contactArrow}>↗</span>
                </a>

                <a href="https://www.facebook.com/share/17oqwwBEke/" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                  <div className={styles.contactIcon} style={{borderColor:'rgba(0,212,255,0.3)', color:'var(--accent)'}}>
                    f
                  </div>
                  <div>
                    <p className={styles.contactLabel}>Facebook</p>
                    <p className={styles.contactValue}>Ahmad Raza — Engineer</p>
                  </div>
                  <span className={styles.contactArrow}>↗</span>
                </a>
              </div>

              <div className={styles.availability}>
                <span className="glow-dot green" />
                <span className="mono" style={{fontSize:'0.75rem', color:'var(--accent3)', letterSpacing:'0.1em'}}>
                  AVAILABLE FOR NEW PROJECTS — Remote Support Worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
