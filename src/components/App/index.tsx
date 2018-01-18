import React from 'react';
import ReactDOM from 'react-dom';
import Store from 'app/store/types';
import store from 'app/store';
import axios from 'axios';
import config from 'app/config';
import { FetchCategories } from 'app/store/types/actions';
import Categories from 'app/components/Categories';
import News from 'app/components/News';
import Article from 'app/components/Article';
import RequestStatus from 'app/components/RequestStatus';
import './style';

export default class App extends React.PureComponent<{}, Store> {
  state = store.getState();
  componentDidMount () {
    store.subscribe( () => this.setState( store.getState() ) );

    store.dispatch<FetchCategories>( { type: 'FETCH_CATEGORIES' } );
  }
  render () {
    let
      {
        state: {
          categories,
          selectedCategory,
          news,
          newsPage,
          selectedArticle,
          requestStatus,
        },
      } = this,
      elemToRender: React.ReactNode = null;

    if ( selectedArticle !== null ) {
      elemToRender = <Article article={selectedArticle}/>;
    } else if (
      Array.isArray( news ) &&
      selectedCategory !== null
    ) {
      elemToRender = <News 
        news={news}
        category={selectedCategory}
        page={newsPage}
      />;
    } else if ( Array.isArray( categories ) ) {
      elemToRender = <Categories categories={categories}/>;
    }

    return <div className='App'>
      {
        requestStatus !== null &&
        <RequestStatus status={requestStatus}/>
      }

      {elemToRender}
    </div>;
  }
}

ReactDOM.render( <App/>, window.document.getElementById( 'react-root' ) );