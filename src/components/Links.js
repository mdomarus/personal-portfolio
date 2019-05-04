import React, { Component } from 'react';
import { Link } from 'gatsby';

const travel = [
  {
    title: 'Berlin',
    link: 'berlin',
  },
  {
    title: 'Paris',
    link: 'paris',
  },
  //   {
  //     title: 'Bali',
  //     link: 'bali',
  //   },
  //   {
  //     title: 'Japan',
  //     link: 'japan',
  //   },
  //   {
  //     title: 'Vietnam',
  //     link: 'vietnam',
  //   },
  {
    title: 'Azores',
    link: 'azores',
  },
  {
    title: 'Sicily',
    link: 'sicily',
  },
//   {
//     title: 'Rome',
//     link: 'rome',
//   },
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
