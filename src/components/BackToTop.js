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

    handleClick = () => {
      this.setState({
        scrollPos: -1,
        isScrollingUp: false,
      });
    }

    handleScroll = () => {
      this.setState(prevState => ({
        isScrollingUp: prevState.scrollPos > window.scrollY,
        scrollPos: window.scrollY,
      }));
    }

    render() {
      const classes = this.state.isScrollingUp ? 'backToTop backToTop--active' : 'backToTop';
      return (
        <a href="#" className={classes} onClick={this.handleClick}><span role="img" aria-label="back to top"><svg width="24" height="24" className={classes} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 15l-5.247-6.44-5.263 6.44-.737-.678 6-7.322 6 7.335-.753.665z" /></svg></span></a>
      );
    }
}
