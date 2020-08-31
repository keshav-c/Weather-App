const showResults = (data) => {
  const resultsDiv = document.getElementById('search-results');
  const formattedData = document.createElement('pre');
  resultsDiv.appendChild(formattedData);
  formattedData.textContent = JSON.stringify(data, undefined, 2);
};

export default showResults;