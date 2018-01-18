import React from 'react';
import store from 'app/store';
import { ChangeNewsPage } from 'app/store/types/actions';
import Button from './Button';
import './style';

interface Props {
  page: number;
  isNextPageExists: boolean;
}

export default class NewsPagination extends React.PureComponent<Props> {
  handlePrevPageBtnClick = () => store.dispatch<ChangeNewsPage>( {
    type: 'CHANGE_NEWS_PAGE',
    page: this.props.page - 1,
  } );
  handleNextPageBtnClick = () => store.dispatch<ChangeNewsPage>( {
    type: 'CHANGE_NEWS_PAGE',
    page: this.props.page + 1,
  } );
  render () {
    let
      {
        props: {
          page,
          isNextPageExists,
        },
        handlePrevPageBtnClick,
        handleNextPageBtnClick,
      } = this,
      isPrevPageExists = page > 0;

    return <div className='News-Pagination'>
      <Button
        direction='left'
        isDisabled={!isPrevPageExists}
        onClick={handlePrevPageBtnClick}
      />

      <Button
        direction='right'
        isDisabled={!isNextPageExists}
        onClick={handleNextPageBtnClick}
      />
    </div>;
  }
}