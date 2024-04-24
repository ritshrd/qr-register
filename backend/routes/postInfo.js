const express = require('express');
const mongoose = require('mongoose');

const QRCodeSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const QRCode = mongoose.model('QRCode', QRCodeSchema);

const router = express.Router();

router.post('/qrcode', async (req, res) => {
  const { name, description } = req.body;
  const qrCode = new QRCode({ name, description });
  await qrCode.save();
  res.status(201).json(qrCode);
});

module.exports = router;