import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import '../scss/style.scss';

class Page extends Component {
  static propTypes = {
    children: PropTypes.object,
  };

  render() {
    const { children } = this.props;
    return (
      <div className="page">
        <Sidebar />
        <div className="content">
          {children}
        </div>
      </div>
    );
  }
}

export default Page;
