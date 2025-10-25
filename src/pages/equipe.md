import InfoCard from '@site/src/components/InfoCard';
import FeatureGrid from '@site/src/components/FeatureGrid';
import Table from '@site/src/components/Table';

export const title = 'Notre Équipe';
export const description = 'Découvrez l\'équipe passionnée derrière le projet TRC - Team ROBOSTIM';



# Rencontrez l'équipe derrière le TRC

Notre force réside dans la **diversité de nos compétences** et notre **passion commune pour l'innovation**. Chaque membre apporte son expertise unique pour créer des solutions robotiques exceptionnelles.

<InfoCard type="success" title="Notre Vision" icon="🎯">
Nous croyons en la puissance de la collaboration interdisciplinaire pour repousser les limites de l'innovation technologique et créer des solutions qui transforment l'avenir de la robotique.
</InfoCard>

## 🏗️ Structure de l'équipe

<FeatureGrid items={[
  {
    icon: "⚡",
    title: "Pôle Électronique",
    description: "Conception et intégration des systèmes électroniques, capteurs et microcontrôleurs"
  },
  {
    icon: "💻",
    title: "Pôle IT",
    description: "Développement logiciel, interfaces utilisateur et communication réseau"
  },
  {
    icon: "  ",
    title: "Pôle Mécanique",
    description: "Conception 3D, fabrication et assemblage des structures robotiques"
  }
]} />

## 👥 Notre **Team**

<div className="section" style={{
  textAlign: 'center',
  margin: '4rem 0',
  padding: '2rem 0'
}}>
  <div className="gallery-item" style={{
    maxWidth: '100%',
    margin: '0 auto',
    borderRadius: 'var(--border-radius-xl)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-xl)',
    position: 'relative'
  }}>
    <img 
      src="/img/team/team-photo.jpg" 
      alt="Photo de l'équipe TRC - Team ROBOSTIM" 
      style={{
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        borderRadius: '20px',
        transition: 'transform 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.02)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
      }}
    />
    
    {/* Overlay avec informations */}
    <div style={{
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
      padding: '2rem',
      color: 'white'
    }}>
      <h3 style={{
        fontSize: '2rem',
        marginBottom: '0.5rem',
        fontWeight: '700',
        textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
      }}>
        TRC25 - Team ROBOSTIM
      </h3>
      <p style={{
        fontSize: '1.2rem',
        opacity: '0.9',
        textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
      }}>
        Une équipe passionnée et déterminée à repousser les limites de l'innovation robotique
      </p>
    </div>
  </div>
  
  <p style={{
    marginTop: '2rem',
    fontSize: '1.1rem',
    color: 'var(--ifm-color-content-secondary)',
    fontStyle: 'italic',
    maxWidth: '800px',
    margin: '2rem auto 0 auto'
  }}>
    Découvrez les talents et les compétences qui composent notre équipe pluridisciplinaire, 
    unie par une passion commune pour la robotique et l'innovation technologique.
  </p>
</div>

### 🔌 Pôle Électronique

<div style={{
  display: 'flex', 
  alignItems: 'flex-start', 
  marginBottom: '4rem', 
  padding: '3rem', 
  backgroundColor: 'var(--ifm-background-surface-color)', 
  borderRadius: '20px', 
  boxShadow: '0 12px 48px rgba(0,0,0,0.15)',
  border: '1px solid var(--ifm-color-emphasis-200)',
  transition: 'all 0.3s ease'
}}>
  <div className="team-member-photo-container" style={{marginRight: '3rem', flexShrink: 0}}>
    <img 
      src="/img/team/giscard.jpg" 
      alt="Giscard AKINERINLA" 
      className="team-member-photo"
      style={{
        width: '300px', 
        height: '400px', 
        borderRadius: 'var(--border-radius-xl)', 
        objectFit: 'cover', 
        border: '6px solid var(--color-electronique)',
        boxShadow: 'var(--shadow-xl)',
        transition: 'all 0.3s ease'
      }} 
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.02)';
        e.target.style.boxShadow = 'var(--shadow-xl)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = 'var(--shadow-xl)';
      }}
    />
  </div>
  <div className="team-member-info" style={{flex: 1}}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1.5rem'
    }}>
      <h3 style={{
        margin: '0 1.5rem 0 0', 
        color: 'var(--ifm-color-content)',
        fontSize: '2rem',
        fontWeight: '700'
      }}>
        Giscard AKINERINLA
      </h3>
      <span style={{
        background: 'var(--color-electronique)',
        color: 'white',
        padding: '0.5rem 1.2rem',
        borderRadius: '25px',
        fontSize: '1rem',
        fontWeight: '600'
      }}>
        🔌 Électronique
      </span>
    </div>
    <p style={{
      margin: '0 0 1.5rem 0', 
      color: 'var(--ifm-color-content-secondary)',
      fontSize: '0.9rem',
      fontWeight: '500'
    }}>
      <strong>Rôle :</strong> Membre | <strong>Spécialité :</strong> Systèmes embarqués
    </p>
    <p style={{
      margin: '0', 
      color: 'var(--ifm-color-content)',
      lineHeight: '1.7',
      fontSize: '1.04rem'
    }}>
      Passionné d'électronique et de systèmes embarqués, Giscard apporte son expertise en conception de circuits et programmation de microcontrôleurs pour nos projets robotiques. Son approche méthodique et sa créativité technique font de lui un atout précieux pour l'équipe.
    </p>
  </div>
