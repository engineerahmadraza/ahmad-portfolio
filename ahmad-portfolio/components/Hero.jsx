import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Particle system
    const particles = [];
    const count = 60;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${(1 - dist / 150) * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <canvas ref={canvasRef} className={styles.canvas} />

      {/* Corner decorations */}
      <div className={styles.cornerTL} />
      <div className={styles.cornerTR} />
      <div className={styles.cornerBL} />
      <div className={styles.cornerBR} />

      {/* Status bar */}
      <div className={styles.statusBar}>
        <span className="glow-dot green" style={{marginRight:'0.5rem'}} />
        <span className="mono" style={{fontSize:'0.7rem', color:'var(--accent3)', letterSpacing:'0.2em'}}>SYSTEM ONLINE</span>
        <span style={{margin:'0 1rem', color:'var(--text-dim)'}}>|</span>
        <span className="mono" style={{fontSize:'0.7rem', color:'var(--text-dim)', letterSpacing:'0.1em'}}>ENG.AHMAD.RAZA.v2025</span>
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.left}>
          <p className={`animate-fade-up delay-1 ${styles.greeting}`}>
            <span className="mono accent">// mechatronics_engineer.init()</span>
          </p>

          <h1 className={`animate-fade-up delay-2 ${styles.title}`}>
            <span className={styles.titleSmall}>Engineer</span>
            <br />
            <span className={styles.titleBig}>
              Ahmad
              <span className={styles.titleAccent}> Raza</span>
            </span>
          </h1>

          <div className={`animate-fade-up delay-3 ${styles.tagline}`}>
            <span className={styles.taglineItem}>Industrial Automation</span>
            <span className={styles.taglineDot}>◆</span>
            <span className={styles.taglineItem}>Control Systems</span>
            <span className={styles.taglineDot}>◆</span>
            <span className={styles.taglineItem}>Embedded Systems</span>
          </div>

          <p className={`animate-fade-up delay-4 ${styles.bio}`}>
            PEC Level II Mechatronics Engineer from UET Lahore. Specializing in
            robotics, PLC automation, MATLAB simulations, and AI/ML engineering solutions.
            Delivering industry-grade work for students, researchers, and companies worldwide.
          </p>

          <div className={`animate-fade-up delay-5 ${styles.ctas}`}>
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-secondary">Hire Me</a>
          </div>

          <div className={`animate-fade-up delay-6 ${styles.stats}`}>
            {[
              { val: '50+', label: 'Projects Delivered' },
              { val: '3+', label: 'Years Freelancing' },
              { val: '99.5%', label: 'QC Accuracy' },
            ].map(s => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statVal}>{s.val}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`animate-fade-up delay-3 ${styles.right}`}>
          <div className={styles.hologram}>
            <div className={styles.hologramRing} />
            <div className={styles.hologramRing2} />
            <div className={styles.hologramCore}>
              <svg viewBox="0 0 200 200" className={styles.gearSvg}>
                <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(0,212,255,0.2)" strokeWidth="1"/>
                <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(0,212,255,0.3)" strokeWidth="0.5"/>
                <circle cx="100" cy="100" r="20" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.5)" strokeWidth="1"/>
                {[0,45,90,135,180,225,270,315].map(a => (
                  <line key={a}
                    x1={100 + 42 * Math.cos(a * Math.PI/180)}
                    y1={100 + 42 * Math.sin(a * Math.PI/180)}
                    x2={100 + 62 * Math.cos(a * Math.PI/180)}
                    y2={100 + 62 * Math.sin(a * Math.PI/180)}
                    stroke="rgba(0,212,255,0.4)" strokeWidth="2"
                  />
                ))}
                <text x="100" y="95" textAnchor="middle" fill="rgba(0,212,255,0.8)"
                  fontFamily="Share Tech Mono" fontSize="8" letterSpacing="2">MECHATRONICS</text>
                <text x="100" y="108" textAnchor="middle" fill="rgba(0,212,255,0.5)"
                  fontFamily="Share Tech Mono" fontSize="6" letterSpacing="1">ENGINEER</text>
                {[0,60,120,180,240,300].map((a,i) => (
                  <circle key={i}
                    cx={100 + 60 * Math.cos(a * Math.PI/180)}
                    cy={100 + 60 * Math.sin(a * Math.PI/180)}
                    r="3" fill="rgba(0,212,255,0.6)"
                  />
                ))}
              </svg>
            </div>
          </div>

          <div className={styles.specPanel}>
            {[
              ['Platform', 'UET Lahore · PEC L2'],
              ['Specialization', 'Mechatronics'],
              ['Status', 'Available'],
              ['Location', 'Punjab, Pakistan'],
            ].map(([k, v]) => (
              <div key={k} className={styles.specRow}>
                <span className={styles.specKey}>{k}</span>
                <span className={styles.specVal}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a href="#about" className={styles.scrollDown}>
        <span className="mono" style={{fontSize:'0.65rem',color:'var(--text-dim)',letterSpacing:'0.2em'}}>SCROLL</span>
        <div className={styles.scrollArrow}>↓</div>
      </a>
    </section>
  );
}
