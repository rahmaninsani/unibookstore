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
}

BookService.model = Book;

module.exports = BookService;
