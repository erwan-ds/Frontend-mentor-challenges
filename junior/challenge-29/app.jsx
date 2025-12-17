function App() {

  const [dataTime, setDataTime] = React.useState([]);
  const [period, setPeriod] = React.useState("daily");

  React.useEffect(() => {
    fetch("./data.json")
      .then(res => {
        if (!res.ok) {
          throw new Error("Erreur chargement JSON");
        }
        console.log(res.json);
        return res.json();
      })
      .then(data => setDataTime(data))
      .catch(err => console.error(err));
  }, []);
  
  console.log(dataTime);

  return (
    <div className="container">
      <div className="profils">
        <div className="avatarCard">
          <div><img src="./images/image-jeremy.png"></img></div>
          <div className="report" >Report for</div>  
          <div className="name">Jeremy Robson</div> 
        </div>

        <div className="periodSelection">
          <button onClick={() => setPeriod("daily")}>Daily</button>
          <button onClick={() => setPeriod("weekly")}>Weekly</button>
          <button onClick={() => setPeriod("monthly")}>Monthly</button>
        </div>
      </div>

      <div className="cardmap">
        {dataTime.map(d => (
          <DataTime key={d.title} data={d} period={d.timeframes[period]}/>
        ))}
      </div>
      
    </div>

  );
}

const root = ReactDOM.createRoot(
  document.getElementById("react-root")
);

root.render(<App />);