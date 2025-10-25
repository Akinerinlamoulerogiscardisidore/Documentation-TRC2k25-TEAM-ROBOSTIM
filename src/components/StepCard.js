import React from 'react';
import styles from './StepCard.module.css';

const StepCard = ({ step, title, children, icon }) => {
  return (
    <div className={styles.stepCard}>
      <div className={styles.stepHeader}>
        <div className={styles.stepNumber}>{step}</div>
        {icon && <div className={styles.stepIcon}>{icon}</div>}
        <h3 className={styles.stepTitle}>{title}</h3>
      </div>
      <div className={styles.stepContent}>
        {children}
      </div>
    </div>
  );
};

export default StepCard;
