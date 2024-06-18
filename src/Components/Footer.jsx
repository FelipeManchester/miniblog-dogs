import React from 'react';
import styles from './Footer.module.css';
import Dogs from '../Assets/dogs-footer.svg?react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
      <p>
        Projeto criado pela{' '}
        <a href='https://origamid.com' target='_blank'>
          Origamid
        </a>
        . Desenvolvido por{' '}
        <a href='https://linkedin.com/in/felipemanchester' target='_blank'>
          Felipe Manchester
        </a>
      </p>
    </footer>
  );
};

export default Footer;
