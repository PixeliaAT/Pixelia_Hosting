import express from 'express';
import asyncHandler from 'express-async-handler';
import { testController } from '../Controllers/index.js';

const router = express.Router();

//----------------ROUTEN-----------

// Test route
// router.get('/test', asyncHandler(testController));
router.get(
  '/test',
  asyncHandler((req, res) => {
    res.status(200).send("Server says: 'Hello World'");
  }),
);

export default router;
