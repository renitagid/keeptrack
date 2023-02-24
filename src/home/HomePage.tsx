//type of HomePage does not need to be defined because it is a functional component that returns JSX.
function HomePage() {
  return (
    <div style={{backgroundImage:"url(assets/landingpage.jpeg)", backgroundRepeat:"no-repeat", backgroundSize:"100%, 100%", objectFit:"cover", height:"85vh", width:"100%", paddingTop:10, textAlign:"center"}}>
      <h2 style={{fontSize:100, color:"white", fontFamily:"Gloock, serif"}}>Clean California</h2>
      <p style={{fontSize:60, color:"white", fontFamily:"Jost, sans-serif"}}>Park Beautification Projects</p>
      <button style={{fontFamily:"Jost, sans-serif"}}>Projects</button>
      <button style={{fontFamily:"Jost, sans-serif"}}>About Clean CA</button>
    </div>
  );
}

export default HomePage;
