const express = require('express');
const Database = require('./config/dbConfig');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');
require("dotenv").config();
const authRoutes = require('./routes/auth.routes');
const analyticsRoutes = require('./routes/analytics.routes');
const facilityRoutes = require('./routes/facility.routes');
const serviceRoutes = require('./routes/service.routes');
const userRoutes = require('./routes/user.routes');
const appointmentRoutes = require('./routes/appointment.routes');
const blogRoutes = require('./routes/blog.routes');
const chatbotRoutes = require('./routes/chat.routes');
const reviewRoutes = require('./routes/review.routes');



const app = express();



Database();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/auth',authRoutes);
app.use('/api/analytics',analyticsRoutes);
app.use('/api/facilities', facilityRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/reviews', reviewRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
});