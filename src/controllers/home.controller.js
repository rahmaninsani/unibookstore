const { render } = require('../utils');

class HomeController {
  static async index(req, res) {
    try {
      const books = [
        {
          id: 'K1001',
          category: 'Keilmuan',
          title: 'Harry Potter',
          price: '100000',
          stock: '10',
          publisher: 'Gramedia',
        },
        {
          id: 'K1002',
          category: 'Keilmuan',
          title: 'Harry Potter 2',
          price: '100000',
          stock: '10',
          publisher: 'Gramedia',
        },
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
