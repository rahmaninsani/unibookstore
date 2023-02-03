const { sequelize } = require('../models');
const { BookService, PublisherService } = require('../services');
const { render } = require('../utils');

class AdminController {
  static async indexBuku(req, res) {
    try {
      const books = await BookService.findAll();

      render(res, {
        page: 'admin/buku/index',
        props: {
          title: 'Admin | Kelola Buku',
          data: {
            books,
          },
        },
      });
    } catch (error) {
      res.sendStatus(500);
    }
  }

  static async tambahBuku(req, res) {
    try {
      const publishers = await PublisherService.findAll();

      render(res, {
        page: 'admin/buku/tambah',
        props: {
          title: 'Admin | Tambah Buku',
          data: {
            publishers,
          },
        },
      });
    } catch (error) {
      res.sendStatus(500);
    }
  }

  static async simpanBuku(req, res) {
    const transaction = await sequelize.transaction();

    try {
      const reqBody = req.body;

      const { id: idPublisher } = await PublisherService.findOneByCode(reqBody.publisher);
      await BookService.create({ ...reqBody, idPublisher }, transaction);

      await transaction.commit();
      res.redirect('/admin/buku');
    } catch (error) {
      transaction.rollback();
      res.sendStatus(500);
    }
  }

  static async editBuku(req, res) {
    try {
      const { bookCode } = req.params;
      const book = await BookService.findOne(bookCode);
      const publishers = await PublisherService.findAll();

      render(res, {
        page: 'admin/buku/edit',
        props: {
          title: 'Admin | Edit Buku',
          data: {
            book,
            publishers,
          },
        },
      });
    } catch (error) {
      res.sendStatus(500);
    }
  }

  static async simpanEditBuku(req, res) {
    const transaction = await sequelize.transaction();

    try {
      const reqBody = req.body;
      const { id: idPublisher } = await PublisherService.findOneByCode(reqBody.publisher);

      const { bookCode } = req.params;

      await BookService.update({ bookCode, ...reqBody, idPublisher }, transaction);

      await transaction.commit();
      res.redirect('/admin/buku');
    } catch (error) {
      transaction.rollback();
      throw error;
    }
  }

  static async hapusBuku(req, res) {
    const transaction = await sequelize.transaction();

    try {
      const { bookCode } = req.params;

      await BookService.delete(bookCode, transaction);

      await transaction.commit();
      res.redirect('/admin/buku');
    } catch (error) {
      transaction.rollback();
      throw error;
    }
  }
}

module.exports = AdminController;
