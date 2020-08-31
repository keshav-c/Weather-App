import search from './action';
import { showLoading } from './display';

const searchForm = document.createElement('form');
searchForm.id = 'search-form';


const locationLabel = document.createElement('label');
locationLabel.htmlFor = 'location-input';
locationLabel.textContent = 'Location';
const locationInput = document.createElement('input');
locationInput.id = locationLabel.htmlFor;
locationInput.type = 'text';
locationInput.name = 'location';
searchForm.appendChild(locationLabel);
searchForm.appendChild(locationInput);

const submitButton = document.createElement('button');
submitButton.id = 'submit';
const icon = document.createElement('i');
icon.className = 'fi-xnsuhl-search';
submitButton.appendChild(icon);
searchForm.appendChild(submitButton);

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = searchForm.elements.location.value;
  setTimeout(search, 1500, query);
  showLoading();
});

export default searchForm;
