const express = require( 'express' );
const fetch = require( 'node-fetch' );

const router = express.Router();

/* GET home page. */
router.get( '/api/news', function( req, res ) {
   fetch(
      `https://newsapi.org/v2/top-headlines?country=pl${
         req.query.q ? '&q=' + req.query.q : ''
      }&apiKey=${process.env.NEWS_API_KEY}`
   )
      .then( ( fRes ) => {
         return fRes.json();
      } )
      .then( ( data ) => {
         res.json( data );
      } );
} );

module.exports = router;
