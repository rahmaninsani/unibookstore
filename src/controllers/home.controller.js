const { BookService } = require('../services');
const { render } = require('../utils');

class HomeController {
  static async index(req, res) {
    try {
      const books = await BookService.findAll();
      console.log(books);

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
