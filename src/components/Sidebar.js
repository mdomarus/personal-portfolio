import React from 'react';
import { Link } from 'gatsby';
import Links from './Links';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <h1><Link to="/">Michał Domarus</Link></h1>
        <h2>Travel</h2>
        <Links />
        <a href="https://www.instagram.com/mdomarus/" target="_blank" rel="nofollow noopener noreferrer">Instagram</a>
      </div>
    );
  }
}

export default Sidebar;
