router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Student ID is 21756630. Welcome to Express' });
});

