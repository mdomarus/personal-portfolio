import React from 'react';
import Links from './Links';

class Sidebar extends React.Component {
  render() {
    const now = new Date();
    const year = now.getFullYear();
    return (
      <div className="sidebar">
        <h1>Michał Domarus</h1>
        <h3>Travel</h3>
        <Links />
        <div className="copyright">{`©${year} Michał Domarus`}</div>
      </div>
    );
  }
}

export default Sidebar;
