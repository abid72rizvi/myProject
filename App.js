              import React, { Component } from 'react';
              import './App.css';
              import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
              import Paper from 'material-ui/Paper';
              import Drawer from 'material-ui/Drawer';
              import {List, ListItem} from 'material-ui/List';
              import Subheader from 'material-ui/Subheader';
              import CodeMirror from 'react-codemirror';
              import TextField from 'material-ui/TextField';
              import 'codemirror/lib/codemirror.css';
              import Chip from 'material-ui/Chip';
              import FlatButton from 'material-ui/FlatButton';
              import Dialog from 'material-ui/Dialog';

              import {
                  MorphIcon,
                  CloseButton,
                  NavButton,
                  PlusButton,
              } from 'react-svg-buttons';

              const styleInput={
                borderWidth:0,
                width:100
              };

              const styl = {
                chip: {
                  margin: 0,
                },
                wrapper: {
                  display: 'flex',
                  flexWrap: 'wrap',
                },
              };


              class App extends Component {
                constructor()
                {super();
                  this.state={code:'//code ',open:false,open_language:false,dialogOpen:true,clone:'clone',
                  build:'build',mocha:'mocha',istan:'istanbul',eslint:'eslint',lang:'Language pack',title: '',
                  languagePackFiles:[], title:'title',}
                }

              updateCode(newCode) {
                      this.setState({
                          code: newCode,
                      });
                  }


                handleOpen = () => {
                  this.setState({open: true});
                };

                handleClose = () => {
                  var title = this.state.title
                  var newtodos = this.state.languagePackFiles;
                  newtodos.push({title})
                  this.setState({title:'',languagePackFiles:newtodos})
                  this.setState({open: false})
                };
                handleNewClick(){
                  this.setState({dialogOpen:true});
                }

                handleLanguage()
                 {

                   this.setState({open_language:true});
                 }

                 handleIstanbul()
                 {
                   this.setState({open:true,code:'//'+this.state.istan+' code goes here',title: this.state.istan});
                 }

                 handleEsLint()
                 {
                   this.setState({open:true,code:'//'+this.state.eslint+' code goes here',title: this.state.eslint});
                 }

                 handleBuild()
                 {
                   this.setState({open:true,code:'//'+this.state.build+' code goes here',title: this.state.build});
                 }
                 handleMocha()
                 {
                   this.setState({open:true,code:'//'+this.state.mocha+' code goes here',title: this.state.mocha});
                 }
                 handleClone()
                 {

                   this.setState({open:true,code:'//'+this.state.clone+' code goes here',title: this.state.clone});
                 }
                 handleClear()
                 {
                   this.setState({code:""});

                 }

                 handleSave()
                 {
                   alert('saved successfully!');
                 }

                 handleInputChange(chan)
                 {

                     var filename=chan.target.value;
                     this.setState({title:filename})

                }




                handleChange(event)
                {
                  var name= event.target.name;
                  this.setState({[name]: event.target.value,title:event.target.value});
                }
                render() {
                  var options = {
                        lineNumbers: true,
                    }
                    const actions = [
                      <FlatButton
                        label="Cancel"
                        primary={true}
                        onClick={this.handleClose.bind(this)}
                      />,
                      <FlatButton
                        label="Submit"
                        primary={true}
                        keyboardFocused={true}
                        onClick={this.handleClose.bind(this)}
                      />,
                    ];
                  return (
                    <MuiThemeProvider>
                    <div>
                    <Paper >
                <Drawer width={180}>
                <Subheader onClick={this.handleLanguage.bind(this)}><input type='text' name='lang' value={this.state.lang} onChange={this.handleChange.bind(this)}  style={styleInput}/> <PlusButton size={35} color='#6edd9f' onClick={this.handleOpen.bind(this)}/></Subheader>
                { this.state.open_language ? <List>
                  <ListItem  onClick={this.handleClone.bind(this)}><input type='text' name='clone' value={this.state.clone} onChange={this.handleChange.bind(this)} style={styleInput}/></ListItem>
                  <ListItem   onClick={this.handleBuild.bind(this)}><input type='text' name='build' value={this.state.build} onChange={this.handleChange.bind(this)} style={styleInput}/></ListItem>
                  <ListItem    onClick={this.handleMocha.bind(this)}><input type='text' name='mocha' value={this.state.mocha} onChange={this.handleChange.bind(this)} style={styleInput}/></ListItem>
                  <ListItem   onClick={this.handleEsLint.bind(this)}><input type='text' name='eslint' value={this.state.eslint} onChange={this.handleChange.bind(this)} style={styleInput}/></ListItem>
                  <ListItem  onClick={this.handleIstanbul.bind(this)}><input type='text' name='istan' value={this.state.istan} onChange={this.handleChange.bind(this)} style={styleInput}/></ListItem>
                  </List> : <p></p>}
                </Drawer>

                   { this.state.open ? <div><Paper style={{'width':'85%','float':'right'}}><Chip style={styl} >{this.state.title}</Chip><CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options} />

                   <FlatButton label="Save" primary={true} onClick={this.handleSave.bind(this)} style={{'float':'right','paddingRight':25,}} />
                   <FlatButton label="Clear" primary={true} onClick={this.handleClear.bind(this)} style={{'float':'right'}} />

                   </Paper></div>:<p></p>}


                   </Paper>

                     <Dialog
                       title="FileName"
                       actions={actions}
                       modal={false}
                       open={this.state.open}
                       onRequestClose={this.handleClose.bind(this)}
                     >
                       <TextField value={this.state.title} onChange={this.handleInputChange.bind(this)}/>
                     </Dialog>
                  </div>
                   </MuiThemeProvider>
                  );
                }
              }

              export default App;
