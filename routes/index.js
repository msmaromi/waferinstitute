/* GET home page. */
exports.index = function(req, res){
  // res.render('index', { title: 'Wafer Institute' });
  res.redirect('/coming');
};

exports.site = function(req, res) {
  res.render('index', { title: 'Wafer Institute' });
}
