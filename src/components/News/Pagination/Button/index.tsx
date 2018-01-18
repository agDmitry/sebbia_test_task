import React from 'react';
import './style';

interface Props {
  isDisabled: boolean;
  direction: 'left' | 'right';
  onClick: React.EventHandler<React.MouseEvent<HTMLElement>>;
}

// BaseClassName
const BCN = 'News-Pagination-Button';

export default class NewsPaginationButton extends React.PureComponent<Props> {
  render () {
    let
      {
        props: {
          onClick,
          isDisabled,
          direction,
        },
      } = this;

    return <i 
      className={`fa fa-arrow-${direction} LinkAlike ${BCN}${
        isDisabled ? ` ${BCN}--isDisabled` : ''
      }`}
      onClick={isDisabled ? undefined : onClick}
    />;
  }
}