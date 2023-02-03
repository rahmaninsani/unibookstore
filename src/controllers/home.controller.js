const { render } = require('../utils');

class HomeController {
  static async index(req, res) {
    try {
      const books = [
        { id: '1', title: 'Harry Potter' },
        { id: '2', title: 'Lord of the Ring' },
      ];

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
