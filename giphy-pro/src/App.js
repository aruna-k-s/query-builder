
import './App.css';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { useState } from 'react';
import Error from './components/Error';
import GifList from './components/GifList';
import SuggestionList from './components/SuggestionList';


const giphy = new GiphyFetch("BefYsaUfNibufcFI0CWoBEJr7n9g3vvk");

function App() {


  const [text, setText] = useState('')
  const [results, setResults] = useState([])
  const [err, setErr] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [pageNo, setPageNo] = useState(1);
  const [timer, settimer] = useState('')
  const [autoCompleteData, setAutoCompleteData] = useState([])

  const handleInput = (e) => {
    setText(e.target.value);
    clearTimeout(timer);

    settimer(setTimeout(() => {
      autoSuggestion(e.target.value);
    }, 500));
  }

  const handleSubmit = (e) => {
    if (text.length === 0) {
      setErr(true)
      return
    }
    apiCall(e || text)
    setErr(false);
    setAutoCompleteData([]);
  }

  async function apiCall(text) {
    const res = await giphy.search(text, { offset: pageNo, limit: 20 })
    setResults(res.data)
  }

  const fetchMore = async () => {
    setPageNo(pageNo + 1);
    const res = await giphy.search(text, { offset: (pageNo + 1), limit: 20 })
    if (res.pagination.total_count <= (20 * res.pagination.offset)) {
      setHasMore(false);
    }
    if (res.data.length > 0) {
      setResults([...results, ...res.data]);
    }
  }

  const autoSuggestion = async (text) => {
    let res = await fetch('https://api.giphy.com/v1/gifs/search/tags' + '?api_key=BefYsaUfNibufcFI0CWoBEJr7n9g3vvk&q=' + text + '&limit=25&offset=0&rating=g&lang=en', {
      method: 'GET',
      api_key: 'BefYsaUfNibufcFI0CWoBEJr7n9g3vvk'
    }).then(result => {
      return result.json();
    }).then(result => {
      setAutoCompleteData(result.data.map(ele => ele.name));
    });
  }

  const handleSelection = (e) => {
    setText(e.target.textContent);
    handleSubmit(e.target.textContent);
  }

  return (
    <div className="App">
      <h1>Gifs From Giphy</h1>
      <div className="search-box">
        <div>
          <input
            className='input-field'
            value={text}
            onChange={handleInput}
            onKeyDown={(e) => e.key === 'Enter' ? handleSubmit() : ''} />
          <SuggestionList
            className="suggestion-box"
            list={autoCompleteData}
            handleSelection={handleSelection} />
        </div>
        <button className='submit-btn' onClick={handleSubmit}>Submit</button>
      </div>
      <Error isError={err} text='need length longer than 0 for input' />

      {results &&
        <GifList
          gifs={results} getMoreGifs={fetchMore} hasMore={hasMore} />
      }
    </div>
  );
}

export default App;
