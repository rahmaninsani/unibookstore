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

      const { id: idPublisher } = await PublisherService.findOne(reqBody.publisher);
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
      const { id: idPublisher } = await PublisherService.findOne(reqBody.publisher);

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

  static async indexPenerbit(req, res) {
    try {
      const publishers = await PublisherService.findAll();

      render(res, {
        page: 'admin/penerbit/index',
        props: {
          title: 'Admin | Kelola Penerbit',
          data: {
            publishers,
          },
        },
      });
    } catch (error) {
      res.sendStatus(500);
    }
  }

  static async tambahPenerbit(req, res) {
    try {
      render(res, {
        page: 'admin/penerbit/tambah',
        props: {
          title: 'Admin | Tambah Penerbit',
        },
      });
    } catch (error) {
      res.sendStatus(500);
    }
  }

  static async simpanPenerbit(req, res) {
    const transaction = await sequelize.transaction();

    try {
      const reqBody = req.body;
      await PublisherService.create(reqBody, transaction);

      await transaction.commit();
      res.redirect('/admin/penerbit');
    } catch (error) {
      transaction.rollback();
      res.sendStatus(500);
    }
  }

  static async editPenerbit(req, res) {
    try {
      const { publisherCode } = req.params;
      const publisher = await PublisherService.findOne(publisherCode);

      render(res, {
        page: 'admin/penerbit/edit',
        props: {
          title: 'Admin | Edit Penerbit',
          data: {
            publisher,
          },
        },
      });
    } catch (error) {
      res.sendStatus(500);
    }
  }

  static async simpanEditPenerbit(req, res) {
    const transaction = await sequelize.transaction();

    try {
      const { publisherCode } = req.params;
      const reqBody = req.body;

      await PublisherService.update({ publisherCode, ...reqBody }, transaction);

      await transaction.commit();
      res.redirect('/admin/penerbit');
    } catch (error) {
      transaction.rollback();
      throw error;
    }
  }

  static async hapusPenerbit(req, res) {
    const transaction = await sequelize.transaction();

    try {
      const { publisherCode } = req.params;
      await PublisherService.delete(publisherCode, transaction);

      await transaction.commit();
      res.redirect('/admin/penerbit');
    } catch (error) {
      transaction.rollback();
      throw error;
    }
  }
}

module.exports = AdminController;
