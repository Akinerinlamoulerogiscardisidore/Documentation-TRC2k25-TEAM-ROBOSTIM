import InfoCard from '@site/src/components/InfoCard';
import FeatureGrid from '@site/src/components/FeatureGrid';

export const title = 'Galerie';
export const description = 'Découvrez notre équipe en action et nos réalisations dans la galerie TRC - Team ROBOSTIM';

# 📸 Galerie - Team ROBOSTIM

Découvrez notre univers à travers une sélection de photos qui témoignent de notre passion, de notre travail d'équipe et de nos réalisations dans le domaine de la robotique.

<InfoCard type="success" title="Notre Vision" icon="🎯">
Cette galerie capture les moments clés de notre parcours, de la conception à la réalisation, en passant par les moments de collaboration et d'innovation qui définissent notre équipe.
</InfoCard>

## 👥 Photos d'équipe

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
  margin: '3rem 0'
}}>
  <div style={{
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s ease'
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = 'translateY(-5px)';
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = 'translateY(0)';
  }}>
    <img 
      src="/img/gallery/team-group.jpg" 
      alt="Photo de groupe de l'équipe TRC"
      style={{
        width: '100%',
        height: '250px',
        objectFit: 'cover'
      }}
    />
    <div style={{
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
      padding: '1.5rem',
      color: 'white'
    }}>
      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: '600' }}>
        Équipe complète
      </h3>
      <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.9' }}>
        Tous les membres de l'équipe TRC réunis
      </p>
    </div>
  </div>

  <div style={{
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s ease'
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = 'translateY(-5px)';
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = 'translateY(0)';
  }}>
    <img 
      src="/img/gallery/team-working.jpg" 
      alt="Équipe au travail"
      style={{
        width: '100%',
        height: '250px',
        objectFit: 'cover'
      }}
    />
    <div style={{
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
      padding: '1.5rem',
      color: 'white'
    }}>
      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: '600' }}>
        Au travail
      </h3>
      <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.9' }}>
        Collaboration et concentration en action
      </p>
    </div>
  </div>

  <div style={{
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s ease'
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = 'translateY(-5px)';
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = 'translateY(0)';
  }}>
    <img 
      src="/img/gallery/team-meeting.jpg" 
      alt="Réunion d'équipe"
      style={{
        width: '100%',
        height: '250px',
        objectFit: 'cover'
      }}
    />
    <div style={{
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
      padding: '1.5rem',
      color: 'white'
    }}>
      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: '600' }}>
        Réunion d'équipe
      </h3>
      <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.9' }}>
        Planification et brainstorming
      </p>
    </div>
  </div>
</div>

## 🔧 Nos réalisations

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '2rem',
  margin: '3rem 0'
}}>
  <div style={{
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s ease'
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = 'translateY(-5px)';
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = 'translateY(0)';
  }}>
    <img 
      src="/img/gallery/robot-prototype.jpg" 
      alt="Prototype de robot"
      style={{
        width: '100%',
        height: '300px',
        objectFit: 'cover'
      }}
    />
    <div style={{
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
      padding: '1.5rem',
      color: 'white'
    }}>
      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: '600' }}>
        Prototype robotique
      </h3>
      <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.9' }}>
        Premier prototype fonctionnel de notre robot
      </p>
    </div>
  </div>

  <div style={{
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s ease'
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = 'translateY(-5px)';
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = 'translateY(0)';
  }}>
    <img 
      src="/img/gallery/electronics-lab.jpg" 
      alt="Laboratoire électronique"
      style={{
        width: '100%',
        height: '300px',
        objectFit: 'cover'
      }}
    />
    <div style={{
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
      padding: '1.5rem',
      color: 'white'
    }}>
      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: '600' }}>
        Laboratoire électronique
      </h3>
      <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.9' }}>
        Développement des systèmes électroniques
      </p>
    </div>
  </div>

  <div style={{
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s ease'
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = 'translateY(-5px)';
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = 'translateY(0)';
  }}>
    <img 
      src="/img/gallery/mechanical-workshop.jpg" 
      alt="Atelier mécanique"
      style={{
        width: '100%',
        height: '300px',
        objectFit: 'cover'
      }}
    />
    <div style={{
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
      padding: '1.5rem',
      color: 'white'
    }}>
      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: '600' }}>
        Atelier mécanique
      </h3>
      <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.9' }}>
        Fabrication et assemblage des composants
      </p>
    </div>
  </div>

  <div style={{
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s ease'
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = 'translateY(-5px)';
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = 'translateY(0)';
  }}>
    <img 
      src="/img/gallery/software-development.jpg" 
      alt="Développement logiciel"
      style={{
        width: '100%',
        height: '300px',
        objectFit: 'cover'
      }}
    />
    <div style={{
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
      padding: '1.5rem',
      color: 'white'
    }}>
      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: '600' }}>
        Développement logiciel
      </h3>
      <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.9' }}>
        Programmation et intelligence artificielle
      </p>
    </div>
  </div>
