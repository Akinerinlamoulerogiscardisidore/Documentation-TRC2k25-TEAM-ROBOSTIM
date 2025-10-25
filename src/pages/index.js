import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import '../css/custom.css'; // Import du CSS personnalisé

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const imgUrl = (filename) => useBaseUrl(`img/${filename}`);

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      
      {/* SECTION HERO AVEC IMAGE COMPLÈTE */}
      <header className="hero-section" style={{ 
        background: `url(${imgUrl('robot-background.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '8rem 0',
        textAlign: 'center',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        {/* Overlay très léger pour la lisibilité du texte */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ 
            fontSize: '4rem', 
            marginBottom: '1.5rem',
            fontWeight: '800',
            textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
            color: 'white'
          }}>
            {siteConfig.title}
          </h1>
          
          <p style={{ 
            fontSize: '1.5rem', 
            marginBottom: '3rem',
            textShadow: '1px 1px 4px rgba(0,0,0,0.7)',
            color: 'white',
            fontWeight: '300'
          }}>
            {siteConfig.tagline}
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {/* BOUTON 1 - Explorer la Documentation */}
            <Link
              className="hero-btn-primary"
              to="/docs/Electronics/Test1"
            >
              📖 Explorer la documentation
            </Link>
            
            {/* BOUTON 2 - Rencontrer l'Équipe */}
            <Link
              className="hero-btn-outline"
              to="/equipe"
            >
              👥 Découvrir la team
            </Link>
          </div>
        </div>
      </header>
      
      {/* NOUVELLE SECTION : À PROPOS DU CONCOURS TRC */}
      <section className="custom-section" style={{ 
        padding: '6rem 0', 
        backgroundColor: 'var(--ifm-background-surface-color)'
      }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Texte à gauche */}
            <div className="col col--6">
              <h2 style={{ 
                color: 'var(--ifm-color-content)',
                marginBottom: '1.5rem',
                fontSize: '2.3rem',
                fontWeight: '700'
              }}>
                Qu'est ce que le TRC ? 
              </h2>
              
              <p style={{ 
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--ifm-color-content-secondary)',
                marginBottom: '1.5rem'
              }}>
                Le <strong>TEKBOT Robotics Challenge ou TRC</strong> est une compétition internationale 
                annuelle de robotique et d'intelligence artificielle, lancée en 2023 au Bénin. 
                
              </p>
              
              <p style={{ 
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--ifm-color-content-secondary)',
                marginBottom: '1.5rem'
              }}>
                Elle vise à développer les compétences en <strong>robotique en Afrique</strong> et à répondre 
                aux défis technologiques du continent liées à des problématiques locales comme 
                la logistique, la gestion des déchets, l'agriculture ou la mobilité.
              </p>
              
              <p style={{ 
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--ifm-color-content-secondary)',
                marginBottom: '2rem'
              }}>
                Au-delà de la compétition, le <strong>TRC</strong> est une plateforme d'apprentissage, de 
                collaboration et d'innovation pour aborder des enjeux mondiaux tels que l'eau, 
                l'énergie, la santé, l'alimentation et l'éducation.
              </p>
              
              <Link 
                to="/about" 
                className="button button--primary"
                style={{
                  borderRadius: '8px',
                  fontWeight: '600',
                  padding: '0.8rem 1.5rem'
                }}
              >
                En savoir plus sur le TRC
              </Link>
            </div>
            
            {/* Image à droite */}
            <div className="col col--6">
              <div style={{ 
                padding: '2rem',
                textAlign: 'center'
              }}>
                <img 
                  src={imgUrl('trc-competition.jpg')} 
                  alt="Compétition Tekbot Robotics Challenge"
                  style={{ 
                    width: '100%',
                    borderRadius: '12px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
                {/*<p style={{ 
                  marginTop: '1rem',
                  color: 'var(--ifm-color-content-secondary)',
                  fontSize: '0.9rem',
                  fontStyle: 'italic'
                }}>
                  Illustration d'une compétition de robotique internationale
                </p>*/}
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* SECTION NOTRE AMBITION - Style moderne avec cartes */}
      <section style={{ 
        padding: '6rem 0',
        backgroundColor: 'var(--ifm-background-surface-color)'
      }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-dark) 100%)',
            borderRadius: '20px',
            padding: '3rem',
            margin: '3rem 0',
            color: 'white',
            textAlign: 'center',
            boxShadow: '0 12px 40px rgba(37, 99, 235, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Éléments décoratifs */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '150px',
              height: '150px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              left: '-30px',
              width: '100px',
              height: '100px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%'
            }}></div>
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              {/* Icone inspiration */}
              <div style={{
                fontSize: '3rem',
                marginBottom: '1.5rem',
                animation: 'float 3s ease-in-out infinite'
              }}>
                ⚡
              </div>
              
              <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '1.5rem',
                fontWeight: '700',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                color: 'var(--ifm-color-content)'
              }}>
                Notre ambition
              </h2>
              
              <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                fontSize: '1.5rem',
                lineHeight: '1.7',
                fontWeight: '400',
                color: 'var(--ifm-color-content)'
              }}>
                <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--ifm-color-content)' }}>
                  <strong>Notre mission est claire</strong> : non seulement participer au Tekbot Robotics Challenge, 
                  mais <span style={{ color: '#fbbf24' }}>établir de nouvelles références en matière d'innovation 
                  robotique</span> et démontrer l'excellence de l'ingénierie made in Africa.
                </p>
                
                <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--ifm-color-content)' }}>
                  Nous percevons une compétition mais notre but véritable se trouve dans la <strong>construction d'un héritage : </strong> 
                  une plateforme ouverte et collaborative, apte à inspirer les générations suivantes, à accélérer la 
                  production de solutions africaines aux problématiques de notre monde et à établir notre continent 
                  comme un <span style={{ color: '#fbbf24' }}>incontournable dans le secteur de la robotique et de l'intelligence artificielle</span>.
                </p>
                
                <p style={{ 
                  fontSize: '1.2rem',
                  marginBottom: '2rem',
                  fontStyle: 'italic',
                  borderLeft: '4px solid #fbbf24',
                  paddingLeft: '1.5rem',
                  textAlign: 'left',
                  color: 'var(--ifm-color-content)'
                }}>
                  "L'innovation ne consiste pas à faire du nouveau, mais à faire du mieux. 
                  Notre ambition est de repousser les limites du possible et d'inspirer 
                  une nouvelle génération de roboticien·ne·s."
                </p>
              </div>
              
              {/* Statistiques dans des cartes modernes */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                marginTop: '3rem',
                flexWrap: 'wrap'
              }}>
                {[
                  { number: '100%', label: 'Innovation', icon: '🚀' },
                  { number: '24/7', label: 'Engagement', icon: '⚡' },
                  { number: '0', label: 'Limites', icon: '🌟' }
                ].map((stat, index) => (
                  <div key={index} style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    padding: '1.5rem 2rem',
                    borderRadius: '15px',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    textAlign: 'center',
                    minWidth: '150px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.3)';
                    e.target.style.transform = 'translateY(-5px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}>
                    <div style={{
                      fontSize: '2rem',
                      marginBottom: '0.5rem'
                    }}>
                      {stat.icon}
                    </div>
                      <div style={{
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        color: '#fbbf24',
                        marginBottom: '0.5rem',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                      }}>
                        {stat.number}
                      </div>
                      <div style={{
                        fontSize: '1rem',
                        opacity: 0.9,
                        fontWeight: '500',
                        color: 'var(--ifm-color-content)'
                      }}>
                        {stat.label}
                      </div>
                  </div>
                ))}
              </div>
              
              {/* Call to Action moderne */}
              <div style={{ marginTop: '3rem' }}>
                <Link
                  className="button button--warning button--lg ambition-button"
                  to="/about"
                    style={{
                      backgroundColor: '#fbbf24',
                      color: '#1e3a8a',
                      border: 'none',
                      fontWeight: '600',
                      borderRadius: '15px',
                      padding: '1rem 2.5rem',
                      boxShadow: '0 8px 25px rgba(251, 191, 36, 0.4)',
                      fontSize: '1.2rem',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer'
                    }}
                >
                  🌟 Découvrir notre vision complète
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION PÔLE ÉLECTRONIQUE - Texte à gauche, Photo à droite */}
      <section style={{ 
        padding: '6rem 0', 
        backgroundColor: 'var(--ifm-background-surface-color)'
      }}>
        <div className="container">
          <div className="text--center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              color: 'var(--ifm-color-content)',
              marginBottom: '3rem',
              fontSize: '2.5rem',
              fontWeight: '700'
            }}>
              <span style={{ color: 'var(--ifm-color-primary)' }}>👥</span> Une team diversifiée et passionnée
            </h2>
            <h2 style={{ 
              color: 'var(--ifm-color-content)',
              marginBottom: '1rem',
              fontSize: '2.5rem',
              fontWeight: '700'
            }}>
              <span style={{ color: 'var(--ifm-color-primary)' }}>🔌</span> Pôle Électronique
            </h2>
            <p style={{ 
              color: 'var(--ifm-color-content-secondary)',
              fontSize: '1.2rem'
            }}>
              Les architectes de notre système électronique 
            </p>
          </div>

          <div className="row align-items-center">
            {/* Texte à gauche */}
            <div className="col col--6">
              <h3 style={{ 
                color: 'var(--ifm-color-content)',
                marginBottom: '1.5rem',
                fontSize: '1.8rem'
              }}>
                
              </h3>
              
              <p style={{ 
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--ifm-color-content-secondary)',
                marginBottom: '1.5rem'
              }}>
                Dans notre team <strong>électronique</strong> , le travail commence toujours par
                l’analyse du problème posé. Nous cherchons à comprendre comment le traduire en un
                système concret. Ensuite, nous faisons le choix des composants les plus adaptés,
                en tenant compte de ce qui est disponible et fiable.
              </p>
              
              <p style={{ 
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--ifm-color-content-secondary)',
                marginBottom: '1.5rem'
              }}>
                Chaque composant est testé avant d’être intégré. Une fois validés,
                nous montons un prototype et programmons le microcontrôleur pour
                vérifier que tout fonctionne comme prévu. Après ces étapes, nous
                passons à la réalisation du circuit sur PCB, jusqu’à aboutir à
                la version finale, stable et prête pour le robot.
              </p>
              
              <div style={{ 
                backgroundColor: 'var(--ifm-background-surface-color)',
                padding: '1.5rem',
                borderRadius: '12px',
                borderLeft: '4px solid var(--color-electronique)',
                marginBottom: '2rem',
                border: '1px solid var(--ifm-color-emphasis-200)'
              }}>
                <p style={{ 
                  margin: 0,
                  color: 'var(--ifm-color-content)',
                  fontStyle: 'italic',
                  lineHeight: '1.6'
                }}>
                  "Notre défi est simple : partir d'une idée et la transformer en un
                  système électronique solide et fonctionnel."
                </p>
              </div>
            </div>
            
            {/* Photo à droite */}
            <div className="col col--6">
              <div style={{ 
                padding: '1rem',
                textAlign: 'center'
              }}>
                <img 
                  src={imgUrl('team-electronique.jpg')} 
                  alt="Équipe Électronique TRC"
                  style={{ 
                    width: '100%',
                    borderRadius: '16px',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
                <p style={{ 
                  marginTop: '1rem',
                  color: 'var(--ifm-color-content-secondary)',
                  fontSize: '0.9rem',
                  fontStyle: 'italic'
                }}>
                  L'équipe électronique en session de conception
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PÔLE IT - Photo à gauche, Texte à droite */}
      <section style={{ 
        padding: '6rem 0', 
        backgroundColor: 'var(--ifm-background-color)'
      }}>
        <div className="container">
          <div className="text--center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              color: 'var(--ifm-color-content)',
              marginBottom: '1rem',
              fontSize: '2.5rem',
              fontWeight: '700'
            }}>
              <span style={{ color: 'var(--color-it)' }}>💻</span> Pôle IT & Software
            </h2>
            <p style={{ 
              color: 'var(--ifm-color-content-secondary)',
              fontSize: '1.2rem'
            }}>
              Les artisans de l'intelligence numérique
            </p>
          </div>

          <div className="row align-items-center">
            {/* Photo à gauche */}
            <div className="col col--6">
              <div style={{ 
                padding: '1rem',
                textAlign: 'center'
              }}>
                <img 
                  src={imgUrl('team-it.jpg')} 
                  alt="Équipe IT TRC"
                  style={{ 
                    width: '100%',
                    borderRadius: '16px',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
                <p style={{ 
                  marginTop: '1rem',
                  color: 'var(--ifm-color-content-secondary)',
                  fontSize: '0.9rem',
                  fontStyle: 'italic'
                }}>
                  Développement des applications de contrôle
                </p>
              </div>
            </div>
            
            {/* Texte à droite */}
            <div className="col col--6">
              <h3 style={{ 
                color: 'var(--ifm-color-content)',
                marginBottom: '1.5rem',
                fontSize: '1.8rem'
              }}>
                
              </h3>
              
              <p style={{ 
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--ifm-color-content-secondary)',
                marginBottom: '1.5rem'
              }}>
                Notre team <strong>IT</strong>  transforme les idées en actions concrètes.
                Nous développons l’écosystème logiciel qui permet au robot
                de percevoir son environnement, de prendre des décisions
                et d’agir de manière autonome.
              </p>
              
              <p style={{ 
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--ifm-color-content-secondary)',
                marginBottom: '1.5rem'
              }}>
                Chaque fonctionnalité est pensée, programmée et testée étape
                par étape. Nous travaillons sur les interfaces, les
                communications temps réel, les API et l’intelligence
                artificielle pour que le robot réponde précisément
                aux besoins du défi. L’objectif est que la technologie
                reste simple et intuitive pour l’utilisateur tout en
                étant performante et fiable.
              </p>
              
              <div style={{ 
                backgroundColor: 'var(--ifm-background-surface-color)',
                padding: '1.5rem',
                borderRadius: '12px',
                borderLeft: '4px solid var(--color-it)',
                marginBottom: '2rem',
                border: '1px solid var(--ifm-color-emphasis-200)'
              }}>
                <p style={{ 
                  margin: 0,
                  color: 'var(--ifm-color-content)',
                  fontStyle: 'italic',
                  lineHeight: '1.6'
                }}>
                  "Notre mission : faire dialoguer l'humain et la machine de façon
                  fluide, pour que chaque interaction devienne une expérience
                  intelligente et naturelle."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PÔLE MÉCANIQUE - Texte à gauche, Photo à droite */}
      <section style={{ 
        padding: '6rem 0', 
        backgroundColor: 'var(--ifm-background-surface-color)'
      }}>
        <div className="container">
          <div className="text--center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              color: 'var(--ifm-color-content)',
              marginBottom: '1rem',
              fontSize: '2.5rem',
              fontWeight: '700'
            }}>
              <span style={{ color: 'var(--color-mecanique)' }}>⚙️</span> Pôle Mécanique
            </h2>
            <p style={{ 
              color: 'var(--ifm-color-content-secondary)',
              fontSize: '1.2rem'
            }}>
              Les bâtisseurs de la structure physique
            </p>
          </div>

          <div className="row align-items-center">
            {/* Texte à gauche */}
            <div className="col col--6">
              <h3 style={{ 
                color: 'var(--ifm-color-content)',
                marginBottom: '1.5rem',
                fontSize: '1.8rem'
              }}>
                
              </h3>
              
              <p style={{ 
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--ifm-color-content-secondary)',
                marginBottom: '1.5rem'
              }}>
                Notre team <strong>mécanique</strong> transforme les idées en réalité tangible.
                Elle conçoit et fabrique la structure qui abrite et supporte
                tous les composants électroniques et logiciels du robot.
              </p>
              
              <p style={{ 
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--ifm-color-content-secondary)',
                marginBottom: '1.5rem'
              }}>
                Chaque étape est pensée : de la Conception Assistée par Ordinateur (CAO) à la fabrication,
                en passant par l’impression 3D et l’usinage, chaque pièce est testée
                et ajustée pour garantir légèreté, robustesse et précision.
                L’objectif est que la structure permette au robot de 
                fonctionner parfaitement tout en étant esthétique et fiable.
              </p>
              
              <div style={{ 
                backgroundColor: 'var(--ifm-background-surface-color)',
                padding: '1.5rem',
                borderRadius: '12px',
                borderLeft: '4px solid var(--color-mecanique)',
                marginBottom: '2rem',
                border: '1px solid var(--ifm-color-emphasis-200)'
              }}>
                <p style={{ 
                  margin: 0,
                  color: 'var(--ifm-color-content)',
                  fontStyle: 'italic',
                  lineHeight: '1.6'
                }}>
                  "Notre défi : donner au robot une ossature solide et ingénieuse, 
                  capable de soutenir chaque innovation que nous y intégrons."
                </p>
              </div>
            </div>
            
            {/* Photo à droite */}
            <div className="col col--6">
              <div style={{ 
                padding: '1rem',
                textAlign: 'center'
              }}>
                <img 
                  src={imgUrl('team-mecanique.jpg')} 
                  alt="Équipe Mécanique TRC"
                  style={{ 
                    width: '100%',
                    borderRadius: '16px',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
                <p style={{ 
                  marginTop: '1rem',
                  color: 'var(--ifm-color-content-secondary)',
                  fontSize: '0.9rem',
                  fontStyle: 'italic'
                }}>
                  Fabrication et assemblage de la structure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION NOTRE UNIVERSITÉ - Photo à gauche, texte à droite */}
      <section style={{ 
        padding: '6rem 0', 
        backgroundColor: 'var(--ifm-background-color)'
      }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Photo à gauche */}
            <div className="col col--6">
              <div style={{ 
                padding: '1rem',
                textAlign: 'center',
                position: 'relative'
              }}>
                <img 
                  src={imgUrl('university-campus.jpg')} 
                  alt="Campus de notre Université"
                  style={{ 
                    width: '100%',
                    borderRadius: '16px',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.02)';
                    e.target.style.boxShadow = '0 12px 40px rgba(0,0,0,0.18)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
                  }}
                />
                
                {/* Badge de prestige */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
                }}>
                  🎓 Excellence
                </div>
              </div>
            </div>
            
            {/* Texte à droite */}
            <div className="col col--6">
              <h2 style={{ 
                color: 'var(--ifm-color-content)',
                marginBottom: '1.5rem',
                fontSize: '2.5rem',
                fontWeight: '700'
              }}>
                Notre écosystème <span style={{ color: '#2563eb' }}>académique</span>
              </h2>
              
              <p style={{ 
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--ifm-color-content-secondary)',
                marginBottom: '1.5rem'
              }}>
                <strong>Fierté de l'INSTI (Institut National Supérieur de Technologie Industrielle)</strong>, le projet TRC est l’expression concrète
                de la vision pédagogique de notre université : combiner excellence académique et innovation pratique.
              </p>
              
              <p style={{ 
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--ifm-color-content-secondary)',
                marginBottom: '1.5rem'
              }}>
                Grâce à un encadrement attentif et une culture qui encourage à dépasser
                ses limites, notre institution nous donne les moyens de transformer
                nos idées en réalisations concrètes. Les partenariats industriels
                et les ressources disponibles renforcent encore notre capacité à
                expérimenter et innover.
              </p>
              
              <div style={{ 
                backgroundColor: 'var(--ifm-background-surface-color)',
                padding: '1.5rem',
                borderRadius: '12px',
                borderLeft: '4px solid #2563eb',
                marginBottom: '2rem'
              }}>
                <p style={{ 
                  margin: 0,
                  color: 'var(--ifm-color-content-secondary)',
                  fontStyle: 'italic',
                  lineHeight: '1.6'
                }}>
                  "La force de l'INSTI ? Transformer les théories en projets tangibles. Le TRC en est la preuve."
                </p>
              </div>
              
              {/* Points forts */}
              <div style={{ marginBottom: '2rem' }}>
                {/*<div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem' }}>
                  <span style={{ 
                    background: '#10b981', 
                    color: 'white', 
                    borderRadius: '50%', 
                    width: '24px', 
                    height: '24px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginRight: '1rem',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    ✓
                  </span>
                  <span style={{ color: '#374151' }}>Laboratoires de pointe</span>
                </div>*/}
                
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem' }}>
                  <span style={{ 
                    background: 'var(--ifm-color-primary)', 
                    color: 'white', 
                    borderRadius: '50%', 
                    width: '24px', 
                    height: '24px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginRight: '1rem',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    ✓
                  </span>
                  <span style={{ color: 'var(--ifm-color-content)' }}>Encadrement personnalisé</span>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.8rem' }}>
                  <span style={{ 
                    background: 'var(--ifm-color-primary)', 
                    color: 'white', 
                    borderRadius: '50%', 
                    width: '24px', 
                    height: '24px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginRight: '1rem',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    ✓
                  </span>
                  <span style={{ color: 'var(--ifm-color-content)' }}>Partenariats industriels</span>
                </div>
              </div>
              
              <Link 
                to="/universite" 
                className="button button--primary university-button"
                style={{
                  background: 'linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-dark) 100%)',
                  border: 'none',
                  borderRadius: '12px',
                  fontWeight: '600',
                  padding: '1rem 2rem',
                  fontSize: '1.1rem',
                  color: 'white',
                  boxShadow: '0 6px 20px rgba(37, 99, 235, 0.3)',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                🏫 Découvrir notre Université
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Features */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--ifm-background-color)' }}>
        <div className="container">
          <div className="text--center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              color: 'var(--ifm-color-content)',
              marginBottom: '1rem',
              fontSize: '2.5rem',
              fontWeight: '700'
            }}>
              Notre expertise technique
            </h2>
            <p style={{ 
              color: 'var(--ifm-color-content-secondary)',
              fontSize: '1.2rem',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Une plongée complète dans notre travail au TRC
            </p>
          </div>
          
          <div className="row">
            {[
              { 
                icon: '🔌', 
                title: 'Électronique de précision', 
                description: 'Analyse, conception et tests des circuits et systèmes de puissance pour un robot fiable et performant'
              },
              { 
                icon: '💻', 
                title: 'Développement Software', 
                description: 'Programmation ROS, développement IA et interfaces pour un robot autonome et intelligent'
              },
              { 
                icon: '⚙️', 
                title: 'Ingénierie Mécanique', 
                description: 'Modélisation 3D, prototypage et fabrication de la structure pour allier robustesse, précision et légèreté'
              }
            ].map((item, index) => (
              <div className="col col--4" key={index}>
                <div className="feature-card">
                  <div className="feature-icon">
                    {item.icon}
                  </div>
                  <h3 style={{ 
                    color: 'var(--ifm-color-content)', 
                    marginBottom: '1.5rem',
                    fontSize: '1.4rem',
                    fontWeight: '600'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ 
                    color: 'var(--ifm-color-content-secondary)',
                    lineHeight: '1.7',
                    fontSize: '1.1rem'
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA finale */}
      <section style={{ 
        padding: '7rem 0',
        background: 'var(--ifm-background-surface-color)',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ 
            marginBottom: '1.5rem',
            color: 'var(--ifm-color-content)',
            fontSize: '2.8rem',
            fontWeight: '700'
          }}>
            Prêt à explorer notre parcours ?
          </h2>
          
          <p style={{ 
            fontSize: '1.2rem',
            color: 'var(--ifm-color-content-secondary)',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Découvrez chaque détail technique de notre parcours depuis les tests de présélection à la réalisation finale.
          </p>
          
          <Link
            className="final-cta-btn"
            to="/docs/Electronics/Test1"
            style={{
              marginTop: '2rem',
              display: 'inline-block',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: '700',
              borderRadius: '8px',
              backgroundColor: '#2563eb',
              color: 'white',
              textDecoration: 'none'
            }}
          >
            🚀 Commencer l'Exploration
          </Link>
        </div>
      </section>
    </Layout>
  );
}