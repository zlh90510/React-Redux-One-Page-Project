import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <div>
                <div className="item item-10" style={{fontSize: "12px"}}>
                    <div className="item item-3" style={{float: "right",textAlign: "right"}}>
                        <div className="item item-6">
                            Signed in as <span className="member">Member</span>
                        </div>
                        <div className="item item-4">
                            -> <span className="member">Sign Out</span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Header