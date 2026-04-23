const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const app = express()

const uri = "mongodb://127.0.0.1:27017/url_shortener"; // local database

mongoose.connect(uri)
  .then(() => console.log("✅ MongoDB connected locally"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.render('index', { shortUrls: shortUrls })
})

app.post('/shortUrls', async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl })

  res.redirect('/')
})

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
  if (shortUrl == null) return res.sendStatus(404)

  shortUrl.clicks++
  shortUrl.save()

  res.redirect(shortUrl.full)
})

// app.listen(process.env.PORT || 5000);
const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.listen(PORT, "0.0.0.0", () => console.log(`Server running`));