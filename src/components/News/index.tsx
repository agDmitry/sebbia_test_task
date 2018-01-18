import React from 'react';
import Panel from 'app/components/Panel';
import Article from './Article';
import Pagination from './Pagination';
import { 
  Article as IArticle,
  Category,
} from 'app/types/api';
import store from 'app/store';
import config from 'app/config';
import { DeselectCategory } from 'app/store/types/actions';
import './style';

interface Props {
  news: IArticle[];
  category:  Category;
  page: number;
}

export default class News extends React.PureComponent<Props> {
  handleGoBack = () => store.dispatch<DeselectCategory>( {
    type: 'DESELECT_CATEGORY',
  } );
  render () {
    let
      {
        props: {
          news,
          category,
          page,
        },
        handleGoBack,
      } = this;

    return <Panel 
      title={category.name}
      onGoBack={handleGoBack}
      className='News'
    >
      <div className='News__list'>
        {
          news.length === 0
            ? 'Новости отсутствуют'
            : news.map( article => <Article
              key={article.id}
              article={article}
            /> )
        }
      </div>

      <div className='News__footer'>
        <Pagination 
          page={page}
          isNextPageExists={news.length === config.newsPageSize}
        />
      </div>
    </Panel>;
  }
}