</div>

<div className="team-member-card">
  <div style={{marginRight: '3rem', flexShrink: 0}}>
    <img 
      src="/img/team/gracia.jpg" 
      alt="Gracia HOUANNOU" 
      style={{
        width: '300px', 
        height: '400px', 
        borderRadius: '25px', 
        objectFit: 'cover', 
        border: '6px solid var(--color-electronique)',
        boxShadow: '0 16px 48px rgba(14, 165, 233, 0.4)',
        transition: 'all 0.3s ease'
      }} 
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.02)';
        e.target.style.boxShadow = '0 20px 60px rgba(14, 165, 233, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 16px 48px rgba(14, 165, 233, 0.4)';
      }}
    />
  </div>
  <div style={{flex: 1}}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem'
    }}>
      <h3 style={{
        margin: '0 1.5rem 0 0', 
        color: 'var(--ifm-color-content)',
        fontSize: '2rem',
        fontWeight: '700'
      }}>
        Gracia HOUANNOU
      </h3>
      <span style={{
        background: 'var(--color-electronique)',
        color: 'white',
        padding: '0.5rem 1.2rem',
        borderRadius: '25px',
        fontSize: '1rem',
        fontWeight: '600'
      }}>
        🔌 Électronique
      </span>
    </div>
    <p style={{
      margin: '0 0 1.5rem 0', 
      color: 'var(--ifm-color-content-secondary)',
      fontSize: '0.9rem',
      fontWeight: '500'
    }}>
      <strong>Rôle :</strong> Membre | <strong>Spécialité :</strong> Électronique analogique & numérique
    </p>
    <p style={{
      margin: '0', 
      color: 'var(--ifm-color-content)',
      lineHeight: '1.7',
      fontSize: '1.04rem'
    }}>
      Spécialisée en électronique analogique et numérique, Gracia contribue au développement des systèmes de contrôle et de communication de nos robots. Sa maîtrise des signaux et sa rigueur technique garantissent la fiabilité de nos systèmes électroniques.
    </p>
  </div>
</div>

<div className="team-member-card">
  <div style={{marginRight: '2.5rem', flexShrink: 0}}>
    <img 
      src="/img/team/newton.jpg" 
      alt="Newton AFFADONOUGBO" 
      style={{
        width: '300px', 
        height: '400px', 
        borderRadius: '25px', 
        objectFit: 'cover', 
        border: '6px solid var(--color-electronique)',
        boxShadow: '0 16px 48px rgba(14, 165, 233, 0.4)',
        transition: 'all 0.3s ease'
      }} 
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.02)';
        e.target.style.boxShadow = '0 20px 60px rgba(14, 165, 233, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 8px 32px rgba(14, 165, 233, 0.4)';
      }}
    />
  </div>
  <div style={{flex: 1}}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem'
    }}>
      <h3 style={{
        margin: '0 1.5rem 0 0', 
        color: 'var(--ifm-color-content)',
        fontSize: '2rem',
        fontWeight: '700'
      }}>
        Newton AFFADONOUGBO
      </h3>
      <span style={{
        background: 'var(--color-electronique)',
        color: 'white',
        padding: '0.5rem 1.2rem',
        borderRadius: '25px',
        fontSize: '1rem',
        fontWeight: '600'
      }}>
        🔌 Électronique
      </span>
    </div>
    <p style={{
      margin: '0 0 1.5rem 0', 
      color: 'var(--ifm-color-content-secondary)',
      fontSize: '0.9rem',
      fontWeight: '500'
    }}>
      <strong>Rôle :</strong> Membre | <strong>Spécialité :</strong> IoT & Systèmes embarqués
    </p>
    <p style={{
      margin: '0', 
      color: 'var(--ifm-color-content)',
      lineHeight: '1.7',
      fontSize: '1.04rem'
    }}>
      Expert en systèmes embarqués et IoT, Newton développe les solutions de connectivité et de télémétrie pour nos robots autonomes. Son expertise en communication sans fil et en protocoles de données est essentielle pour nos systèmes de monitoring.
    </p>
  </div>
