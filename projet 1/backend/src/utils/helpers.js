exports.formatResponse = (success, data, message = '') => {
  return {
    success,
    message,
    ...data,
    timestamp: new Date()
  };
};


exports.cleanObject = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};


exports.generateCode = (length = 6) => {
  return Math.random().toString(36).substring(2, length + 2).toUpperCase();
};

exports.isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

exports.formatDate = (date) => {
  return new Date(date).toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

exports.calculatePercentage = (value, total) => {
  if (total === 0) return 0;
  return Math.round((value / total) * 100);
};


exports.getPagination = (page, limit) => {
  const pageNum = parseInt(page) || 1;
  const limitNum = parseInt(limit) || 10;
  const skip = (pageNum - 1) * limitNum;
  
  return { skip, limit: limitNum, page: pageNum };
};
