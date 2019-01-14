import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

class Slideshow extends React.Component {
  state = {
    currentSlide: 1,
    totalSlides: 3,
  };

  componentDidMount() {
    this.setState({
      timer: setInterval(() => this.cycleImage(), 3000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  cycleImage = () => {
    this.setState(prevState => ({
      currentSlide:
        prevState.currentSlide === this.state.totalSlides
          ? 1
          : prevState.currentSlide + 1,
    }));
  };

  render() {
    return (
      <StaticQuery
        query={graphql`
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
        `}
        render={data => (
          <div className="slideshow">
            {data.images.edges.map(el => (
              <Img
                key={el.node.childImageSharp.fluid.originalName}
                className="image"
                fluid={el.node.childImageSharp.fluid}
              />
            ))}
          </div>
        )}
      />
    );
  }
}

export default Slideshow;
