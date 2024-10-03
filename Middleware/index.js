import colors from 'colors';
import path from 'path';
const dirname = path.resolve();

const ErrorHandler = (err, req, res, next) => {
  console.log(`ERROR =====> ${err.message}`.bgRed.white);
  res.status(500).send('The Server has encountered an error');
};

const NotFoundHandler = (req, res, next) => {
  console.log(`NOT FOUND =====> ${req.originalUrl}`.bgBlue.black);
  res.status(404).sendFile(dirname + '/public/index.html');
};

export { ErrorHandler, NotFoundHandler };
