// Import modules
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Import files
import {appConfig} from './appConfig.js';
import indexRoutes from './routes/index.js';

// Rest object
const app = express();

// Cors
app.use(cors());

// Configure bodyParser for parsing JSON request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add routes after body parser
// Routes
app.use('/api/v1', indexRoutes);

// Test the database connection
app.get('/', (req, res) => {
    res.send({
        data: 'hello world',
        message: 'Play scraper',
    });
});

app.listen(appConfig.port, () => {
    console.log(`Server running on ${appConfig.port}`);
});
