"use client";

import { useState, useEffect, useRef } from "react";

const translations = {
  en: {
    'nav-services': 'Services',
    'nav-contact': 'Get in Touch',
    'hero-title': 'Digital <br><span class="highlight">Perfection</span>',
    'hero-desc': 'Merging technological innovation with sophisticated design for your business success.',
    'hero-btn-work': 'The Method',
    'hero-btn-services': 'Services',
    'services-subtitle': 'What We Do',
    'services-title': 'Future-Ready <span class="highlight">Expertise</span>',
    'service-1-title': 'Web Development',
    'service-1-desc': 'High-performance web applications built with the latest technologies.',
    'service-2-title': 'UI/UX Design',
    'service-2-desc': 'Sophisticated designs providing seamless experiences on every device.',
    'service-3-title': 'Brand Identity',
    'service-3-desc': 'Unique visual identities that define and elevate your brand voice.',
    'tech-subtitle': 'Our Stack',
    'tech-title': 'Technologies We <span class="highlight">Master</span>',
    'onboarding-title': 'Your Journey Starts Here',
    'onboarding-1': 'Tell us about your needs',
    'onboarding-2': 'We\'ll have a short discovery call',
    'onboarding-3': 'Final masterpiece delivered',
    'ethos-subtitle': 'The Ethos',
    'ethos-title': 'Design with <span class="highlight-secondary">Purpose</span>',
    'ethos-desc': 'We don’t just build websites; we create digital assets that embody your brand’s soul. Our mission is to bridge the gap between human emotion and technical precision.',
    'ethos-stat-1': 'Custom Made',
    'ethos-stat-2': 'Global Vision',
    'nav-process': 'How It Works',
    'process-subtitle': 'The Method',
    'process-title': 'From Vision to <span class="highlight">Perfection</span>',
    'process-step-1-title': 'Discovery',
    'process-step-1-desc': 'We deep dive into your goals to understand exactly what your business needs to grow.',
    'process-step-2-title': 'Execution',
    'process-step-2-desc': 'Crafting high-end design and precise tech implementation to create your digital masterpiece.',
    'process-step-3-title': 'Evolution',
    'process-step-3-desc': 'Long-term partnership with continuous updates, maintenance, and growth-focused care.',
    'price-1-title': 'Landing Page',
    'price-1-f1': 'Premium UI/UX Design',
    'price-1-f2': 'High Performance Speed',
    'price-1-f3': 'SEO Fundamentals',
    'price-1-f4': 'Mobile Optimization',
    'price-2-title': 'E-Commerce',
    'price-2-f1': 'Online Shop System',
    'price-2-f2': 'SEO Optimization',
    'price-2-f3': 'Inventory Management',
    'price-2-f4': 'Premium Support',
    'price-3-title': 'System',
    'price-3-f1': 'Admin Panel',
    'price-3-f2': 'Internal Systems',
    'price-3-f3': 'Complex Architecture',
    'price-3-f4': 'Custom Integrations',
    'popular-tag': 'Popular',
    'pricing-subtitle': 'Investment',
    'pricing-title': 'Flexible <span class="highlight">Premium Tiers</span>',
    'pricing-btn': 'Get Started',
    'pricing-individual': 'Need something even more complex? We count individual systems specifically for your needs.',
    'pricing-contact': 'Consult with us',
    'pricing-intro': 'Instead of paying thousands upfront, invest in small, manageable monthly payments that fit your budget. Get premium quality without breaking the bank.',
    'footer-desc': 'Setting digital standards since 2024.',
    'footer-links-title': 'Links',
    'footer-connect-title': 'Connect',
    'footer-rights': '© 2024 redRox. All rights reserved.'
  },
  ge: {
    'nav-services': 'სერვისები',
    'nav-process': 'როგორ ვმუშაობთ',
    'nav-contact': 'კონტაქტი',
    'hero-title': 'შექმენი <br><span class="highlight">ციფრული ისტორია</span>',
    'hero-desc': 'ტექნოლოგიური ინოვაციისა და დახვეწილი დიზაინის ერთობლიობა თქვენი ბიზნესის წარმატებისთვის.',
    'hero-btn-work': 'პორტფოლიო',
    'hero-btn-services': 'სერვისები',
    'services-subtitle': 'რას ვაკეთებთ',
    'services-title': 'გამოცდილება <span class="highlight">მომავლისთვის</span>',
    'service-1-title': 'ვებ დეველოპმენტი',
    'service-1-desc': 'სწრაფი, უსაფრთხო და მასშტაბირებადი ვებ აპლიკაციები.',
    'service-2-title': 'UI/UX დიზაინი',
    'service-2-desc': 'დახვეწილი დიზაინი, რომელიც უზრუნველყოფს საუკეთესო გამოცდილებას.',
    'service-3-title': 'ბრენდის იდენტობა',
    'service-3-desc': 'უნიკალური ბრენდის ხმის და ვიზუალური იდენტობის შექმნა.',
    'tech-subtitle': 'ტექნოლოგიები',
    'tech-title': 'ტექნოლოგიები რომლებსაც <span class="highlight">ვიყენებთ</span>',
    'onboarding-title': 'თქვენი გზა აქ იწყება',
    'onboarding-1': 'მოგვიყევით თქვენი საჭიროებების შესახებ',
    'onboarding-2': 'ჩვენ გვექნება მოკლე საკონსულტაციო ზარი',
    'onboarding-3': 'მიიღეთ დასრულებული პროდუქტი',
    'ethos-subtitle': 'ფილოსოფია',
    'ethos-title': 'დიზაინი <span class="highlight-secondary">მიზნით</span>',
    'ethos-desc': 'ჩვენ არ ვქმნით მხოლოდ ვებგვერდებს; ჩვენ ვქმნით ციფრულ აქტივებს, რომლებიც თქვენი ბრენდის სულს გამოხატავს. ჩვენი მისიაა დავაკავშიროთ ადამიანური ემოცია და ტექნიკური სიზუსტე.',
    'ethos-stat-1': 'უნიკალური',
    'ethos-stat-2': 'ხედვა',
    'process-subtitle': 'მეთოდოლოგია',
    'process-title': 'ხედვიდან <span class="highlight">სრულყოფილებამდე</span>',
    'process-step-1-title': 'კვლევა',
    'process-step-1-desc': 'თქვენი ბიზნესის საჭიროებების გაგება და მიზნების დეტალური შესწავლა.',
    'process-step-2-title': 'შესრულება',
    'process-step-2-desc': 'დახვეწილი დიზაინი და ტექნოლოგიური იმპლემენტაცია ციფრული შედევრის შესაქმნელად.',
    'process-step-3-title': 'მხარდაჭერა',
    'process-step-3-desc': 'ევოლუცია და ზრუნვა - გრძელვადიანი პარტნიორობა და მუდმივი განვითარება.',
    'price-1-title': 'ლენდინგ გვერდი',
    'price-1-f1': 'პრემიუმ UI/UX დიზაინი',
    'price-1-f2': 'მაქსიმალური სისწრაფე',
    'price-1-f3': 'SEO ოპტიმიზაცია',
    'price-1-f4': 'მობილური ოპტიმიზაცია',
    'price-2-title': 'ონლაინ მაღაზია',
    'price-2-f1': 'ელ-კომერციის სისტემა',
    'price-2-f2': 'SEO ოპტიმიზაცია',
    'price-2-f3': 'ინვენტარის მართვა',
    'price-2-f4': 'პრემიუმ მხარდაჭერა',
    'price-3-title': 'სისტემა',
    'price-3-f1': 'ადმინ პანელი',
    'price-3-f2': 'შიდა სისტემები',
    'price-3-f3': 'რთული არქიტექტურა',
    'price-3-f4': 'ინდივიდუალური ინტეგრაციები',
    'popular-tag': 'პოპულარული',
    'pricing-subtitle': 'ფასები',
    'pricing-title': 'მოქნილი <span class="highlight">პრემიუმ ტარიფები</span>',
    'pricing-btn': 'დაიწყეთ ახლა',
    'pricing-individual': 'გსურთ უფრო რთული სისტემა? ჩვენ ინდივიდუალურად დაგითვლით თქვენს საჭიროებებზე მორგებულ ფასს.',
    'pricing-contact': 'გაიარეთ კონსულტაცია',
    'pricing-intro': 'ათასობით ლარის ერთჯერადი გადახდის ნაცვლად, გადაიხადეთ მცირე ყოველთვიური თანხა, რომელიც შეესაბამება თქვენს ბიუჯეტს. მიიღეთ პრემიუმ ხარისხი დიდი დანახარჯების გარეშე.',
    'footer-desc': 'ციფრული სტანდარტების შექმნა 2024 წლიდან.',
    'footer-links-title': 'ლინკები',
    'footer-connect-title': 'კონტაქტი',
    'footer-rights': '© 2024 redRox. ყველა უფლება დაცულია.'
  }
};

