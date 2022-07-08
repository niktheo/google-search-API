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

    {
      title: 'JS tutorials',
      description:
        'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.While it is most well-known as scripting language for Web pages CouchDB and AdobeAcrobat',
      url: 'developer.mozilla.org',
      links: [
        {
          title: 'JavaScript Operator',
          url: 'https://www.w3schools.com/js'
        },
        {
          title: 'JavaScript Code',
          url: 'https://www.w3schools.com/js'
        },
        {
          title: 'JavaScript Meaning',
          url: 'https://www.w3schools.com/js'
        }
      ]
    },
    {
      title: 'JavaScript-Wikipedia',
      description:
        'JavaScript often abbrevated as JS, is a programming language that conforms to ECMAScript specification. JavaScript is a high-level, often just',
      url: 'en.wikipedia.org',
      links: [
        {
          title: 'JavaScript Online',
          url: 'https://www.w3schools.com/js'
        },
        {
          title: 'JavaScript Definition',
          url: 'https://www.w3schools.com/js'
        }
      ]
    }
  ]

  let resultsArray = results.filter(e =>
    e.description.includes(req.body.searchTerms)
  )
  res.render('results', { results: resultsArray })
  // res.render('results', { results })
})
router.get('/', (req, res) => {
  let resultsarr = []
  res.render('results', { resultsarr })
})

// Export module
module.exports = router
