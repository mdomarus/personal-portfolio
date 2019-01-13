import React from 'react';
import Links from './Links';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <h1>Michał Domarus</h1>
        <h3>Travel</h3>
        <Links />
      </div>
    );
  }
}

export default Sidebar;
