const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const port = 7003;

app.use(express.json());

app.use('/products',productRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
