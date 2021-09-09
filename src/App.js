import logo from './logo.svg';
import './App.css';
import react,{useMemo} from 'react';

function App() {
  var ratings = [
    {
      rating: 4,
      name: 'arun'
    },
    {
      rating: 2,
      name: 'lavith'
    }
  ]
  
  const rating = (rate) => {
    return Array(rate)
    .fill(0)
    .map((_,i)=> i+1)
    .map((ids) => (
      <span key={ids}>*</span>
    ))
  }
  return (
    <div className="App">
        {ratings.map(ele => (
        <div>

          <p>{ele.name}</p>
          {rating(ele.rating)}
        </div>
        
        ))}
    </div>
  );
}

export default App;
