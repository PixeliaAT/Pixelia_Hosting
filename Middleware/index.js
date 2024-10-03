import path from 'path';
const dirname = path.resolve();

const ErrorHandler = (err, req, res, next) => {
  console.log(`ERROR =====> ${err.message}`);
  res.status(500).send('The Server has encountered an error');
};

const NotFoundHandler = (req, res, next) => {
  console.log(`NOT FOUND =====> ${req.originalUrl}`);
  res.status(404).sendFile(dirname + '/public/index.html');
};

export { ErrorHandler, NotFoundHandler };
