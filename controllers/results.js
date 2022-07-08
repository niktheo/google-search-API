// Import Packages
const express = require('express')
const router = express.Router()
const Results = require('../models/results.js')
// Create POST controller
router.post('/', async (req, res, next) => {
  try {
    let results = await Results.find({
      // e.description.includes(req.body.searchTerms)
      $or: [
        { title: { $regex: req.body.searchTerms, $options: 'i' } },
        { url: { $regex: req.body.searchTerms, $options: 'i' } },
        { description: { $regex: req.body.searchTerms, $options: 'i' } },
        { links: { url: { $regex: req.body.searchTerms, $options: 'i' } } }
        // { links: [{ title: { $regex: req.body.searchTerms, $options: 'i' } }] }
      ]
    })


  // res.render('results', { results })
})
router.get('/', (req, res) => {
  let resultsarr = []
  res.render('results', { resultsarr })
})

// Export module
module.exports = router
