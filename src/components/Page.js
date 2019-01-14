import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import '../scss/style.scss';

class Page extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    const now = new Date();
    const year = now.getFullYear();

    const { children } = this.props;
    return (
      <React.Fragment>
        <div className="page">
          <Sidebar />
          <div className="content">{children}</div>
        </div>
        <div className="copyright">{`©${year} Michał Domarus`}</div>
      </React.Fragment>
    );
  }
}

export default Page;
