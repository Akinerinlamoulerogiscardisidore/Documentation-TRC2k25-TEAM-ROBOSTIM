import React from 'react';
import styles from './Table.module.css';

const Table = ({ data, headers }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        {headers && (
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} className={styles.headerCell}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={styles.tableRow}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={styles.tableCell}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
