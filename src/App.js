import logo from './logo.svg';

import './App.css';
import {useState} from 'react';


function Article(props){
  return <article>
    <h2 >{props.title}</h2>
    {props.body}
  </article>;
}

function Header(props){
  return <header>
    <h1><a href="/" onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>;
}
function Nav(props){
  const lis=[   ];
  for(let i = 0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a id={t.id} href="/read/{i}" onClick= {
      event=>{
        event.preventDefault();
        props.onFunc1(event.target.id);}}
      >{t.title}</a></li>  )
  }
  return <nav>
    <ol>
    {lis}
    </ol>
  </nav>;
}

function App() {
  // let _mode = useState("WELCOME");
  // console.log('_mode => '+_mode);
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);

  const topics = [
    {id:1,title:'html5',body:'html is ...'}, 
    {id:2,title:'css3', body:'css is ....'}, 
    {id:3,title:'js6' , body:'js is .....'}
  ];
  let content = null;
  if(mode==='WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB2"></Article>;
  } else if(mode==='READ'){
    let title, body;
    for (let i = 0; i<topics.length; i++){
      if(topics[i].id === parseInt(id)){
        title = topics[i].title;
        body = topics[i].body;
        break;
      }
    }
    content = <Article title={title} body={body}></Article>;

  }
  return (
    <div>
      <Header title="안녕" onChangeMode={function(){ setMode('WELCOME');}}></Header>
      <Nav topics={topics} onFunc1={function(_id){  setMode('READ'); setId(_id);}}></Nav>
      {content}   
    </div>
  );
}

export default App;
