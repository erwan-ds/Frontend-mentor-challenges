function DataTime({ data, period }) {



  return (
    <div className={"dataCard " + data.title }>
        
        <div className="dataContainer">
            
            <div className="title">{data.title} <img src="./images/icon-ellipsis.svg"></img></div>   
            <div > <span className="current">{period.current}hrs</span>  <span className="previous"> Last Week - {period.previous}hrs</span></div> 
        
        </div>
    </div>
  );
}