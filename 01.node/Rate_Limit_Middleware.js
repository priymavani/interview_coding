// rateLimiter.js

const rateLimitMap = new Map();

const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  const currentTime = Date.now();

  const windowSize = 60 * 60 * 1000; // 1 hour in ms
  const maxRequests = 100;

  // Get previous request logs for this IP
  const requestLog = rateLimitMap.get(ip) || [];

  // Filter out old requests beyond the time window
  const recentRequests = requestLog.filter(timestamp => currentTime - timestamp < windowSize);

  // Update the log with only recent requests
  rateLimitMap.set(ip, recentRequests);

  if (recentRequests.length >= maxRequests) {
    return res.status(429).json({
      message: "Too many requests. Please try again after an hour.",
    });
  }

  // Add current request timestamp
  recentRequests.push(currentTime);
  rateLimitMap.set(ip, recentRequests);

  next(); // Proceed to next middleware or route
};

module.exports = rateLimiter;