export default function Home() {
  const [lang, setLang] = useState("ge");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const nexusRef = useRef(null);

  useEffect(() => {
    const savedLang = localStorage.getItem('redRox_lang') || 'ge';
    setLang(savedLang);
    document.body.className = savedLang === 'ge' ? 'lang-ge' : '';

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      if (nexusRef.current) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        nexusRef.current.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-text, .fade-in, .glass-card').forEach(el => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const toggleLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('redRox_lang', newLang);
    document.body.className = newLang === 'ge' ? 'lang-ge' : '';
  };

  const t = (key) => {
    return translations[lang][key] || key;
  };

  return (
    <div className="main-wrapper">
      <header id="main-header" className={isScrolled ? "scrolled" : ""}>
        <nav className="container">
          <div className="logo">
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 20 L75 20 C90 20 90 55 75 55 L45 55 L40 20Z" fill="#FF1E4D" />
              <path d="M10 80 L35 45 L50 65 L70 35 L90 80 H10Z" fill="#FF1E4D" />
            </svg>
            <span className="logo-text">red<span>Rox</span></span>
          </div>
          <ul className={`nav-links ${isMobileMenuOpen ? "mobile-active" : ""}`}>
            <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>{t('nav-services')}</a></li>
            <li><a href="#process" onClick={() => setIsMobileMenuOpen(false)}>{t('nav-process')}</a></li>
            <li>
              <div className="lang-switcher">
                <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => { toggleLang('en'); setIsMobileMenuOpen(false); }}>EN</button>
                <button className={`lang-btn ${lang === 'ge' ? 'active' : ''}`} onClick={() => { toggleLang('ge'); setIsMobileMenuOpen(false); }}>GE</button>
              </div>
            </li>
            <li><a href="#contact" className="btn-primary" onClick={() => setIsMobileMenuOpen(false)}>{t('nav-contact')}</a></li>
          </ul>
          <div className={`menu-toggle ${isMobileMenuOpen ? "open" : ""}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      <main>
        <section id="hero">
          <div className="container hero-content">
            <div className="hero-text">
              <h1 className="reveal-text" dangerouslySetInnerHTML={{ __html: t('hero-title') }}></h1>
              <p className="fade-in">{t('hero-desc')}</p>
              <div className="cta-group fade-in">
                <a href="#process" className="btn-primary-large" onClick={() => setIsMobileMenuOpen(false)}>{t('hero-btn-work')}</a>
                <a href="#services" className="btn-secondary" onClick={() => setIsMobileMenuOpen(false)}>{t('hero-btn-services')}</a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="prism-nexus" ref={nexusRef}>
                <div className="prism-glow"></div>
                <div className="prism-structure">
                  <div className="prism-layer layer-1"></div>
                  <div className="prism-layer layer-2"></div>
                  <div className="prism-layer layer-3"></div>
                </div>
                <div className="prism-core">
                  <div className="core-inner"></div>
                  <div className="core-orbit"></div>
                </div>
                <div className="floating-data">
                  <span className="data-node" style={{ top: '20%', left: '20%' }}></span>
                  <span className="data-node" style={{ top: '80%', left: '30%' }}></span>
                  <span className="data-node" style={{ top: '40%', left: '80%' }}></span>
                  <span className="data-node" style={{ top: '70%', left: '70%' }}></span>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-indicator">
            <div className="mouse"></div>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <div className="section-header">
              <span className="sub-title">{t('services-subtitle')}</span>
              <h2 dangerouslySetInnerHTML={{ __html: t('services-title') }}></h2>
            </div>
            <div className="services-grid">
              <div className="service-card glass-card">
                <div className="card-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3>{t('service-1-title')}</h3>
                <p>{t('service-1-desc')}</p>
              </div>
              <div className="service-card glass-card">
                <div className="card-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                    <path d="M2 2l7.5 1.5"></path>
                    <path d="M7 11l5-5"></path>
                  </svg>
                </div>
                <h3>{t('service-2-title')}</h3>
                <p>{t('service-2-desc')}</p>
              </div>
              <div className="service-card glass-card">
                <div className="card-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"></path>
                    <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"></path>
                  </svg>
                </div>
                <h3>{t('service-3-title')}</h3>
                <p>{t('service-3-desc')}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="tech-stack">
          <div className="container">
            <div className="section-header">
              <span className="sub-title">{t('tech-subtitle')}</span>
              <h2 dangerouslySetInnerHTML={{ __html: t('tech-title') }}></h2>
            </div>
            <div className="tech-grid">
              {[
                { name: 'JavaScript', icon: <path d="M3 3h18v18H3zM7 12h5M15 9l-2 6 2.5-3" /> },
                { name: 'React', icon: <><circle cx="12" cy="12" r="2" /><path d="M12 5c-4.42 0-8 3.13-8 7s3.58 7 8 7 8-3.13 8-7-3.58-7-8-7z" /><path d="M5.31 8.5c2.21-3.83 6.17-6.5 10.69-6.5s8.48 2.67 10.69 6.5" /><path d="M18.69 15.5c-2.21 3.83-6.17 6.5-10.69 6.5s-8.48-2.67-10.69-6.5" /></> },
                { name: 'Next.js', icon: <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></> },
                { name: 'Angular', icon: <><path d="M12 2L2 5l2 14 8 3 8-3 2-14z" /><path d="M12 6L7 16h2l1-2h4l1 2h2z" /><path d="M11 12h2L12 9z" /></> },
                { name: 'React Native', icon: <><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><path d="M12 18h.01" /><path d="M9 13a3 3 0 1 1 6 0 3 3 0 0 1-6 0z" /></> },
                { name: 'SQL', icon: <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></> },
                { name: 'MongoDB', icon: <><path d="M12 3c-4.42 0-8 3.58-8 8 0 5 8 10 8 10s8-5 8-10c0-4.42-3.58-8-8-8z" /><path d="M12 7v8" /><path d="M9 11l3 3 3-3" /></> },
                { name: 'Node.js', icon: <><path d="M12 2l10 5v10l-10 5-10-5V7z" /><circle cx="12" cy="12" r="3" /></> },
                { name: 'AWS', icon: <><path d="M17.5 19c.3 0 .5-.2.5-.5V15c0-2-3-3-3-3s-3 1-3 3v3.5c0 .3.2.5.5.5h5zM6.5 19c-.3 0-.5-.2-.5-.5V15c0-2 3-3 3-3s3 1 3 3v3.5c0 .3-.2.5-.5.5h-5z" /><path d="M12 5C8 5 5 8 5 12c0 2 1 3.5 1 3.5L12 19l6-3.5s1-1.5 1-3.5c0-4-3-7-7-7z" /></> },
                { name: 'Docker', icon: <><rect x="2" y="10" width="4" height="4" rx="1" /><rect x="7" y="10" width="4" height="4" rx="1" /><rect x="12" y="10" width="4" height="4" rx="1" /><rect x="17" y="10" width="4" height="4" rx="1" /><rect x="7" y="5" width="4" height="4" rx="1" /><path d="M2 16h20c0 3-3 5-10 5s-10-2-10-5z" /></> }
              ].map((tech) => (
                <div className="tech-card glass-card fade-in" key={tech.name}>
                  <div className="tech-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {tech.icon}
                    </svg>
                  </div>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="onboarding-section">
          <div className="container">
            <div className="pricing-intro-card">
              <p className="pricing-intro-text">{t('pricing-intro')}</p>
            </div>
            <h2>{t('onboarding-title')}</h2>
            <div className="onboarding-flow">
              <div className="onboarding-step fade-in">
                <div className="onboarding-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <p>{t('onboarding-1')}</p>
              </div>
              <div className="onboarding-dots">
                <div className="dot-unit"></div><div className="dot-unit"></div><div className="dot-unit"></div><div className="dot-unit"></div>
              </div>
              <div className="onboarding-step fade-in">
                <div className="onboarding-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <p>{t('onboarding-2')}</p>
              </div>
              <div className="onboarding-dots">
                <div className="dot-unit"></div><div className="dot-unit"></div><div className="dot-unit"></div><div className="dot-unit"></div>
              </div>
              <div className="onboarding-step fade-in">
                <div className="onboarding-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <p>{t('onboarding-3')}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="ethos">
          <div className="ethos-bg-glow"></div>
          <div className="container ethos-content">
            <div className="ethos-visual fade-in">
              <div className="moving-core">
                <div className="core-pulse"></div>
                <div className="data-stream stream-1"></div>
                <div className="data-stream stream-2"></div>
                <div className="data-stream stream-3"></div>
              </div>
            </div>
            <div className="ethos-text fade-in">
              <span className="sub-title secondary">{t('ethos-subtitle')}</span>
              <h2 dangerouslySetInnerHTML={{ __html: t('ethos-title') }}></h2>
              <p>{t('ethos-desc')}</p>
              <div className="ethos-stats">
                <div className="stat-item">
                  <span className="stat-num">100%</span>
                  <span className="stat-lbl">{t('ethos-stat-1')}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">24/7</span>
                  <span className="stat-lbl">{t('ethos-stat-2')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="process-map-section">
          <div className="container">
            <div className="section-header">
              <span className="sub-title">{t('process-subtitle')}</span>
              <h2 dangerouslySetInnerHTML={{ __html: t('process-title') }}></h2>
            </div>
            <div className="process-map">
              <div className="process-node">
                <div className="node-content glass-card">
                  <div className="node-icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="20" cy="20" r="12" stroke="var(--primary)" strokeWidth="2" />
                      <circle cx="20" cy="20" r="4" fill="var(--primary)" />
                      <path d="M20 2V8" stroke="var(--primary)" strokeWidth="2" />
                      <path d="M20 32V38" stroke="var(--primary)" strokeWidth="2" />
                      <path d="M32 20H38" stroke="var(--primary)" strokeWidth="2" />
                      <path d="M2 20H8" stroke="var(--primary)" strokeWidth="2" />
                    </svg>
                  </div>
                  <h3>{t('process-step-1-title')}</h3>
                  <p>{t('process-step-1-desc')}</p>
                </div>
              </div>
              <div className="process-arrow">
                <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
                  <path d="M0 12H58M58 12L48 2M58 12L48 22" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="process-node highlight-node">
                <div className="node-content glass-card">
                  <div className="node-icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 10H30V30H10V10Z" stroke="var(--primary)" strokeWidth="2" />
                      <path d="M15 15H35V35H15V15Z" stroke="var(--primary)" strokeWidth="2" strokeOpacity="0.5" />
                      <path d="M20 20L30 20" stroke="var(--primary)" strokeWidth="2" />
                      <path d="M25 25L35 25" stroke="var(--primary)" strokeWidth="2" strokeOpacity="0.5" />
                    </svg>
                  </div>
                  <h3>{t('process-step-2-title')}</h3>
                  <p>{t('process-step-2-desc')}</p>
                </div>
              </div>
              <div className="process-arrow">
                <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
                  <path d="M0 12H58M58 12L48 2M58 12L48 22" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="process-node">
                <div className="node-content glass-card">
                  <div className="node-icon">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 35L15 25L25 30L35 15" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M35 15V22" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
                      <path d="M35 15H28" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="35" cy="15" r="4" fill="var(--primary)" fillOpacity="0.3" />
                    </svg>
                  </div>
                  <h3>{t('process-step-3-title')}</h3>
                  <p>{t('process-step-3-desc')}</p>
                </div>
              </div>
            </div>

            <div className="pricing-section-header fade-in">
              <span className="sub-title">{t('pricing-subtitle')}</span>
              <h2 dangerouslySetInnerHTML={{ __html: t('pricing-title') }}></h2>
            </div>

            <div className="pricing-grid">
              {[
                { title: t('price-1-title'), price: '₾99', features: [t('price-1-f1'), t('price-1-f2'), t('price-1-f3'), t('price-1-f4')] },
                { title: t('price-2-title'), price: '₾350', features: [t('price-2-f1'), t('price-2-f2'), t('price-2-f3'), t('price-2-f4')] },
                { title: t('price-3-title'), price: '₾499', features: [t('price-3-f1'), t('price-3-f2'), t('price-3-f3'), t('price-3-f4')] }
              ].map((plan, idx) => (
                <div className="pricing-card glass-card fade-in" key={idx}>
                  <div className="price-header">
                    <h3>{plan.title}</h3>
                    <div className="price-value">{plan.price}<span>/mo</span></div>
                  </div>
                  <ul className="price-features">
                    {plan.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                  <a href="#contact" className="btn-secondary">{t('pricing-btn')}</a>
                </div>
              ))}
            </div>

            <div className="pricing-footer fade-in">
              <p>{t('pricing-individual')}</p>
              <a href="#contact" className="highlight">{t('pricing-contact')}</a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 20 L75 20 C90 20 90 55 75 55 L45 55 L40 20Z" fill="#FF1E4D" />
                  <path d="M10 80 L35 45 L50 65 L70 35 L90 80 H10Z" fill="#FF1E4D" />
                </svg>
                <span className="logo-text">red<span>Rox</span></span>
              </div>
              <p>{t('footer-desc')}</p>
            </div>
            <div className="footer-links">
              <h4>{t('footer-links-title')}</h4>
              <ul>
                <li><a href="#services">{t('nav-services')}</a></li>
                <li><a href="#process">{t('nav-process')}</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>{t('footer-connect-title')}</h4>
              <p>redroxsolution@gmail.com</p>
              <p>+995 591 691 999</p>
              <div className="social-links">
                <a href="#">Ln</a>
                <a href="#">Tw</a>
                <a href="#">Ig</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p dangerouslySetInnerHTML={{ __html: t('footer-rights') }}></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
