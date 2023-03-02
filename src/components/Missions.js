import React, { Component } from 'react';
import Title from './Title';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <div className="title-missions">
          <Title headline="Missões" />
        </div>
      </div>
    );
  }
}

export default Missions;