</div>

<div className="team-member-card">
  <div style={{marginRight: '2.5rem', flexShrink: 0}}>
    <img 
      src="/img/team/hamzat.jpg" 
      alt="Hamzat BELLO" 
      style={{
        width: '300px', 
        height: '400px', 
        borderRadius: '25px', 
        objectFit: 'cover', 
        border: '6px solid var(--color-electronique)',
        boxShadow: '0 16px 48px rgba(14, 165, 233, 0.4)',
        transition: 'all 0.3s ease'
      }} 
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.02)';
        e.target.style.boxShadow = '0 20px 60px rgba(14, 165, 233, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 8px 32px rgba(14, 165, 233, 0.4)';
      }}
    />
  </div>
  <div style={{flex: 1}}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem'
    }}>
      <h3 style={{
        margin: '0 1.5rem 0 0', 
        color: 'var(--ifm-color-content)',
        fontSize: '2rem',
        fontWeight: '700'
      }}>
        Hamzat BELLO
      </h3>
      <span style={{
        background: 'var(--color-electronique)',
        color: 'white',
        padding: '0.5rem 1.2rem',
        borderRadius: '25px',
        fontSize: '1rem',
        fontWeight: '600'
      }}>
        🔌 Électronique
      </span>
    </div>
    <p style={{
      margin: '0 0 1.5rem 0', 
      color: 'var(--ifm-color-content-secondary)',
      fontSize: '0.9rem',
      fontWeight: '500'
    }}>
      <strong>Rôle :</strong> Membre | <strong>Spécialité :</strong> Électronique de puissance
    </p>
    <p style={{
      margin: '0', 
      color: 'var(--ifm-color-content)',
      lineHeight: '1.7',
      fontSize: '1.04rem'
    }}>
      Spécialiste en électronique de puissance et systèmes de contrôle, Hamzat optimise l'efficacité énergétique de nos robots. Son expertise en gestion de l'alimentation et en contrôle de moteurs garantit des performances optimales.
    </p>
  </div>
</div>

### ⚙️ Pôle Mécanique

<div className="team-member-card">
  <div style={{marginRight: '2.5rem', flexShrink: 0}}>
    <img 
      src="/img/team/juste.jpg" 
      alt="Juste ATHAWET" 
      style={{
        width: '300px', 
        height: '400px', 
        borderRadius: '25px', 
        objectFit: 'cover', 
        border: '6px solid var(--color-mecanique)',
        boxShadow: '0 16px 48px rgba(239, 68, 68, 0.4)',
        transition: 'all 0.3s ease'
      }} 
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.02)';
        e.target.style.boxShadow = '0 20px 60px rgba(239, 68, 68, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 8px 32px rgba(239, 68, 68, 0.4)';
      }}
    />
  </div>
  <div style={{flex: 1}}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem'
    }}>
      <h3 style={{
        margin: '0 1.5rem 0 0', 
        color: 'var(--ifm-color-content)',
        fontSize: '2rem',
        fontWeight: '700'
      }}>
        Juste ATHAWET
      </h3>
      <span style={{
        background: 'var(--color-mecanique)',
        color: 'white',
        padding: '0.5rem 1.2rem',
        borderRadius: '25px',
        fontSize: '1rem',
        fontWeight: '600'
      }}>
        ⚙️ Mécanique
      </span>
    </div>
    <p style={{
      margin: '0 0 1.5rem 0', 
      color: 'var(--ifm-color-content-secondary)',
      fontSize: '0.9rem',
      fontWeight: '500'
    }}>
      <strong>Rôle :</strong> Membre | <strong>Spécialité :</strong> Conception mécanique
    </p>
    <p style={{
      margin: '0', 
      color: 'var(--ifm-color-content)',
      lineHeight: '1.7',
      fontSize: '1.04rem'
    }}>
      Ingénieur mécanique passionné, Juste conçoit et optimise les structures robotiques pour assurer robustesse et performance. Son expertise en CAO et en simulation garantit des solutions mécaniques innovantes et fiables.
    </p>
  </div>
