import React from 'react';
import { Menu } from 'semantic-ui-react';

import Starred from "./Starred";
import UserPanel from "./UserPanel";
import DirectMessages from "./DirectMessages";
import Channels from './Channels'

class SidePanel extends React.Component{
    render() {
        const { currentUser,primaryColor } = this.props;


        return(
        <Menu
        size="large"
        inverted
        fixed="left"
        vertical
        style={{background: primaryColor, fontsize: "1.2rem" }}
        >
            <UserPanel primaryColor={primaryColor} currentUser={currentUser}/>
            <Starred currentUser={currentUser}/>
            <Channels currentUser={currentUser} />
            <DirectMessages currentUser={currentUser}/>
        </Menu>
        );
    }
}

export default SidePanel;
