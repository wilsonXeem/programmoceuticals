import { cssSlidesData } from './cssSlidesData.js';

console.log('Total slides:', cssSlidesData.length);
console.log('Last slide ID:', cssSlidesData[cssSlidesData.length - 1].id);
console.log('Slide 113:', cssSlidesData.find(s => s.id === 113)?.title);
console.log('Slide 114:', cssSlidesData.find(s => s.id === 114)?.title);
console.log('Slide 151:', cssSlidesData.find(s => s.id === 151)?.title);