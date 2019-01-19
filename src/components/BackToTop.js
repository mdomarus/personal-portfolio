import React from 'react';

export default class BackToTop extends React.Component {
    state = {
      isScrollingUp: false,
      scrollPos: null,
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }

    shouldComponentUpdate(nextProps, nextState) {
      return this.state.isScrollingUp !== nextState.isScrollingUp;
    }

    handleScroll = () => {
      this.setState({
        isScrollingUp: this.state.scrollPos > window.scrollY,
        scrollPos: window.scrollY,
      });
    }

    render() {
      const classes = this.state.isScrollingUp ? 'backToTop backToTop--active' : 'backToTop';
      return (
        <a href="#" className={classes}><span role="img" aria-label="back to top">🔝</span></a>
      );
    }
}
