import React from 'react';
import './style';

interface Props {
  title: React.ReactNode;
  onGoBack? ( ...args: any[] ): any;
  className?: string;
}

export default class Panel extends React.Component<Props> {
  render () {
    let
      {
        props: {
          title,
          children,
          onGoBack,
          className,
        },
      } = this;

    return <div className={`Panel${typeof className === 'string' ? ' ' + className : ''}`}>
      <div className='Panel__header'>
        <div className='Panel__header-title-container'>{title}</div>

        {
          typeof onGoBack === 'function' &&
          <div 
            title='Назад'
            className='Panel__header-go-back-btn'
            onClick={onGoBack}
          >
            <i className='fa fa-arrow-left'/>
          </div>
        }
      </div>

      <div className='Panel__content'>{children}</div>
    </div>;
  }
}