/**
 * Abstract class for services.
 * @attribute {Model} model - Sequlize model.
 */

class Service {
  // Sequelize Model
  static model;

  static async findAll(options) {
    return await this.model.findAll({ raw: true, ...options });
  }

  static async findOne(options) {
    return await this.model.findOne({ raw: true, ...options });
  }

  static async findLastInsertedRow() {
    return await this.model.findOne({
      raw: true,
      order: [['id', 'DESC']],
    });
  }

  static async create(payload, options) {
    return await this.model.create(payload, options);
  }

  static async update(payload, options) {
    return await this.model.update(payload, options);
  }

  static async delete(options) {
    return await this.model.destroy(options);
  }
}

module.exports = Service;