</div>

<div className="team-member-card">
  <div style={{marginRight: '2.5rem', flexShrink: 0}}>
    <img 
      src="/img/team/martine.jpg" 
      alt="Martine Inès ADEOTAN" 
      style={{
        width: '300px', 
        height: '400px', 
        borderRadius: '25px', 
        objectFit: 'cover', 
        border: '6px solid var(--color-mecanique)',
        boxShadow: '0 16px 48px rgba(239, 68, 68, 0.4)',
        transition: 'all 0.3s ease'
      }} 
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.02)';
        e.target.style.boxShadow = '0 20px 60px rgba(239, 68, 68, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 8px 32px rgba(239, 68, 68, 0.4)';
      }}
    />
  </div>
  <div style={{flex: 1}}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem'
    }}>
      <h3 style={{
        margin: '0 1.5rem 0 0', 
        color: 'var(--ifm-color-content)',
        fontSize: '2rem',
        fontWeight: '700'
      }}>
        Martine Inès ADEOTAN
      </h3>
      <span style={{
        background: 'var(--color-mecanique)',
        color: 'white',
        padding: '0.5rem 1.2rem',
        borderRadius: '25px',
        fontSize: '1rem',
        fontWeight: '600'
      }}>
        ⚙️ Mécanique
      </span>
    </div>
    <p style={{
      margin: '0 0 1.5rem 0', 
      color: 'var(--ifm-color-content-secondary)',
      fontSize: '0.9rem',
      fontWeight: '500'
    }}>
      <strong>Rôle :</strong> Membre | <strong>Spécialité :</strong> Fabrication additive & 3D
    </p>
    <p style={{
      margin: '0', 
      color: 'var(--ifm-color-content)',
      lineHeight: '1.7',
      fontSize: '1.04rem'
    }}>
      Spécialiste en conception 3D et fabrication additive, Martine développe des solutions mécaniques innovantes pour nos robots. Son expertise en impression 3D et en prototypage rapide accélère notre processus de développement.
    </p>
  </div>
</div>

<div className="team-member-card">
  <div style={{marginRight: '2.5rem', flexShrink: 0}}>
    <img 
      src="/img/team/console.jpg" 
      alt="Consolé AGOSSOU" 
      style={{
        width: '300px', 
        height: '400px', 
        borderRadius: '25px', 
        objectFit: 'cover', 
        border: '6px solid var(--color-mecanique)',
        boxShadow: '0 16px 48px rgba(239, 68, 68, 0.4)',
        transition: 'all 0.3s ease'
      }} 
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.02)';
        e.target.style.boxShadow = '0 20px 60px rgba(239, 68, 68, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 8px 32px rgba(239, 68, 68, 0.4)';
      }}
    />
  </div>
  <div style={{flex: 1}}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem'
    }}>
      <h3 style={{
        margin: '0 1.5rem 0 0', 
        color: 'var(--ifm-color-content)',
        fontSize: '2rem',
        fontWeight: '700'
      }}>
        Consolé AGOSSOU
      </h3>
      <span style={{
        background: 'var(--color-mecanique)',
        color: 'white',
        padding: '0.5rem 1.2rem',
        borderRadius: '25px',
        fontSize: '1rem',
        fontWeight: '600'
      }}>
        ⚙️ Mécanique
      </span>
    </div>
    <p style={{
      margin: '0 0 1.5rem 0', 
      color: 'var(--ifm-color-content-secondary)',
      fontSize: '0.9rem',
      fontWeight: '500'
    }}>
      <strong>Rôle :</strong> Membre | <strong>Spécialité :</strong> Mécanique des fluides
    </p>
    <p style={{
      margin: '0', 
      color: 'var(--ifm-color-content)',
      lineHeight: '1.7',
      fontSize: '1.04rem'
    }}>
      Expert en mécanique des fluides et systèmes hydrauliques, Consolé conçoit les systèmes de propulsion et de manipulation. Son expertise en dynamique des fluides optimise les performances de nos systèmes de mouvement.
    </p>
  </div>
</div>

### 💻 Pôle IT

