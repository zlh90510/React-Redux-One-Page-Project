import React, { Component } from 'react';

class SideBox extends Component{
    render(){
        return(
            <div className="item item-3" style={{verticalAlign:"top",padding:"20px"}}>
                <div className="item item-10">
                    <h3>Summary</h3>
                    <hr/>
                    <table style={{width:"100%"}}>
                        <tbody>
                        <tr>
                            <td>building</td>
                            <td>{this.props.budNb}</td>
                        </tr>
                        <tr>
                            <td>idel</td>
                            <td>{this.props.idleNb}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="item item-10" style={{marginTop:"20px"}}>
                    <h3>History</h3>
                    <hr/>
                    <ul className="history-list">
                        <li>bjstdmngbgr02/Acceptance_test</li>
                        <li>bjstdmngbgr02/Acceptance_test</li>
                        <li>bjstdmngbgr02/Acceptance_test</li>
                        <li>bjstdmngbgr02/Acceptance_test</li>
                        <li>bjstdmngbgr02/Acceptance_test</li>
                        <li>bjstdmngbgr02/Acceptance_test</li>
                        <li>bjstdmngbgr02/Acceptance_test</li>
                        <li>bjstdmngbgr02/Acceptance_test</li>
                        <li>bjstdmngbgr02/Acceptance_test</li>
                        <li>bjstdmngbgr02/Acceptance_test</li>
                        <li>bjstdmngbgr02/Acceptance_test</li>
                        <li>bjstdmngbgr02/Acceptance_test</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SideBox