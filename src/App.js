import logo from './logo.svg';

import './App.css';

function Header(props){
  return <header>
    <h1><a href="/" onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>;
}


function Article(props){
  return <article>
    <h2 >{props.title}</h2>
    {props.body}
  </article>;
}
function Nav(props){
  const lis=[   ];
  for(let i = 0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href="/read/{i}" onClick= {
      event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);}}
      >{t.title}</a></li>  )
  }
  return <nav>
    <ol>
    {lis}
    </ol>
  </nav>;
}

function App() {
  const topics = [
    {id:1,title:'html5',body:'html is ...'}, 
    {id:2,title:'css3', body:'css is ....'}, 
    {id:3,title:'js6' , body:'js is .....'}
  ];
  return (
    <div>
      <Header title="안녕" onChangeMode={function(){
        alert('안녕');}
    }></Header>
      <Nav topics={topics} onChangeMode={function(id){
        alert(id);
      }}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>       
      <Article title="환영해" body="안녕, 자바스크립트"></Article>          
    </div>
  );
}

export default App;
