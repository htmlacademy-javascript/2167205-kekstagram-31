import { posting } from './data.js';
import { renderPhotos } from './thumbnails.js';
import './post-modal.js';
const data = posting();
renderPhotos(data);
