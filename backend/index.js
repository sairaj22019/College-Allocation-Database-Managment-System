import express from "express";
import cors from "cors";

const app = new express();
const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));



app.get('/', (req, res) => {
    res.send('College Allocation Database Management System API');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});