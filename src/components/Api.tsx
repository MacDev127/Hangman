import Axios from 'axios';
import { useState } from 'react';

interface CatFactResponse {
  fact: string;
}
const Api = () => {
  const [fact, setFact] = useState<string>('');

  const getCatFact = (): void => {
    const URL = 'https://catfact.ninja/fact';

    Axios.get<CatFactResponse>(URL)
      .then((response) => {
        setFact(response.data.fact);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <>
      <div>
        <h1>Get a Random Cat fact</h1>
        <h2>{fact}</h2>
        <button onClick={getCatFact}>Get Fact</button>
      </div>
    </>
  );
};

export default Api;