<div className="team-member-card">
  <div style={{marginRight: '2.5rem', flexShrink: 0}}>
    <img 
      src="/img/team/merveille.jpg" 
      alt="Merveille" 
      style={{
        width: '300px', 
        height: '400px', 
        borderRadius: '25px', 
        objectFit: 'cover', 
        border: '6px solid var(--color-it)',
        boxShadow: '0 16px 48px rgba(139, 92, 246, 0.4)',
        transition: 'all 0.3s ease'
      }} 
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.02)';
        e.target.style.boxShadow = '0 20px 60px rgba(139, 92, 246, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 8px 32px rgba(139, 92, 246, 0.4)';
      }}
    />
  </div>
  <div style={{flex: 1}}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem'
    }}>
      <h3 style={{
        margin: '0 1.5rem 0 0', 
        color: 'var(--ifm-color-content)',
        fontSize: '2rem',
        fontWeight: '700'
      }}>
        Merveille
      </h3>
      <span style={{
        background: 'var(--color-it)',
        color: 'white',
        padding: '0.5rem 1.2rem',
        borderRadius: '25px',
        fontSize: '1rem',
        fontWeight: '600'
      }}>
        💻 IT
      </span>
    </div>
    <p style={{
      margin: '0 0 1.5rem 0', 
      color: 'var(--ifm-color-content-secondary)',
      fontSize: '0.9rem',
      fontWeight: '500'
    }}>
      <strong>Rôle :</strong> Membre | <strong>Spécialité :</strong> Développement full-stack
    </p>
    <p style={{
      margin: '0', 
      color: 'var(--ifm-color-content)',
      lineHeight: '1.7',
      fontSize: '1.04rem'
    }}>
      Développeuse full-stack passionnée, Merveille crée les interfaces utilisateur et les systèmes de communication pour nos robots. Son expertise en développement web et mobile facilite l'interaction humain-robot.
    </p>
  </div>
</div>

<div className="team-member-card">
  <div style={{marginRight: '2.5rem', flexShrink: 0}}>
    <img 
      src="/img/team/jaures.jpg" 
      alt="HOUANNOU Jaurès" 
      style={{
        width: '300px', 
        height: '400px', 
        borderRadius: '25px', 
        objectFit: 'cover', 
        border: '6px solid var(--color-it)',
        boxShadow: '0 16px 48px rgba(139, 92, 246, 0.4)',
        transition: 'all 0.3s ease'
      }} 
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.02)';
        e.target.style.boxShadow = '0 20px 60px rgba(139, 92, 246, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 8px 32px rgba(139, 92, 246, 0.4)';
      }}
    />
  </div>
  <div style={{flex: 1}}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem'
    }}>
      <h3 style={{
        margin: '0 1.5rem 0 0', 
        color: 'var(--ifm-color-content)',
        fontSize: '2rem',
        fontWeight: '700'
      }}>
        HOUANNOU Jaurès
      </h3>
      <span style={{
        background: 'var(--color-it)',
        color: 'white',
        padding: '0.5rem 1.2rem',
        borderRadius: '25px',
        fontSize: '1rem',
        fontWeight: '600'
      }}>
        💻 IT
      </span>
    </div>
    <p style={{
      margin: '0 0 1.5rem 0', 
      color: 'var(--ifm-color-content-secondary)',
      fontSize: '0.9rem',
      fontWeight: '500'
    }}>
      <strong>Rôle :</strong> Membre | <strong>Spécialité :</strong> Intelligence Artificielle
    </p>
    <p style={{
      margin: '0', 
      color: 'var(--ifm-color-content)',
      lineHeight: '1.7',
      fontSize: '1.04rem'
    }}>
      Expert en intelligence artificielle et machine learning, Jaurès développe les algorithmes d'autonomie et de prise de décision. Son expertise en deep learning et en vision par ordinateur donne vie à l'intelligence de nos robots.
    </p>
  </div>
</div>

