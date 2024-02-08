import express from 'express';

const app = express();

// Set static folder
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/issues', async (req, res) => {
  const issues = [
    { id: 1, description: 'Fix loading indicator in button' },
    { id: 2, description: 'change page title after page load' },
  ];

  setTimeout(async () => {
    res.send(`
    <h1 class="text-2xl font-bold my-4">Latest Issues</h1>
    <ul>
      ${issues.map((issue) => `<li>${issue.description}</li>`).join('')}
    </ul>
  `);
  }, 2000);
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
