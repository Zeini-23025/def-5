
module.exports = (err, req, res, next) => {
  console.error('🔥 Error:', err);
  const status = err.statusCode || 500;
  res.status(status).json({
    message: err.message || 'حدث خطأ في السيرفر',
  });
};
