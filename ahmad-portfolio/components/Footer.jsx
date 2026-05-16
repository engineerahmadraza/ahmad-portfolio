import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} />
      <div className="container">
        <div className={styles.inner}>
          <div>
            <p className={styles.logo}>
              <span style={{color:'rgba(0,212,255,0.5)'}}>{'<'}</span>
              ENG<span style={{color:'var(--accent)'}}>AHMAD</span>
              <span style={{color:'rgba(0,212,255,0.5)'}}>{'/>'}</span>
            </p>
            <p className={styles.tagline}>Mechatronics · Automation · AI/ML</p>
            <p className={styles.location}>📍 Punjab, Pakistan · Remote Worldwide</p>
          </div>
          <div className={styles.links}>
            {['About','Skills','Projects','Experience','Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className={styles.link}>{l}</a>
            ))}
          </div>
          <div className={styles.copy}>
            <p className="mono" style={{fontSize:'0.7rem', color:'var(--text-dim)'}}>
              © 2025 Ahmad Raza. All rights reserved.
            </p>
            <p className="mono" style={{fontSize:'0.65rem', color:'rgba(0,212,255,0.3)', marginTop:'0.3rem'}}>
              Built with Next.js · Deployed on Vercel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
