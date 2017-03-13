import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
import App1 from './drawer.js';
import axios from 'axios';

const style = {
  width:500,
  margin: 80,
  textAlign: 'center',
};

const chipStyl = {
  chip: {
    margin:4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const iconStyles = {
  marginRight: 24,
};




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false,value:'',chipContent:[],arr_div:[]};
  }

handleRequestDelete(i) {
  var arr=this.state.chipContent;
  arr.splice(i,1);
  this.setState({chipContent:arr});
}

handleEnter(event){
  if(event.charCode == 13){
            this.onClickGo();
         }
}

 handleTouchTap() {
  alert('You clicked the Chip.');
}

  handleToggle = () => this.setState({open: !this.state.open});

    onClickGo(event)
    {


      var input=this.state.value;


/////////////////////////////


var that=this;
    var count=0;
    axios.get("http://localhost:3003/Workflows")
      .then(function(result){
    //  console.log(result.data);
      //console.log("the value of textbox  "+ that.state.value);
      var arr=result.data;
      // console.log("arrrr ");
      // console.log(arr);
      arr.map((a,e)=>{
        // console.log("value of a "+a.tags+"   e "+e);
        var tags_arr=a.tags;
        tags_arr.map((t,i)=>{
          // console.log("value of t "+t+"   i "+i+"   and textbox "+that.state.value);
          if(t.toLowerCase()===input.toLowerCase())
          {
            console.log(a);
            that.setState({arr_div:a})
          //  console.log("Now state is "+that.state.arr_div.tags);
            count++;
          }

        })
      })
      if(count==0)https://github.com/abid72rizvi/myProject
      {
        alert("Sorry no workflow found");
      }
      else {
        var c=0;
        var arr=that.state.chipContent;
        arr.map((d,m)=>{
          if(d===input)
          {
            c++;
          }
        })
        if(c==0)
        arr.push(input);
        that.setState({chipContent:arr});
      }
      });


      //////////////////

  this.setState({value:''});














    }

handleChange(evt)
{
  this.setState({value:evt.target.value})
}

  render() {
    const items = this.state.chipContent.map((item,i) =>{
      return(
        <Chip  key={i}
          onRequestDelete={this.handleRequestDelete.bind(this,i)}
          onTouchTap={this.handleTouchTap.bind(this)}
          style={chipStyl.chip}
        >
          {item}
      </Chip>
      );
    })
  return (
    <div>
           <AppBar
             title="Orchestropus"
             onLeftIconButtonTouchTap ={this.handleToggle.bind(this)}
            />
            <App1 open={this.state.open} handleToggle={this.handleToggle.bind(this)}/>

            <div style={{display: 'flex', justifyContent: 'center'}}>
              <Paper style={style} zDepth={2}>
              <TextField
                    hintText="Search here" value={this.state.value}
                    floatingLabelText="Workflow type"  onChange={this.handleChange.bind(this)} onKeyPress={this.handleEnter.bind(this)}/>
                    <MdArrowForward onClick={this.onClickGo.bind(this)} />
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                      {items}
                    </div>
              </Paper>
            </div>

      </div>
    );
  }
}

export default App;
