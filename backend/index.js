import express from "express";
import cors from "cors";
import { PrismaClient } from "./generated/prisma/index.js";
import categoryRouter from "./routes/categoryRouter.js";

const app = new express();
const PORT = process.env.PORT || 4000;

const prisma=new PrismaClient();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:4000", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.get('/', (req, res) => {
    res.send('College Allocation Database Management System API');
});

app.use('/category',categoryRouter);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});