import '../css/main.scss';
import searchForm from './form';

const content = document.getElementById('content');
content.appendChild(searchForm);
const searchResults = document.createElement('div');
searchResults.id = 'search-results';
content.appendChild(searchResults);