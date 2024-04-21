const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/post-daily-sales", async (req, res) => {
  const requestBody = req.body;
  const headers = req.headers; // هنا يتم استلام الهيدرز
  const token = headers.authorization; // هنا يتم استخراج التوكن

  console.log("Received data from frontend:", requestBody);
  console.log("Received headers:", headers);
  console.log("Received token:", token);

  // Perform necessary operations with the received data

  // الآن يمكننا إرسال البيانات إلى API الآخر
  try {
    const otherAPIResponse = await axios.post(
      "https://azmapapimgmtprod1.azure-api.net/bulkSalesinfo/api/BulkSales",
      requestBody,
      { headers }
    );
    console.log("Response from other API:", otherAPIResponse.data);
    res.send("Data received successfully and sent to other API!");
  } catch (error) {
    console.error("Error sending data to other API:", error);
    res.status(500).send("Error sending data to other API");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
