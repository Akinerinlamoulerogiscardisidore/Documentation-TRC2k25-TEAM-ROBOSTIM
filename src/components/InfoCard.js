import React from 'react';
import styles from './InfoCard.module.css';

const InfoCard = ({ title, children, type = 'info', icon }) => {
  const cardClass = `${styles.card} ${styles[type]}`;
  
  return (
    <div className={cardClass}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default InfoCard;
