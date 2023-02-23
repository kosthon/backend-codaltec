const multer = require('multer');
const path = require('path');

function uploadFile() {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/documents');
    },
    filename: (req, file, cb) => {
      let extension = file.originalname.slice(
        file.originalname.lastIndexOf('.')
      );
      // cb(null, String(Date.now()) + extension);
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  const upload = multer({ storage: storage }).single('file');
  return upload;
}

module.exports = uploadFile;
