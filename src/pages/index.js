import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Page from '../components/Page';

class Slider extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  state = {
    currentSlide: 0,
  };

  componentDidMount() {
    this.setState({
      timer: setInterval(() => this.cycleImage(), 4000),
    });
  }

  componentWillUnmount() {
    const { timer } = this.state;
    clearInterval(timer);
  }

  cycleImage = () => {
    const { data } = this.props;
    const imagesCount = data.images.edges.length;
    this.setState(prevState => ({
      currentSlide:
        prevState.currentSlide === imagesCount - 1 ? 0 : prevState.currentSlide + 1,
    }));
  };

  render() {
    const { currentSlide } = this.state;
    const { data } = this.props;
    return (
      <Page>
        <div className="slideshow">
          {data.images.edges.map((el, index) => {
            const classes = index === currentSlide
              ? 'image image--active'
              : 'image';
            return (
              <Img key={el.node.originalName} className={classes} fluid={el.node.childImageSharp.fluid} />
            );
          })}
        </div>
      </Page>
    );
  }
}

export default Slider;

export const query = graphql`
  query {
    images: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativePath: { regex: "/slideshow/" }
      }
      sort: { order: ASC, fields: [name] }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 2048) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
            }
          }
        }
      }
    }
  }
`;
