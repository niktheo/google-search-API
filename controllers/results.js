// Import Packages
const express = require('express')
const router = express.Router()
const Results = require('../models/results.js')
// Create POST controller
router.get('/', async (req, res, next) => {
  try {
    let results = await Results.find({
      // e.description.includes(req.body.searchTerms)
      $or: [
        { title: { $regex: req.query.searchTerms || '', $options: 'i' } },
        { url: { $regex: req.query.searchTerms || '', $options: 'i' } },
        { description: { $regex: req.query.searchTerms || '', $options: 'i' } },
        {
          'links.title': { $regex: req.query.searchTerms || '', $options: 'i' }
        },
        { 'links.url': { $regex: req.query.searchTerms || '', $options: 'i' } }
      ]
    })

    res.json(results)
  } catch (err) {}

  // res.render('results', { results })
})

// Export module
module.exports = router
