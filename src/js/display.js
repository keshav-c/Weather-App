const showResults = (data) => {
  const resultsDiv = document.getElementById('search-results');
  resultsDiv.textContent = JSON.stringify(data);
};

export default showResults;