import React, {Component, Fragment} from 'react'
import {Grid, Paper, TextField, Typography, Button} from '@material-ui/core'
import EntryList from './EntryList'

class Entry extends Component {

  constructor(props){
    super(props)
    this.state ={
      entry: '',
      allEntries: []
    }
    this.getName = this.getName.bind(this)
    this.plotName = this.plotName.bind(this)

  }

  getName(event){
    this.setState({
      entry: event.target.value
    })
  }

  plotName(event){
    const tempText = document.getElementById('myText').value
    //console.log(tempText)
    this.setState(prevState => ({
      allEntries: [...prevState.allEntries, tempText]
    }

    ))
  }

  render(){
    //console.log(this.state.entry)
    //console.log(this.state.allEntries)
    return(
      <Fragment>
        <Grid container spacing = '8'>
          <Grid item>
            <Paper>
              <TextField id='myText' label='Enter name' 
              onChange={this.getName} />
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <Typography>
              Hello, {this.state.entry}
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper >
            <Button color='secondary' onClick={this.plotName}>
              Click to List Item
            </Button>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <EntryList itemsGiven={this.state.allEntries}/>
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}

export default Entry