import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './category-tree.css';

import tree from '../../helpers/tree.js';

class Category extends React.Component {
    constructor(props) {
        super(props);
    }

    categoryDOM(category, key, options={paddingLeft: 0}) {
        return (
            <div styleName="category-tree">
                Add padding left here!
                <!-- TODO: rename to category-container -->
                <div styleName="category" key={key}>
                    <input type="checkbox" styleName="show-subcategories"/>
                    <div styleName="header">
                        {category.name}
                    </div>
                    <div styleName="icomoon icon-pen icon-action inline-icon"></div>
                    <div styleName="aligned-right">
                        <div styleName="icomoon icon-bin icon-action"></div>
                        <div styleName="icomoon icon-plus icon-action"></div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        {tree.treeTraverse()}
        return (
            <div styleName="category-tree">
                {this.props.categories.map((category, key) => (
                    <div styleName="category" key={key}>
                        <input type="checkbox" styleName="show-subcategories"/>
                        <div styleName="header">
                            {category.name}
                        </div>
                        <div styleName="icomoon icon-pen icon-action inline-icon"></div>
                        <div styleName="aligned-right">
                            <div styleName="icomoon icon-bin icon-action"></div>
                            <div styleName="icomoon icon-plus icon-action"></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}


Category.defaultProps = {
    categories: [
        {
            name: 'Category 1',
            categories: []
        }, {
            name: 'Category Lorem ipsum dolor sit amet consequentium Lorem ipsum dolor sit amet consequentium Lorem ipsum dolor sit amet consequentium',
            categories: []
        }, {
            name: 'Category 3',
            categories: [
                {
                    name: 'Category 3_1',
                    categories: [
                        {
                            name: 'Category 3_1_1'
                        }, {
                            name: 'Category 3_1_2'
                        }
                    ]
                }, {
                    name: 'Category Lorem ipsum dolor sit amet consequentium Lorem ipsum dolor sit amet consequentium Lorem ipsum dolor sit amet consequentium',
                    categories: []
                }, {
                    name: 'Category 3_3',
                    categories: []
                }
            ]
        }
    ]
};

export default CSSModules(Category, styles, {allowMultiple: true});
