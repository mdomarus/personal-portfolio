import React from 'react';
import { Link } from 'gatsby';
import Links from './Links';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <h1><Link to="/">Michał Domarus</Link></h1>
        <h3>Travel</h3>
        <Links />
      </div>
    );
  }
}

export default Sidebar;
