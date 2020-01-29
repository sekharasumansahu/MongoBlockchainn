/**
 * company route
 * This file to define routes for company file.
 * @package src/routes
 * @subpackage routes/company
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
//Default route for checking server status
router.get('/', (req, res)=>{
  res.status(200).send('Server running...!!!');
});

//Router for Compeny registrtion
router.post('/')

module.exports = router;