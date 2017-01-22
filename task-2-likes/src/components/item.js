import React from 'react';

export default class Item extends React.Component {

    render() {
        //some calculations
        return (
            <div className="item">
                <div className="name">Nickname</div>
                <img className="avatar pleased" src="http://www.southparkfan.ru/wall/images_large/avatars/001980.jpg" alt=""/>
                <div className="greeting">Glad to see you Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur iure praesentium voluptas. Aperiam commodi cum debitis delectus illo illum inventore minus, nam numquam odio porro possimus provident, quisquam vitae!</div>
                <div className="user-actions">
                    <label><input type="checkbox" name="say-hello"/> Say hello</label>
                </div>
            </div>
        );
    }
}