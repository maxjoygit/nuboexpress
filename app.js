const app = require('express')();
const PORT = process.env.PORT || 3000;

app.use('*', (req, res) => {
    res.json({ message: 'Express on Nubo' });
});

app.listen(PORT, () => console.log(`> Ready on http://localhost:${PORT}`));
