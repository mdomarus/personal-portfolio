import React, { Component } from 'react';
import { Link } from 'gatsby';

const travel = [
  {
    title: 'Jordan',
    link: 'jordan',
  },
  {
    title: 'Iceland',
    link: 'iceland',
  },
  {
    title: 'Berlin',
    link: 'berlin',
  },
  {
    title: 'Lake District',
    link: 'lake-district',
  },
  {
    title: 'Paris',
    link: 'paris',
  },
  {
    title: 'Azores',
    link: 'azores',
  },
  {
    title: 'Sicily',
    link: 'sicily',
  },
  {
    title: 'Rome',
    link: 'rome',
  },
];

export default class Links extends Component {
  render() {
    return (
      <ul className="links">
        {travel.map(({ link, title }) => <li key={link}><Link to={`/travel/${link}`}>{title}</Link></li>)}
      </ul>
    );
  }
}
