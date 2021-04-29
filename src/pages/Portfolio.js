function Portfolio(props) {
    return (
    

      <div className="float-start" style={{width: '50rem', backgroundColor:'black'}}>
          <img className="center card-img-top img-fluid.max-width:100%" style = "width:400; height: 400" src="portfolio-1.png" alt="Portfolio Image"/>
          <div className="card-body float-start">
            <p className="card-text">
            <a href = "https://sfinck.github.io/food-search-gp/"> <h1 className="offset-2 navbar-brand" style={{'color:darkslategray'}}>Food for Comfort</h1> <a className = "offset-1"> </a> 
                
              <a href = https://github.com/sfinck/food-search-gp>
          
            Project Repository</a> </p>
          </div>
        </div>
      
        
      
        <div className="float-left" style="width: 50rem; background-color:black">
          <img className="center card-img-top img-fluid.max-width:100%" style = "width:400; height: 400;" src="Screenshot (27).png" alt="Planner image"/>
          <div className="card-body float-start">
            <div className="card-text">
              <a href = "https://kenziealyce.github.io/planner/">
                  <h5 className="card-title" style = color:darkslategray>Work Day Planner</h5> </a>
            
                <a style =color:darkslategray  href = "https://github.com/KenzieAlyce/planner"> Project Repository</a>
              </div>
              </div>
      
      
      
              <div className="card float-start" style="width: 50rem; background-color:black">
                <img className="center card-img-top img-fluid.max-width:100%" style = "width:400; height: 400" src="Screenshot (31).png" alt="Portfolio Image"/>
                <div className="card-body">
                  <p className="card-text">
                  <a href = "https://KenzieAlyce.github.io/homework-1/"> <h1 className="offset-2 navbar-brand" style = "color: black;">Horiseon Page</h1> <a className = "offset-1"> </a> 
                      
                    <a href = https://github.com/KenzieAlyce/homework-1>
                
                  Project Repository</a> </p>
                </div>
              </div>
    );
  }
  
  export default Portfolio;