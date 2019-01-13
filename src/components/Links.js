import React, { Component } from 'react';
import { Link } from 'gatsby';

const travel = [
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
  //   {
  //     title: 'Azores',
  //     link: 'azores',
  //   },
  {
    title: 'Sicily',
    link: 'sicily',
  },
//   {
//     title: 'Rome',
//     link: 'rome',
//   },
];

class Links extends Component {
  render() {
    return (
      <ul className="links">
        {travel.map(el => <li key={el.link}><Link to={`/travel/${el.link}`}>{el.title}</Link></li>)}
      </ul>
    );
  }
}

export default Links;
