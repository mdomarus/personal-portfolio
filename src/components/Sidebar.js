import React from 'react';
import { Link } from 'gatsby';
import Links from './Links';

const Sidebar = () => (
  <div className="sidebar">
    <h1><Link to="/">Michał Domarus</Link></h1>
    <h2>Travel</h2>
    <Links />
    {window.innerWidth >= 800 && <applause-button class="clap clap--sidebar" color="black" />}
  </div>
);

export default Sidebar;
