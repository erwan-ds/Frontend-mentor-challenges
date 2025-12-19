

function App(){

    const [days, setDays] = React.useState([]);

    React.useEffect(() => {
        fetch("./data.json")
        .then(res => {
            if (!res.ok) {
            throw new Error("Erreur chargement JSON");
            }
            console.log(res.json);
            return res.json();
        })
        .then(data => setDays(data))
        .catch(err => console.error(err));
    }, []);


    console.log(days)
    return(
        <section>
            <header className="head">
                <div className="balance">My balance</div>
                <div className="number">$921.48</div>
                <div className="logo"><img src="./images/logo.svg" alt="" /></div>
                
                
            </header>
            <div className="content">
            <div className="chart">
            <div className="chart__header">Spending - Last 7 days</div>
            <div className="char__weekchart">
                {days.map(day =>(
                    <Day key={day.day} name={day.day} amount={day.amount} />
                ))}
            </div>

            <div className="summary">
                <div className="summary__title">
                Total this month
                </div>   
                <div className="sum__number">$478.33</div>
                <div className="sum__ratio">+2.4%</div>
                <div className="sum__date">from last month</div>
            </div>

            </div>
            </div>
          </section>
        )
        
    

}


const root = ReactDOM.createRoot(
  document.getElementById("react-root")
);

root.render(<App />);