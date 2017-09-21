import React, { Component } from 'react';

class TopMenu extends Component{
    render(){
        return(
            <div className="item item-10">
                <div className="item item-5">
                        <span className="brand">
                            Cruise
                        </span>
                </div>
                <div className="item item-5" style={{verticalAlign:"bottom"}}>
                    <ul className="menu-list">
                        <li>DASHBOARD</li>
                        <li>MY CRUISE</li>
                        <li className="active top">AGENTS</li>
                        <li>HELP</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TopMenu