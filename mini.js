const API_KEY = 'YOUR_ALPHA_VANTAGE_API_KEY';

async function fetchStockPrice(ticker) {
  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return parseFloat(data['Global Quote']['05. price']);
}
