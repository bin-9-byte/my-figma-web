import React from 'react';
import styles from './Desktop.module.css';

interface NavLinkProps {
  href?: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href = '#', children }) => {
  return (
    <div className={styles.navLink}>
      <a href={href} className={styles.onView} style={{ transition: 'color 0.2s ease' }}>
        {children}
      </a>
    </div>
  );
};

export default NavLink;
