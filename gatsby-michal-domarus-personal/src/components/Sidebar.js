import React from 'react';
import { Link } from 'gatsby';
import Links from './Links';

const Sidebar = () => (
  <nav>
    <h1><Link to="/">Michał Domarus</Link></h1>
    <h2>Travel</h2>
    <Links />
  </nav>
);

export default Sidebar;
