import React, { Component } from 'react';

class Content extends Component {
    render() {
        let resources = this.props.resources;
        return (
            <ul className="resources-list">
                {resources.map(v => <LiItem resource={v} id={this.props.id} key={v} removeResource={this.props.removeResource} />)}
            </ul>
        )
    }

}

class LiItem extends Component {

    render() {
        return (
            <li className="list-item" style={{marginLeft:"5px",fontSize:"12px"}}>
                <span>{this.props.resource}</span>
                <a className="site" onClick={this.props.removeResource.bind(this,this.props.resource,this.props.id)}>
                    <span>x</span>
                </a>
            </li>
        )
    }
}
export default Content