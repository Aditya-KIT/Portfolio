const fs = require('fs');
const path = require('path');
const imgPath = path.join(__dirname, 'src', 'assets', 'profile.jpeg');
const imgData = fs.readFileSync(imgPath).toString('base64');
const svg = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="circleView">
      <circle cx="100" cy="100" r="100" />
    </clipPath>
  </defs>
  <image width="200" height="200" href="data:image/jpeg;base64,${imgData}" clip-path="url(#circleView)" preserveAspectRatio="xMidYMid slice" />
</svg>`;
fs.writeFileSync(path.join(__dirname, 'src', 'assets', 'profile-circle.svg'), svg);
console.log('done');
