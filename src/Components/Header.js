function Header({count,color}) {
    return (
      <div className="header">
        <h1 style={{color}}>REDUX Project</h1>
        <h3> the cart:{count} </h3>
      </div>
    );
  }
  
  export default Header;
  