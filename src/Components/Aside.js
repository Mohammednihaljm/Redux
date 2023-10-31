import randomColor from "randomcolor"

function Aside({color,setColor}) {

  const randomcolor=randomColor()
  const colorChange=()=>{
    setColor(randomcolor)
  }
    return (
      <div className="aside">
        <h2 style={{color}}> Aside</h2>
        <button onClick={colorChange}>Change Color</button>
      </div>
    );
  }
  
  export default Aside;
  