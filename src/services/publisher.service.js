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

  static async findOne(code) {
    const options = {
      where: {
        code: code,
      },
    };
    return await super.findOne(options);
  }

  static async create(publisher, transaction) {
    const payload = {
      code: publisher.code,
      name: publisher.name,
      address: publisher.address,
      city: publisher.city,
      phoneNumber: publisher.phoneNumber,
    };

    const options = {
      transaction,
    };

    return await super.create(payload, options);
  }

  static async update(publisher, transaction) {
    const payload = {
      name: publisher.name,
      address: publisher.address,
      city: publisher.city,
      phoneNumber: publisher.phoneNumber,
    };

    const options = {
      where: {
        code: publisher.code,
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
}

PublisherService.model = Publisher;

module.exports = PublisherService;
