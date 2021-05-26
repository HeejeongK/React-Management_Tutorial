//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles'
//import createPalette from '@material-ui/core/styles/createPalette';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});


class App extends Component {  

  //생성자 이용해서 처리
 constructor(props){
   super(props);
   this.state = {
     customers: '',
     completed:0
   }
 }
 //state를 초기화 해주기
 stateRefresh = () => {
   this.setState({
     customers: '',
     completed: 0
   });
   //고객데이터 새로 불러와야하기때문에
   this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
 }

  //api서버에 접근해서 데이터를 받아오는 등의 작업을 함 /라이브러리라생명주기존재
  componentDidMount() {
    this.timer = setInterval(this.progress, 20); 
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }

  callApi = async ()=>{
 
    const response = await fetch('/api/customers');
  
    const body = await response.json();
    console.log(body)
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }
   render() {
 const { classes } = this.props; //props변경안될때 
  return (
    <div>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>


      { this.state.customers ? this.state.customers.map(c => {
    return(
      <Customer
      key={c.id}
      id={c.id}
      image={c.image}
      name={c.NAME}
      birthday={c.birthday}
      gender={c.gender}
      job={c.job}
      />
    );
  }) : 
  <TableRow>
  <TableCell colSpan="6" align="center">
   {<CircularProgress 
   className={classes.progress} varient= "determinate" value={this.state.completed}/>  }
    </TableCell>    
  </TableRow>
}
        </TableBody>
      </Table>
    </Paper>
    <CustomerAdd stateRefresh={this.stateRefresh}/>
    
    </div>

  );
}
}



export default withStyles(styles)(App);
