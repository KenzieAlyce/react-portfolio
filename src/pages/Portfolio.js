import 'bootstrap/dist/css/bootstrap.min.css';
import foodSearch from '../assets/images/portfolio-1.png';
import workdayPlanner from '../assets/images/workdayPlanner.png';
import codeRefactor from '../assets/images/codeRefactor.png';
function Portfolio(props) {
    return (
    
           <div className="container">
              <div className="float-start" style={{width:'50rem', backgroundColor:'black'}}>
                <img className="center card-img-top img-fluid.max-width:100%" style={{width: 400, height: 400}} src={foodSearch} alt="Portfolio Graphic" />
                <div className="card-body float-start">
                  <p className="card-text">
                    <a href="https://sfinck.github.io/food-search-gp/"> </a></p><h1 className="offset-2 navbar-brand" style={{color: 'darkslategray'}}><a href="https://sfinck.github.io/food-search-gp/">Food for Comfort</a></h1><a href="https://sfinck.github.io/food-search-gp/"> </a><a className="offset-1"> </a> 
                  <a href="https://github.com/sfinck/food-search-gp">
                    Project Repository</a> <p />
                </div>
              </div>
              <div className="float-left" style={{width: '50rem', backgroundColor: 'black'}}>
                <img classname="center card-img-top img-fluid.max-width:100%" style={{width: 400, height: 400}} src={workdayPlanner} alt="Planner image" />
                <div classname="card-body float-start">
                  <div classname="card-text">
                    <a href="https://kenziealyce.github.io/planner/">
                      <h5 classname="card-title" style={{color: 'darkslategray'}}>Work Day Planner</h5> </a>
                    <a style={{color: 'darkslategray'}} href="https://github.com/KenzieAlyce/planner"> Project Repository</a>
                  </div>
                </div>
                <div classname="card float-start" style={{width: '50rem', backgroundColor: 'black'}}>
                  <img classname="center card-img-top img-fluid.max-width:100%" style={{width: 400, height: 400}} src={codeRefactor} alt="Portfolio Image" />
                  <div classname="card-body">
                    <p classname="card-text">
                      <a href="https://KenzieAlyce.github.io/homework-1/"> </a></p><h1 classname="offset-2 navbar-brand" style={{color: 'black'}}><a href="https://KenzieAlyce.github.io/homework-1/">Horiseon Page</a></h1><a href="https://KenzieAlyce.github.io/homework-1/"> </a><a classname="offset-1"> </a> 
                    <a href="https://github.com/KenzieAlyce/homework-1">
                      Project Repository</a> <p />
                  </div>
                </div>
                );
               
              </div>
            </div>
          );
        }
     
  
  export default Portfolio;