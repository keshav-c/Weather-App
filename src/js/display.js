const clearResults = () => {
  const resultsDiv = document.getElementById('search-results');
  resultsDiv.innerHTML = '';
  return resultsDiv;
};

const showResults = (data) => {
  const resultsDiv = clearResults();
  const formattedData = document.createElement('pre');
  formattedData.textContent = JSON.stringify(data, undefined, 2);
  resultsDiv.appendChild(formattedData);
};

const showLoading = () => {
  const resultsDiv = clearResults();
  const message = document.createElement('p');
  message.textContent = 'Loading...';
  resultsDiv.appendChild(message);
};

export { showResults as default, showLoading };