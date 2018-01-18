import React from 'react';
import { Article as IArticle } from 'app/types/api';
import store from 'app/store';
import { SelectArticle } from 'app/store/types/actions';
import './style';

interface Props {
  article: IArticle;
}

export default class NewsArticle extends React.PureComponent<Props> {
  handleClick = ( event: React.MouseEvent<HTMLDivElement> ) => {
    event.preventDefault();

    store.dispatch<SelectArticle>( {
      type: 'SELECT_ARTICLE',
      article: this.props.article,
    } );
  };
  render () {
    let
      {
        props: {
          article,
        },
        handleClick,
      } = this;

    return <div 
      className='News-Article'
      onClick={handleClick}
    >
      <div className='News-Article__header'>
        <span>{article.title}</span>
        <span>{new Date( article.date ).toLocaleString()}</span>
      </div>

      <div className='News-Article__content'>
        {article.shortDescription}
      </div>
    </div>;
  }
}