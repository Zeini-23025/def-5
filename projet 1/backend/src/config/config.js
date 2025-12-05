module.exports = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/gamification',
  jwtSecret: process.env.JWT_SECRET || 'secret_key_gamification_2024',
  jwtExpire: '7d',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
  env: process.env.NODE_ENV || 'development'
};