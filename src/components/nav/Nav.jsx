import React, { PureComponent } from 'react';

class Nav extends PureComponent {

  render() {
    return (
      <nav className="nav">
        <div className="nav-bar">
          <span className="nav-logo">
            <i className="fas fa-leaf"></i>
          </span>
          <span className="nav-title">My Habits</span>
          <span className="nav-count" data-testid='total-count'>{this.props.totalCount}</span>
        </div>
      </nav>
    );
  }
}

export default Nav;