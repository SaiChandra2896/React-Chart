import React,{useState, useEffect} from 'react';
import Chart from './components/Chart';
import axios from 'axios';
import './App.css';

const App = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'RupeeValue',
        data: [],
        backgroundColor:''
      }
    ]
  });
  const [dataState, setDataState] = useState(false);
  const [response, setResponse] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() =>{
    getChartData();
  },[]);

  const getChartData = async() =>{
    try {
      const resData = await axios.get('/api/chart');
      const data = resData.data;

      let dates = [];
      let values = [];
      data.forEach(e => dates.push(e.Date));
      data.forEach(e => values.push(parseInt(e.Price,10)))

      setResponse(resData);
      setChartData({
        labels: dates,
        datasets: [
          {
            label: 'RupeeValue',
            data: values,
            backgroundColor: 'rgba(255, 99, 132, 0.6)' 
          }
        ]
      });
      setDataState(true);
      
    } catch (err) {
      setErrors(err);
    }
  }
  return (
    <div className="container mt-4">
      <h4 className="display-4 text-center mb-4">
          <i className="fab fa-react"></i> React Charts
      </h4>
      {dataState && <Chart data={chartData} title='Doller to INR plot'/>}
    </div>
  );
}

export default App;
