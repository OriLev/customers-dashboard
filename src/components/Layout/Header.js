import React from 'react';
import './styles.css';

export const Header = ({ activeUsers }) => (
  <header className="appHeader">
    <h1>
      User Management <span> [{activeUsers} active users]</span>
    </h1>
  </header>
);
