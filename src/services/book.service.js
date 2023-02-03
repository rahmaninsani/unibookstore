const sequelize = require('sequelize');
const { Book, Publisher } = require('../models');

const Service = require('./service');

class BookService extends Service {
  static async findAll(keyword = null) {
    const options = {
      attributes: {
        exclude: ['id', 'idPublisher', 'id_publisher'],
        include: [[sequelize.col('Publisher.name'), 'publisherName']],
      },
      include: [
        {
          model: Publisher,
          attributes: [],
        },
      ],
    };

    if (keyword) {
      options.where = {
        title: { [sequelize.Op.substring]: keyword },
      };
    }

    return await super.findAll(options);
  }

  static async findOne(code) {
    const options = {
      attributes: {
        exclude: ['id', 'idPublisher', 'id_publisher'],
        include: [[sequelize.col('Publisher.name'), 'publisherName']],
      },
      include: [
        {
          model: Publisher,
          attributes: [],
        },
      ],
      where: {
        code,
      },
    };

    return await super.findOne(options);
  }

  static async create(book, transaction) {
    const payload = {
      code: book.code,
      category: book.category,
      title: book.title,
      price: book.price,
      stock: book.stock,
      idPublisher: book.idPublisher,
    };

    const options = {
      transaction,
    };

    return await super.create(payload, options);
  }

  static async update(book, transaction) {
    const payload = {
      category: book.category,
      title: book.title,
      price: book.price,
      stock: book.stock,
      idPublisher: book.idPublisher,
    };

    const options = {
      where: {
        code: book.code,
      },
      transaction,
    };

    return await super.update(payload, options);
  }

  static async delete(code, transaction) {
    const options = {
      where: {
        code,
      },
      transaction,
    };

    return await super.delete(options);
  }

  static async findSmallestStock() {
    const options = {
      attributes: {
        exclude: ['id', 'idPublisher', 'id_publisher'],
        include: [[sequelize.col('Publisher.name'), 'publisherName']],
      },
      include: [
        {
          model: Publisher,
          attributes: [],
        },
      ],
      order: [['stock', 'ASC']],
      limit: 1,
    };

    return await super.findAll(options);
  }
}

BookService.model = Book;

module.exports = BookService;
