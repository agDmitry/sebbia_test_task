import React from 'react';
import { Category as ICategory } from 'app/types/api';
import store from 'app/store';
import { SelectCategory } from 'app/store/types/actions';
import './style';

interface Props {
  category: ICategory;
}

export default class Category extends React.PureComponent<Props> {
  handleClick = () => store.dispatch<SelectCategory>( {
    type: 'SELECT_CATEGORY',
    category: this.props.category,
  } );
  render () {
    let
      {
        props: {
          category,
        },
        handleClick,
      } = this;

    return <div 
      className='Category LinkAlike'
      onClick={handleClick}
    >{category.name}</div>;
  }
}