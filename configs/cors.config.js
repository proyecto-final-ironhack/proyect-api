const createError = require('http-errors');
const cors = require('cors');

const allowedOrigins = [process.env.URL_APP,
  'http://localhost:3000'
]

module.exports = cors({
  origin: (origin, next) => {
    const allowed = !origin || allowedOrigins.some(o => o === origin);
    if (allowed) {
      next(null, allowed);
    } else {
      next(createError(401, 'Not allowed by CORS'));
    }
  },
  credentials: true
});