const errorMiddleware = (error, req, res, next) => {
  console.log(error);
  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : 'Internal server error';
  return res.status(statusCode).json({ message });
};

export { errorMiddleware };