</div>

## 🏆 Moments de compétition

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
  margin: '3rem 0'
}}>
  <div style={{
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s ease'
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = 'translateY(-5px)';
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = 'translateY(0)';
  }}>
    <img 
      src="/img/gallery/competition-prep.jpg" 
      alt="Préparation compétition"
      style={{
        width: '100%',
        height: '250px',
        objectFit: 'cover'
      }}
    />
    <div style={{
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
      padding: '1.5rem',
      color: 'white'
    }}>
      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: '600' }}>
        Préparation TRC
      </h3>
      <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.9' }}>
        Derniers réglages avant la compétition
      </p>
    </div>
  </div>

  <div style={{
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s ease'
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = 'translateY(-5px)';
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = 'translateY(0)';
  }}>
    <img 
      src="/img/gallery/robot-testing.jpg" 
      alt="Tests du robot"
      style={{
        width: '100%',
        height: '250px',
        objectFit: 'cover'
      }}
    />
    <div style={{
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
      padding: '1.5rem',
      color: 'white'
    }}>
      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: '600' }}>
        Tests en conditions réelles
      </h3>
      <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.9' }}>
        Validation des performances du robot
      </p>
    </div>
  </div>

  <div style={{
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s ease'
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = 'translateY(-5px)';
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = 'translateY(0)';
  }}>
    <img 
      src="/img/gallery/team-celebration.jpg" 
      alt="Célébration d'équipe"
      style={{
        width: '100%',
        height: '250px',
        objectFit: 'cover'
      }}
    />
    <div style={{
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
      padding: '1.5rem',
      color: 'white'
    }}>
      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: '600' }}>
        Moments de réussite
      </h3>
      <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.9' }}>
        Célébration des victoires et accomplissements
      </p>
    </div>
  </div>
</div>

## 🎓 Vie académique

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
  margin: '3rem 0'
}}>
  <div style={{
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s ease'
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = 'translateY(-5px)';
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = 'translateY(0)';
  }}>
    <img 
      src="/img/gallery/university-campus.jpg" 
      alt="Campus universitaire"
      style={{
        width: '100%',
        height: '250px',
        objectFit: 'cover'
      }}
    />
    <div style={{
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
      padding: '1.5rem',
      color: 'white'
    }}>
      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: '600' }}>
        Campus INSTI
      </h3>
      <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.9' }}>
        Notre environnement d'apprentissage
      </p>
    </div>
  </div>

  <div style={{
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s ease'
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = 'translateY(-5px)';
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = 'translateY(0)';
  }}>
    <img 
      src="/img/gallery/lab-session.jpg" 
      alt="Session de laboratoire"
      style={{
        width: '100%',
        height: '250px',
        objectFit: 'cover'
      }}
    />
    <div style={{
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
      padding: '1.5rem',
      color: 'white'
    }}>
      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: '600' }}>
        Sessions de laboratoire
      </h3>
      <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.9' }}>
        Travaux pratiques et expérimentations
      </p>
    </div>
  </div>
</div>


---
