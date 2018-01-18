import React from 'react';
import Panel from 'app/components/Panel';
import Category from 'app/components/Category';
import { Category as ICategory } from 'app/types/api';
import './style';

interface Props {
  categories: ICategory[];
}

export default class Categories extends React.PureComponent<Props> {
  render () {
    let
      {
        props: {
          categories,
        },
      } = this;

    return <Panel 
      title='Категории новостей'
      className='Categories'
    >
      {
        categories.map( category => <Category
          key={category.id}
          category={category}
        /> )
      }
    </Panel>;
  }
}