import React from 'react';
import styles from './FeatureGrid.module.css';

const FeatureGrid = ({ items, columns = 2 }) => {
  const gridStyle = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };

  return (
    <div className={styles.grid} style={gridStyle}>
      {items.map((item, index) => (
        <div key={index} className={styles.gridItem}>
          <div className={styles.icon}>{item.icon}</div>
          <h4 className={styles.title}>{item.title}</h4>
          <p className={styles.description}>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
