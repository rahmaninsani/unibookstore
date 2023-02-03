const { BookService } = require('../services');
const { render } = require('../utils');

class HomeController {
  static async index(req, res) {
    try {
      const keyword = req.body?.keyword;
      const books = await BookService.findAll(keyword);

      render(res, {
        page: 'home/index',
        props: {
          title: 'Home',
          data: {
            books,
          },
        },
      });
    } catch (error) {
      res.sendStatus(500);
    }
  }
}

module.exports = HomeController;
