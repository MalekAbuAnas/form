import { useState } from "react";
import axios from "axios";

function FormField({ label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input type="number" value={value} onChange={onChange} />
    </div>
  );
}

function App() {
  const [formData, setFormData] = useState({
    totalInvoices: 0,
    totalItemsSold: 0,
    transactionAmount: 0,
    saleTransactionComments: "",
  });

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = () => {
    // إنشاء الكائن JSON
    const data = {
      ...formData,
      transactionDate: new Date().toISOString().slice(0, 10), // تحديد التاريخ تلقائياً
    };

    // إرسال البيانات إلى الخادم
    axios
      .post("YOUR_API_ENDPOINT", data)
      .then((response) => {
        console.log("Data submitted successfully:", response.data);
        // إعادة تعيين الفورم بعد النجاح
        setFormData({
          totalInvoices: 0,
          totalItemsSold: 0,
          transactionAmount: 0,
          saleTransactionComments: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };

  return (
    <div className="App">
      <h1>Sales Form</h1>
      <FormField
        label="Total Invoices"
        value={formData.totalInvoices}
        onChange={(e) => handleChange(e, "totalInvoices")}
      />
      <FormField
        label="Total Items Sold"
        value={formData.totalItemsSold}
        onChange={(e) => handleChange(e, "totalItemsSold")}
      />
      <FormField
        label="Transaction Amount"
        value={formData.transactionAmount}
        onChange={(e) => handleChange(e, "transactionAmount")}
      />
      <div>
        <label>Comments</label>
        <textarea
          value={formData.saleTransactionComments}
          onChange={(e) => handleChange(e, "saleTransactionComments")}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <button
        onClick={() =>
          setFormData({
            totalInvoices: 0,
            totalItemsSold: 0,
            transactionAmount: 0,
            saleTransactionComments: "",
          })
        }
      >
        Cancel
      </button>
    </div>
  );
}

export default App;
