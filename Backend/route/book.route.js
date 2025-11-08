import express from 'express';
//import getbook also from controller
import { getBook } from '../controller/book.controller.js';

const router=express.Router()

//with the help of this expressroter we will do getrequest

router.get("/", getBook);

export default router;