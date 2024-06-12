import './App.css'

const style={
  // border:'6px solid blue',
  height:"600px",
  width:'500px',
  alignItems:'center',
  borderRadius:'20px',
  margin:'auto',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  marginTop:'30px'
  }

  const img_style={
    height:"250px",
    width:'500px',
    borderRadius:'15px',
    }
    const skill={
      display:'flex',
      margin:'0px 54px',
      marginTop: '-25px'
    }
function App() {
  return (
    <>
      <div className="card" style={style}>
        <img src='https://th.bing.com/th/id/OIP.Y_MV3yyRSU5bedBiP7L23AAAAA?w=440&h=440&rs=1&pid=ImgDetMain' alt='img' style={img_style} />

        <h1 style={{textAlign: "center", color:"red"}}>BOB</h1>

        <p style={{textAlign: "center",padding:'0px 90px',fontFamily:'cursive',fontSize:'20px'}}>A front-end developer is someone who works on software, such as desktop or mobile websites, that users interact with. Specifically, they focus on the side of technology that users touch and see—the front end. </p>
        <div style={skill}>
        <p style={{backgroundColor:"#b1bded",borderRadius:'10px',width:'130px',height:'30px',textAlign:'center'}}>React💪 </p>
        <p style={{backgroundColor:"#b1edbd",borderRadius:'10px',width:'222px',height:'30px',textAlign:'center'}}>HTML+CSS💪 </p>
        <p style={{backgroundColor:"#d8edb1",borderRadius:'10px',width:'193px',height:'30px',textAlign:'center'}}>JavaScript💪 </p>
        <p style={{backgroundColor:"#edb1b1",borderRadius:'10px',width:'131px',height:'30px',textAlign:'center'}}>Svelte💪 </p>
        </div>
      </div>
    </>
  );
}

export default App;
