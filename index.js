const express = require('express');
const connect = require('./DataBase/db')
const dotenv = require("dotenv")
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middleware/errorMiddleware');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

dotenv.config();

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())


const Port = process.env.PORT  || 8000

app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/openai', require('./routes/openAiroute'))
app.use(errorHandler)

app.listen(Port,async ()=>{
    try {
        await connect;
        console.log(`connected`);
        
    } catch (error) {
        console.log(error);
    }
    console.log(`Lisiting at port ${Port}`);
})
