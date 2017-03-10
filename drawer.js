import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

const style = {
  height: 500,
  width: 260,
  margin: 20,
  display: 'inline-block',
};


export default class App1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  componentWillReceiveProps(newProps)
  {
    if(newProps!==this.props)
    {
      this.setState({open:this.props.open});
    }
  }


  render() {
    return (

      <div>
        <Drawer width={300} open={this.state.open} >
          <AppBar title="Menu" onLeftIconButtonTouchTap ={this.props.handleToggle}/>

                <List>
                   <ListItem primaryText="Home" />
                   <ListItem primaryText="Workflow" />
                   <ListItem primaryText="LanguagePack" />
               </List>

        </Drawer>
      </div>
    );
  }
}
