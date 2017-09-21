import React, {Component} from 'react';
import Content from "../components/Content";
import {connect} from 'react-redux';
import {addResource} from "../actions/index";
import {removeResource} from "../actions/index";
import {toggleForm} from "../actions/index"
import {setVisibility} from "../actions/index";
import {bindActionCreators} from 'redux';
import TopMenu from "../components/TopMenu";
import SideBox from "../components/SideBox";


class CruiseList extends Component{

    render(){

        let cruiseList = this.props.cruiseList;
        let budNb=0, idleNb=0;

        for(let i=0;i<cruiseList.length;i++){
            if(cruiseList[i].section === "building"){
                budNb++;
            }else if(cruiseList[i].section === "idle"){
                idleNb++;
            }
        }
        return(
            <div>
                <TopMenu/>
                <div className="item item-10 content-box">
                    <div className="item item-10 content-header">
                        <div className="item">
                            <h2>Agents</h2>
                        </div>
                        <div className="item">
                            <ul className="cruise-filter">
                                {this.props.filters.map((filter) =>
                                    <Filter key={filter} filter={filter} setVisibility={this.props.setVisibility} visibilityFilter={this.props.visibilityFilter}/>
                                )}
                            </ul>
                        </div>

                    </div>
                    <div className="item item-10 content-body">

                        <div className="item item-7" style={{borderRight:"2px solid black",minHeight:"500px"}}>
                            <ul className="cruise-list" style={{padding:"0"}}>
                                {cruiseList.map((cruise) =>
                                    <Cruise key={cruise.id} id={cruise.id} visibilityFilter={this.props.visibilityFilter} cruise={cruise} formState={this.props.formState} toggleForm={this.props.toggleForm} resources={this.props.resources} addResource={this.props.addResource} removeResource={this.props.removeResource}/>
                                )}
                            </ul>
                        </div>
                        <SideBox budNb={budNb} idleNb={idleNb}/>
                    </div>
                </div>
            </div>


        )
    }
}

class Cruise extends Component{

    render(){
        let input;

        let cruise = this.props.cruise;

        let color;
        if(cruise.section==="idle"){
            color = "#cce8b5"
        }else {
            color = "#fffbb9"
        }
        const cruiseBackgourn={
            background: color
        };

        let display;
        if(this.props.visibilityFilter === "All" || this.props.visibilityFilter === cruise.type){
            display = "block";
        }else {
            display = "none";
        }
        const listDisplay = {
            display: display
        };

        return(
            <li style={listDisplay} className="cruise-item">
                <div className="cruise-item-inner" style={cruiseBackgourn}>
                    <div className="item item-1" style={{padding: "10px 0",height: "100%"}}>
                        <span className="circle"></span>
                    </div>
                    <div className="item item-9" style={{verticalAlign: "top",margin: "10px 0"}}>
                        <div className="item item-10" style={{padding:"5px 0"}}>
                            <div className="item">
                                <b>{cruise.name}</b>
                            </div>
                            <div className="item" style={{marginLeft:"10px",fontSize:"12px"}}>
                                | <b>{cruise.section}</b> | <b>{cruise.ipAddress} </b>| <b>{cruise.src}</b>
                            </div>
                        </div>

                        <div className="item item-10">
                            <div className="item item-10">
                                <div className="item">
                                    <a onClick={this.props.toggleForm.bind(this,this.props.id)} style={{cursor: "pointer", textDecoration: "underline"}}>+ Specify Resources</a> | Resources:
                                </div>
                                <div className="item" style={{paddingLeft: "5px"}}>
                                    <Content id={this.props.id} resources={this.props.resources[this.props.id - 1]} removeResource={this.props.removeResource} />
                                </div>
                            </div>
                            <form style={{display:this.props.formState[this.props.id-1]?"block":"none"}} className="triangle-border top resource-form" onSubmit={e=>{
                                e.preventDefault();
                                if(!input.value.trim()){return}
                                this.props.addResource(this.props.id,input.value);
                                input.value = "";
                            }}>
                                <div className="item item-10" style={{marginBottom:"10px"}}>
                                    (separate multiple resources name with commas)
                                </div>
                                <div className="item item-10">
                                    <input style={{width: "100%"}} type="text" ref={node => {input=node}} />
                                </div>
                                <div className="item item-10" style={{marginTop:"15px"}}>
                                    <button className="form-button" type="submit" onClick={this.props.toggleForm.bind(this,this.props.id)}>
                                        Add Resources
                                    </button>
                                    <button type="reset" onClick={this.props.toggleForm.bind(this,this.props.id)} className="form-button">
                                        Close
                                    </button>
                                </div>
                                <br/>
                            </form>
                        </div>

                    </div>
                </div>
            </li>
        )
    }
}

class Filter extends Component{
    setClass(filter,visibilityFilter){
        let listClass="";
        if(filter === visibilityFilter){
            listClass = "active";
        }
        return listClass
    }
    render(){
        return(
            <li className={this.setClass(this.props.filter,this.props.visibilityFilter)} onClick={this.props.setVisibility.bind(this,this.props.filter)}>
                {this.props.filter}
            </li>
        )
    }
}

function mapStateToProps(state) {
    return {
        cruiseList: state.cruiseList,
        resources: state.resources,
        formState: state.formState,
        visibilityFilter: state.visibilityFilter,
        filters: state.filters
    };
}

function  matchDispatchToProps(dispatch){
    return bindActionCreators({
        addResource: addResource,
        removeResource:removeResource,
        toggleForm:toggleForm,
        setVisibility: setVisibility
    },dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CruiseList)