import React, { Component } from 'react';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <div className="title-planets">
          <Title headline="Planetas" />
        </div>
      </div>
    );
  }
}

export default SolarSystem;
