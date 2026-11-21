const fs = require('fs');
const path = require('path');

const UPLOAD_DIR = '/home/nebounet/blog/Photos/upload';

function clean() {
  if (fs.existsSync(UPLOAD_DIR)) {
    fs.rmSync(UPLOAD_DIR, { recursive: true });
    console.log('✅ Cleaned:', UPLOAD_DIR);
  } else {
    console.log('Nothing to clean:', UPLOAD_DIR, 'does not exist');
  }
}

clean();