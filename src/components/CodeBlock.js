import React from 'react';
import styles from './CodeBlock.module.css';

const CodeBlock = ({ children, language = 'cpp', title }) => {
  return (
    <div className={styles.codeContainer}>
      {title && <div className={styles.codeTitle}>{title}</div>}
      <pre className={styles.codeBlock}>
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
