import React from 'react';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sayHello: this.props.sayHello
        };
        this.handleSayHello = this.handleSayHello.bind(this);
    }

    handleSayHello(e) {
        this.setState({
            sayHello: e.target.checked
        })
    };

    render() {
        return (
            <div className="item">
                <div className="name">{this.props.name}</div>
                <img className={"avatar" + (this.state.sayHello ? ' pleased' : '')} src={this.props.avatarSrc} alt=""/>
                <div className="greeting">{this.props.greeting}</div>
                <div className="user-actions">
                    <label>
                        <input type="checkbox" name="say-hello" checked={this.state.sayHello} onChange={this.handleSayHello}/>
                        Say hello
                    </label>
                </div>
            </div>
        );
    }
}