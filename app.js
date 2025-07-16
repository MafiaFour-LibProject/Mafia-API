// External dependencies
const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

// Internal modules
const Database = require('./config/dbConfig');
const errorHandler = require('./middlewares/errorHandler');

// Route imports
const authRoutes = require('./routes/auth.routes');
const analyticsRoutes = require('./routes/analytics.routes');
const facilityRoutes = require('./routes/facility.routes');
const serviceRoutes = require('./routes/service.routes');
const userRoutes = require('./routes/user.routes');
const appointmentRoutes = require('./routes/appointment.routes');
const blogRoutes = require('./routes/blog.routes');
const chatbotRoutes = require('./routes/chat.routes');
const reviewRoutes = require('./routes/review.routes');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Connect to MongoDB
Database();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Welcome route (root)
app.get("/", (req, res) => {
  res.send("👋 Welcome to the Mafia API! 🕵️‍♂️📚");
});

// Route mounting
app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/facilities', facilityRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/reviews', reviewRoutes);

// Swagger UI setup with safe loading
let swaggerDocument;
try {
  swaggerDocument = YAML.load('./swagger.yaml');
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} catch (err) {
  console.warn('⚠️  Swagger file not found or failed to load:', err.message);
}

// Global error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});



/*
// External dependencies
const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

// Internal modules
const Database = require('./config/dbConfig');
const errorHandler = require('./middlewares/errorHandler');

// Route imports
const authRoutes = require('./routes/auth.routes');
const analyticsRoutes = require('./routes/analytics.routes');
const facilityRoutes = require('./routes/facility.routes');
const serviceRoutes = require('./routes/service.routes');
const userRoutes = require('./routes/user.routes');
const appointmentRoutes = require('./routes/appointment.routes');
const blogRoutes = require('./routes/blog.routes');
const chatbotRoutes = require('./routes/chat.routes');
const reviewRoutes = require('./routes/review.routes');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Connect to MongoDB
Database();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route mounting
app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/facilities', facilityRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/reviews', reviewRoutes);

// Swagger UI setup with safe loading
let swaggerDocument;
try {
  swaggerDocument = YAML.load('./swagger.yaml');
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} catch (err) {
  console.warn('⚠️  Swagger file not found or failed to load:', err.message);
}

// Global error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
*/