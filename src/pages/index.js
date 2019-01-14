import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Page from '../components/Page';

class Slider extends React.Component {
  state = {
    currentSlide: 0,
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
    const imagesCount = this.props.data.images.edges.length;
    this.setState(prevState => ({
      currentSlide:
        prevState.currentSlide === imagesCount - 1 ? 0 : prevState.currentSlide + 1,
    }));
  };

  render() {
    return (
      <Page>
        <div className="slideshow">
          {this.props.data.images.edges.map((el, index) => {
            const classes = index === this.state.currentSlide
              ? 'image image--active'
              : 'image';
            return (
              <Img key={`img-${index}`} className={classes} fluid={el.node.childImageSharp.fluid} />
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
