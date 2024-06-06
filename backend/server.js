const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/save-data', (req, res) => {
  const { likes, views } = req.body; // Extraindo os campos likes e views

  const dataToSave = { likes, views };

  fs.writeFile(path.join(__dirname, 'dados.json'), JSON.stringify(dataToSave, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error saving data', error: err });
    }
    res.status(200).json({ message: 'Data saved successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