<div className="team-member-card">
  <div style={{marginRight: '2.5rem', flexShrink: 0}}>
    <img 
      src="/img/team/aboubakar.jpg" 
      alt="Aboubakar ADRAMANE" 
      style={{
        width: '300px', 
        height: '400px', 
        borderRadius: '25px', 
        objectFit: 'cover', 
        border: '6px solid var(--color-it)',
        boxShadow: '0 16px 48px rgba(139, 92, 246, 0.4)',
        transition: 'all 0.3s ease'
      }} 
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.02)';
        e.target.style.boxShadow = '0 20px 60px rgba(139, 92, 246, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 8px 32px rgba(139, 92, 246, 0.4)';
      }}
    />
  </div>
  <div style={{flex: 1}}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem'
    }}>
      <h3 style={{
        margin: '0 1.5rem 0 0', 
        color: 'var(--ifm-color-content)',
        fontSize: '2rem',
        fontWeight: '700'
      }}>
        Aboubakar ADRAMANE
      </h3>
      <span style={{
        background: 'var(--color-it)',
        color: 'white',
        padding: '0.5rem 1.2rem',
        borderRadius: '25px',
        fontSize: '1rem',
        fontWeight: '600'
      }}>
        💻 IT
      </span>
    </div>
    <p style={{
      margin: '0 0 1.5rem 0', 
      color: 'var(--ifm-color-content-secondary)',
      fontSize: '0.9rem',
      fontWeight: '500'
    }}>
      <strong>Rôle :</strong> Membre | <strong>Spécialité :</strong> Cybersécurité & Réseaux
    </p>
    <p style={{
      margin: '0', 
      color: 'var(--ifm-color-content)',
      lineHeight: '1.7',
      fontSize: '1.04rem'
    }}>
      Spécialiste en cybersécurité et réseaux, Aboubakar assure la sécurité et la fiabilité des communications robotiques. Son expertise en protection des données et en sécurisation des communications garantit l'intégrité de nos systèmes.
    </p>
  </div>
</div>


## 🎯 Nos valeurs

<FeatureGrid items={[
  {
    icon: "🤝",
    title: "Collaboration",
    description: "Nous travaillons ensemble pour atteindre des objectifs communs et partager nos connaissances"
  },
  {
    icon: "  ",
    title: "Innovation",
    description: "Nous repoussons les limites de la technologie pour créer des solutions innovantes"
  },
  {
    icon: "🎓",
    title: "Apprentissage",
    description: "Chaque projet est une opportunité d'apprendre et de développer de nouvelles compétences"
  },
  {
    icon: "🏆",
    title: "Excellence",
    description: "Nous visons la qualité et la performance dans tous nos développements"
  }
]} />

## Notre approche

<InfoCard type="success" title="Méthodologie de travail" icon="  ">
Notre équipe suit une approche structurée et collaborative :

1. **Planification** - Définition des objectifs et répartition des tâches
2. **Conception** - Développement des solutions techniques dans chaque domaine
3. **Intégration** - Assemblage et test des différents composants
4. **Validation** - Tests complets et optimisation des performances
5. **Documentation** - Rédaction de la documentation technique complète
</InfoCard>


## 📞 Contact et collaboration

<div className="section" style={{
  background: 'linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-dark) 100%)',
  borderRadius: 'var(--border-radius-xl)',
  padding: 'var(--spacing-2xl)',
  margin: 'var(--spacing-2xl) 0',
  color: 'white',
  textAlign: 'center',
  boxShadow: 'var(--shadow-xl)',
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
    <div style={{
      fontSize: '3rem',
      marginBottom: '1.5rem',
      animation: 'float 3s ease-in-out infinite'
    }}>
      🚀
    </div>
    
    <h2 style={{
      fontSize: '2.5rem',
      marginBottom: '1.5rem',
      fontWeight: '700',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    }}>
      Rejoignez notre aventure
    </h2>
    
    <p style={{
      fontSize: '1.3rem',
      marginBottom: '2rem',
      opacity: '0.9',
      lineHeight: '1.6'
    }}>
Intéressé par nos projets ou souhaitez-vous collaborer avec notre équipe ? 
    </p>
    
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '2rem',
      flexWrap: 'wrap'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.2)',
        padding: '1rem 2rem',
        borderRadius: '15px',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.target.style.background = 'rgba(255, 255, 255, 0.3)';
        e.target.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.target.style.background = 'rgba(255, 255, 255, 0.2)';
        e.target.style.transform = 'translateY(0)';
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.8rem'
        }}>
          <span style={{ fontSize: '1.5rem' }}>📧</span>
          <div>
            <div style={{
              fontSize: '0.9rem',
              opacity: '0.8',
              marginBottom: '0.3rem'
            }}>
              Email de contact
            </div>
            <div style={{
              fontSize: '1.2rem',
              fontWeight: '600'
            }}>
              teamrobostim@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <p style={{
      fontSize: '1.1rem',
      opacity: '0.9',
      fontStyle: 'italic',
      borderTop: '1px solid rgba(255, 255, 255, 0.3)',
      paddingTop: '1.5rem',
      marginTop: '1.5rem'
    }}>
Nous sommes toujours ouverts aux nouvelles collaborations et aux projets innovants !
    </p>
  </div>
</div>

---