import express from "express";
import getdata from "../Controllers/GetData.js";
import getonedata from "../Controllers/GetOneData.js";
import postdata from "../Controllers/PostData.js";
import UpdateData from "../Controllers/UpdateData.js";
import DeleteData from "../Controllers/DeleteData.js";
const router= express.Router()
router.post('/created',postdata)
router.get('/getdata',getdata)
// router.post('/getone',getonedata);
router.put('/update',UpdateData)
router.delete('/deleted/:_id',DeleteData)
export default router;