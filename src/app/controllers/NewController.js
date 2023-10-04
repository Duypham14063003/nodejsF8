class NewsController {
  // [GET] /news
  index(req, res) {
    res.render("news");
  }

  //test
  //[GET] /news/:slug
  show(req, res) {
    res.send("show page");
  }
}

module.exports = new NewsController();
