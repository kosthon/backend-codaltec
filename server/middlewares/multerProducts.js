const multer = require('multer');
const path = require('path');

function uploadImage() {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/images');
    },
    filename: (req, file, cb) => {
      let extension = file.originalname.slice(
        file.originalname.lastIndexOf('.')
      );
      // cb(null, String(Date.now()) + extension);
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  const upload = multer({ storage: storage }).single('image');
  return upload;
}

module.exports = uploadImage;
