const https = require('https');
const fs = require('fs');
const http = require('http');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;
    
    const request = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'Accept': '*/*',
        'Referer': 'https://pixabay.com/'
      }
    }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect
        download(response.headers.location, dest).then(resolve).catch(reject);
      } else if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        fs.unlink(dest, () => reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`));
      }
    });

    request.on('error', (err) => {
      fs.unlink(dest, () => reject(err.message));
    });
  });
}

const targetUrl = 'https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/video-and-audio-content/viper.mp3';

download(targetUrl, 'public/music.mp3')
  .then(() => console.log('Download complete'))
  .catch(err => console.error('Download failed:', err));
