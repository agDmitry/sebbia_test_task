import React from 'react';
import { Article as IArticle } from 'app/types/api';
import Panel from 'app/components/Panel';
import store from 'app/store';
import { DeselectArticle } from 'app/store/types/actions';

interface Props {
  article: IArticle;
}

export default class Article extends React.PureComponent<Props> {
  handleGoBack = () => store.dispatch<DeselectArticle>( {
    type: 'DESELECT_ARTICLE',
  } );
  render () {
    let
      {
        props: {
          article,
        },
        handleGoBack,
      } = this;

    return <Panel
      title={`${new Date( article.date ).toLocaleDateString()} - ${article.title}`}
      onGoBack={handleGoBack}
    >
      <h1>{article.title}</h1>

      {article.shortDescription}

      {
        article.fullDescription === undefined
          ? <h1>Загрузка статьи...</h1>
          : <p dangerouslySetInnerHTML={{ __html: article.fullDescription }}/>
      }
    </Panel>;
  }
}