const { Publisher } = require('../models');

const Service = require('./service');

class PublisherService extends Service {
  static async findAll() {
    const options = {
      attributes: {
        exclude: ['id'],
      },
    };

    return await super.findAll(options);
  }

  static async findOneByCode(code) {
    const options = {
      where: {
        code: code,
      },
    };
    return await super.findOne(options);
  }
}

PublisherService.model = Publisher;

module.exports = PublisherService;
