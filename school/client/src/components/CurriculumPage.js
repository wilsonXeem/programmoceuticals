import React, { useState } from 'react';

const CurriculumPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      color: '#2e2e2e',
      fontFamily: 'Inter, sans-serif'
    },
    navbar: {
      position: 'fixed',
      width: '100%',
      zIndex: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(15, 23, 42, 0.08)'
    },
    navContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '80px'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    logoText: {
      fontWeight: 'bold',
      fontSize: '20px',
      letterSpacing: '0.04em',
      color: '#0b5ed7'
    },
    hero: {
      position: 'relative',
      paddingTop: '128px',
      paddingBottom: '80px',
      overflow: 'hidden'
    },
    heroContent: {
      maxWidth: '896px',
      margin: '0 auto',
      padding: '0 16px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 10
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 16px',
      borderRadius: '9999px',
      backgroundColor: 'rgba(11, 94, 215, 0.12)',
      border: '1px solid rgba(11, 94, 215, 0.2)',
      color: '#0b5ed7',
      marginBottom: '32px',
      fontSize: '12px',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    heroTitle: {
      fontSize: '60px',
      fontWeight: 'bold',
      marginBottom: '24px',
      lineHeight: '1.1',
      color: '#2e2e2e'
    },
    gradient: {
      background: 'linear-gradient(to right, #0b5ed7, #0a58ca)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    heroDescription: {
      color: '#64748b',
      fontSize: '20px',
      maxWidth: '512px',
      margin: '0 auto 40px auto',
      lineHeight: '1.6'
    },
    buttonGroup: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '16px'
    },
    primaryBtn: {
      backgroundColor: '#0b5ed7',
      color: '#ffffff',
      fontWeight: 'bold',
      padding: '12px 32px',
      borderRadius: '9999px',
      textDecoration: 'none',
      transition: 'all 0.3s',
      border: 'none',
      cursor: 'pointer'
    },
    secondaryBtn: {
      backgroundColor: 'transparent',
      border: '1px solid rgba(15, 23, 42, 0.08)',
      color: '#0b5ed7',
      fontWeight: '600',
      padding: '12px 32px',
      borderRadius: '9999px',
      textDecoration: 'none',
      transition: 'all 0.3s',
      cursor: 'pointer'
    },
    section: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '64px 16px'
    },
    sectionHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '40px'
    },
    divider: {
      height: '1px',
      backgroundColor: 'rgba(15, 23, 42, 0.08)',
      flexGrow: 1
    },
    sectionTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#2e2e2e',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      textAlign: 'center'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px'
    },
    card: {
      position: 'relative',
      borderRadius: '16px',
      padding: '32px',
      overflow: 'hidden',
      transition: 'all 0.3s',
      border: '1px solid rgba(15, 23, 42, 0.05)',
      backgroundColor: '#ffffff',
      backdropFilter: 'blur(4px)'
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '24px'
    },
    badge2: {
      padding: '4px 12px',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    price: {
      color: '#2e2e2e',
      fontWeight: 'bold',
      fontSize: '24px'
    },
    cardTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '8px',
      transition: 'all 0.3s'
    },
    cardSubtitle: {
      color: '#64748b',
      fontSize: '14px',
      marginBottom: '24px'
    },
    cardDescription: {
      backgroundColor: '#f8fafc',
      borderRadius: '12px',
      padding: '16px',
      marginBottom: '24px',
      border: '1px solid rgba(15, 23, 42, 0.05)'
    },
    cardMeta: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      fontSize: '14px',
      fontWeight: '600',
      color: '#64748b'
    },
    metaItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    coreSection: {
      backgroundColor: '#f8fafc',
      borderTop: '1px solid rgba(15, 23, 42, 0.05)',
      borderBottom: '1px solid rgba(15, 23, 42, 0.05)',
      padding: '64px 0'
    },
    coreContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 16px'
    },
    coreHeader: {
      marginBottom: '48px',
      textAlign: 'center'
    },
    coreTitle: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: '#2e2e2e'
    },
    coreSubtitle: {
      color: '#64748b',
      maxWidth: '512px',
      margin: '0 auto'
    },
    pricingBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      border: '1px solid rgba(11, 94, 215, 0.25)',
      borderRadius: '9999px',
      padding: '8px 24px',
      boxShadow: '0 0 15px rgba(11, 94, 215, 0.2)',
      marginBottom: '48px'
    },
    moduleGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px'
    },
    moduleCard: {
      padding: '24px',
      borderRadius: '12px',
      border: '1px solid rgba(15, 23, 42, 0.05)',
      backgroundColor: '#ffffff',
      backdropFilter: 'blur(4px)',
      transition: 'all 0.3s'
    },
    moduleIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '16px',
      transition: 'all 0.3s'
    },
    moduleTitle: {
      fontWeight: 'bold',
      fontSize: '18px',
      color: '#2e2e2e',
      marginBottom: '8px'
    },
    moduleDescription: {
      color: '#64748b',
      fontSize: '14px',
      lineHeight: '1.5'
    },
    professionalSection: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '64px 16px'
    },
    professionalGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: '48px',
      alignItems: 'center'
    },
    professionalContent: {
      marginBottom: '24px'
    },
    professionalTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: '#2e2e2e'
    },
    professionalDescription: {
      color: '#64748b',
      marginBottom: '24px',
      lineHeight: '1.6'
    },
    professionalPricing: {
      display: 'inline-block',
      backgroundColor: '#f8fafc',
      border: '1px solid rgba(11, 94, 215, 0.2)',
      borderRadius: '8px',
      padding: '24px'
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '24px'
    },
    skillCard: {
      background: 'linear-gradient(135deg, #ffffff, #f8fafc)',
      border: '1px solid rgba(15, 23, 42, 0.05)',
      padding: '24px',
      borderRadius: '12px',
      transition: 'all 0.3s'
    },
    skillIcon: {
      height: '40px',
      width: '40px',
      backgroundColor: 'rgba(11, 94, 215, 0.1)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#0a58ca',
      marginBottom: '16px',
      transition: 'all 0.3s'
    },
    footer: {
      borderTop: '1px solid rgba(15, 23, 42, 0.08)',
      backgroundColor: '#ffffff',
      padding: '64px 0 32px 0',
      marginTop: '2rem'
    },
    footerContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 16px',
      textAlign: 'center'
    },
    footerTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '24px',
      color: '#2e2e2e'
    },
    footerDescription: {
      color: '#64748b',
      marginBottom: '32px'
    },
    footerBtn: {
      backgroundColor: '#0b5ed7',
      color: '#ffffff',
      fontWeight: 'bold',
      padding: '16px 40px',
      borderRadius: '9999px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s',
      boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.08)',
      marginBottom: '64px'
    },
    footerBottom: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '14px',
      color: '#64748b',
      borderTop: '1px solid rgba(15, 23, 42, 0.05)',
      paddingTop: '32px',
      gap: '16px'
    },
    footerLinks: {
      display: 'flex',
      gap: '24px'
    }
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>
            <span style={styles.logoText}>ProgrammoCeuticals</span>
          </div>
          
          <div style={{ display: 'none' }}>
            <button style={{
              backgroundColor: 'rgba(15, 23, 42, 0.05)',
              color: '#2e2e2e',
              padding: '8px 24px',
              borderRadius: '9999px',
              border: '1px solid rgba(15, 23, 42, 0.08)',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Contact Admissions
            </button>
          </div>
        </div>
      </nav>
      
      <main style={{ flexGrow: 1 }}>
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <div style={styles.badge}>
              <span style={{ position: 'relative', display: 'flex', height: '8px', width: '8px' }}>
                <span style={{
                  position: 'absolute',
                  display: 'inline-flex',
                  height: '100%',
                  width: '100%',
                  borderRadius: '50%',
                  backgroundColor: '#0b5ed7',
                  opacity: 0.75,
                  animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'
                }}></span>
                <span style={{
                  position: 'relative',
                  display: 'inline-flex',
                  borderRadius: '50%',
                  height: '8px',
                  width: '8px',
                  backgroundColor: '#0b5ed7'
                }}></span>
              </span>
              <span>2026 Enrollment Open</span>
            </div>
            
            <h1 style={styles.heroTitle}>
              The Cure for <br />
              <span style={styles.gradient}>Competence Gaps.</span>
            </h1>
            
            <p style={styles.heroDescription}>
              All courses are cohort-based, instructor-led, and designed for <span style={{ color: '#2e2e2e', fontWeight: '600' }}>deep competence</span>, not just surface familiarity.
            </p>

            <div style={styles.buttonGroup}>
              <a href="#foundational" style={styles.primaryBtn}>
                Explore Tracks
              </a>
              <a href="#fees" style={styles.secondaryBtn}>
                View Fees
              </a>
            </div>
          </div>
        </section>
        
        <section id="foundational" style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.divider}></div>
            <h2 style={styles.sectionTitle}>Foundational Tracks</h2>
            <div style={styles.divider}></div>
          </div>

          <div style={styles.grid}>
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <span style={{
                  ...styles.badge2,
                  backgroundColor: 'rgba(11, 94, 215, 0.15)',
                  color: '#0a58ca'
                }}>
                  Frontend Entry
                </span>
                <span style={styles.price}>₦200,000</span>
              </div>
              
              <h3 style={{
                ...styles.cardTitle,
                color: '#0a58ca'
              }}>
                Web Foundations
              </h3>
              <p style={styles.cardSubtitle}>HTML5, CSS3, JavaScript ES6+</p>
              
              <div style={styles.cardDescription}>
                <p style={{ color: '#2e2e2e', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
                  Focus on core web concepts, responsive design, DOM manipulation, and modern JavaScript fundamentals.
                </p>
              </div>

              <div style={styles.cardMeta}>
                <span style={styles.metaItem}>
                  <i className="fa-solid fa-clock" style={{ fontSize: '16px' }}></i>
                  12 Weeks
                </span>
                <span style={styles.metaItem}>
                  <i className="fa-solid fa-users" style={{ fontSize: '16px' }}></i>
                  Live Cohort
                </span>
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <span style={{
                  ...styles.badge2,
                  backgroundColor: 'rgba(11, 94, 215, 0.2)',
                  color: '#0b5ed7'
                }}>
                  Data Entry
                </span>
                <span style={styles.price}>₦180,000</span>
              </div>
              
              <h3 style={{
                ...styles.cardTitle,
                color: '#0b5ed7'
              }}>
                Data & Analytics
              </h3>
              <p style={styles.cardSubtitle}>Excel & SQL Foundations</p>
              
              <div style={styles.cardDescription}>
                <p style={{ color: '#2e2e2e', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
                  Focus on data handling, analysis, complex querying, and decision-support skills for professionals.
                </p>
              </div>

              <div style={styles.cardMeta}>
                <span style={styles.metaItem}>
                  <i className="fa-solid fa-clock" style={{ fontSize: '16px' }}></i>
                  12 Weeks
                </span>
                <span style={styles.metaItem}>
                  <i className="fa-solid fa-users" style={{ fontSize: '16px' }}></i>
                  Live Cohort
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="core" style={styles.coreSection}>
          <div style={styles.coreContainer}>
            <div style={styles.coreHeader}>
              <h2 style={styles.coreTitle}>
                Core Engineering <span style={{ color: '#0b5ed7' }}>Modules</span>
              </h2>
              <p style={styles.coreSubtitle}>
                Clean architecture, problem-solving, and production-ready skills.
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '48px' }}>
              <div style={styles.pricingBadge}>
                <span style={{ color: '#64748b', fontSize: '14px', marginRight: '12px' }}>Uniform Pricing:</span>
                <span style={{ color: '#2e2e2e', fontWeight: 'bold', fontSize: '18px' }}>₦150,000</span>
                <span style={{ color: '#64748b', fontSize: '12px', marginLeft: '8px' }}>/ per course (12 Weeks)</span>
              </div>
            </div>

            <div style={styles.moduleGrid}>
              {[
                { title: 'Python', desc: 'Versatile programming for web & data applications.', icon: '🐍', color: { bg: 'rgba(59, 130, 246, 0.1)', text: '#60a5fa' } },
                { title: 'React', desc: 'Frontend Engineering & UI Architecture mastery.', icon: '⚛️', color: { bg: 'rgba(6, 182, 212, 0.1)', text: '#22d3ee' } },
                { title: 'Node.js & Express', desc: 'Backend logic and REST API development.', icon: '🚀', color: { bg: 'rgba(34, 197, 94, 0.1)', text: '#4ade80' } },
                { title: 'Django', desc: 'High-level Python Web Framework for rapid dev.', icon: '🐍', color: { bg: 'rgba(11, 94, 215, 0.2)', text: '#0b5ed7' } },
                { title: 'Angular', desc: 'Robust frontend MVC framework for enterprise.', icon: '🅰️', color: { bg: 'rgba(239, 68, 68, 0.1)', text: '#f87171' } },
                { title: 'DSA', desc: 'Data Structures & Algorithms problem solving.', icon: '🧠', color: { bg: 'rgba(168, 85, 247, 0.1)', text: '#a78bfa' } },
                { title: 'MongoDB', desc: 'Scalable NoSQL database schema design.', icon: '🍃', color: { bg: 'rgba(11, 94, 215, 0.12)', text: '#0b5ed7' } },
                { title: 'Hosting & Deploy', desc: 'CI/CD, Cloud, and Server management (DevOps).', icon: '☁️', color: { bg: 'rgba(249, 115, 22, 0.1)', text: '#fb923c' } }
              ].map((module, index) => (
                <div key={index} style={styles.moduleCard}>
                  <div style={{
                    ...styles.moduleIcon,
                    backgroundColor: module.color.bg,
                    color: module.color.text
                  }}>
                    <span style={{ fontSize: '24px' }}>{module.icon}</span>
                  </div>
                  <h3 style={styles.moduleTitle}>{module.title}</h3>
                  <p style={styles.moduleDescription}>{module.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="professional" style={styles.professionalSection}>
          <div style={styles.professionalGrid}>
            <div>
              <h2 style={styles.professionalTitle}>
                Professional & <br />
                <span style={{ color: '#0a58ca' }}>Analytical Skills</span>
              </h2>
              <p style={styles.professionalDescription}>
                Designed for pharmacists, researchers, analysts, and non-CS professionals who need practical technical literacy.
              </p>
              <div style={styles.professionalPricing}>
                <p style={{ fontSize: '12px', textTransform: 'uppercase', color: '#0a58ca', fontWeight: 'bold', letterSpacing: '0.05em', marginBottom: '4px' }}>Standard Fee</p>
                <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#2e2e2e', margin: '0' }}>₦100,000</p>
                <p style={{ fontSize: '12px', color: '#64748b', margin: '0' }}>Duration: 12 Weeks</p>
              </div>
            </div>

            <div style={styles.skillsGrid}>
              {[
                { title: 'Excel & Data', desc: 'Advanced formulas, pivot tables, and visualization.', icon: '📊' },
                { title: 'SPSS Analysis', desc: 'Statistical analysis for research and pharma.', icon: '📈' },
                { title: 'Networking', desc: 'Infrastructure fundamentals and connectivity.', icon: '🌐' }
              ].map((skill, index) => (
                <div key={index} style={styles.skillCard}>
                  <div style={styles.skillIcon}>
                    <span style={{ fontSize: '20px' }}>{skill.icon}</span>
                  </div>
                  <h4 style={{ fontWeight: 'bold', color: '#2e2e2e', fontSize: '18px', marginBottom: '8px' }}>{skill.title}</h4>
                  <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <h2 style={styles.footerTitle}>Ready to specialize?</h2>
          <p style={styles.footerDescription}>Secure your spot in the next cohort.</p>
          
          <button style={styles.footerBtn}>
            Download Full Syllabus
          </button>

          <div style={styles.footerBottom}>
            <div style={{ marginBottom: '16px' }}>
              &copy; 2026 Programmoceuticals. All rights reserved.
            </div>
            <div style={styles.footerLinks}>
              <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Privacy</a>
              <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Terms</a>
              <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CurriculumPage;
