import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './category-tree.css';

class Category extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.categories.map((category, key) => (
                    <div styleName="category" key={key}>
                        <div styleName="category-right">
                            <span styleName="icomoon icon-bin icon-action"></span>
                            <span styleName="icomoon icon-plus icon-action"></span>
                        </div>
                        <div styleName="category-left icon-action">
                            <span styleName="header">{category.name}</span>
                            <span styleName="icomoon icon-pen icon-action"></span>
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
            children: []
        }, {
            name: 'Category 2',
            children: []
        }, {
            name: 'Category 2',
            children: []
        }
    ]
};

export default CSSModules(Category, styles, {allowMultiple: true});
