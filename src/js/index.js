import '../css/main.scss';
import apple from '../images/Red_Apple.jpg';

const content = document.getElementById('content');
content.textContent = 'Hello world';

const img = new Image();
img.src = apple;
content.appendChild(img);
