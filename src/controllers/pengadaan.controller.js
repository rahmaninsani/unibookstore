const { BookService, PublisherService } = require('../services');
const { render } = require('../utils');

class PengadaanController {
  static async index(req, res) {
    try {
      const books = await BookService.findSmallestStock();

      render(res, {
        page: 'pengadaan/index',
        props: {
          title: 'Pengadaan',
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

module.exports = PengadaanController;
