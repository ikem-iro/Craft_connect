require('dotenv').config();
const express = require('express');
const cors = require('cors');
const colors = require('colors');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();



const port = 3000 || process.env.PORT;



/**
 * Logs a message indicating that the server is listening on a specific port.
 *
 * @return {void} This function does not return anything.
 */
const start = () => {
    console.log(`Listening on port ${port}`.red.bold);
}



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));


app.listen(port, start);