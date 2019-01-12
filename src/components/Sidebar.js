import React from 'react';

class Sidebar extends React.Component {
  render() {
    const now = new Date();
    const year = now.getFullYear();
    return (
      <div className="sidebar">
        <h1>Michał Domarus</h1>
        <h3>Travel</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        <div className="copyright">{`©${year} Michał Domarus`}</div>
      </div>
    );
  }
}

export default Sidebar;
