import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculate from '../logic/Calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const result = Calculate(this.state, buttonName);
    this.setState(result);
  }

  render() {
    const { total, next } = this.state;

    return (
      <>
        <div className="flex-column items-center bg-gray-800 justify-center h-4/5 sm:h-2/3 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-auto">
          <Display total={total} next={next} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </>
    );
  }
}
