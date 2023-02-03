const sequelize = require('sequelize');
const { Book, Publisher } = require('../models');

const Service = require('./service');

class BookService extends Service {
  static async findAll() {
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

    return await super.findAll(options);
  }
}

BookService.model = Book;

module.exports = BookService;
