import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  render() {
    const { isMobile } = this.props;

    return (
      <div>
        <form>
          <input type="email" name="email" />
          <input type="password" name="password" />
        </form>
      </div>
    );
  }
}

App.propTypes = {
  isMobile: PropTypes.bool.isRequired
};
