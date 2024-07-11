const generateAccessToken = require("../Utils/helpers");

function handleWebhook(req, res) {
  const body = req.body;
  // Your webhook logic here
  res.status(200).json({ message: "Webhook received successfully", body });
}

function getToken(req, res) {
  const token = generateAccessToken(req.method, req.url);
  return res.status(200).json({ message: `here is your token`, token });
}

module.exports = {
  handleWebhook,
  getToken,
};
