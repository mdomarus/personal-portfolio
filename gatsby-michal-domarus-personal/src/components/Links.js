import React from 'react';
import { Link } from 'gatsby';

const travel = [
  {
    title: 'Jordan',
    link: 'jordan/',
  },
  {
    title: 'Iceland',
    link: 'iceland/',
  },
  {
    title: 'Berlin',
    link: 'berlin/',
  },
  {
    title: 'Lake District',
    link: 'lake-district/',
  },
  {
    title: 'Paris',
    link: 'paris/',
  },
  {
    title: 'Israel',
    link: 'israel/',
  },
  {
    title: 'Azores',
    link: 'azores/',
  },
  {
    title: 'Sicily',
    link: 'sicily/',
  },
  {
    title: 'Rome',
    link: 'rome/',
  },
  {
    title: 'Mexico',
    link: 'mexico/',
  },
  {
    title: 'Argentina',
    link: 'argentina/',
  },
];

const Links = () => <ul className="links">
  {travel.map(({ link, title }) => <li key={link}><Link to={`/travel/${link}`}>{title}</Link></li>)}
</ul>

export default Links;
