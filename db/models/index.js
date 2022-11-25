const { User, UserSchema } = require('./user.model');
const { Slider, SliderSchema } = require('./slider.model');
const { Product, ProductSchema } = require('./product.model');
const { New, NewSchema } = require('./new.model');
const { Business, BusinessSchema } = require('./business.model');
const { Contact, ContactSchema } = require('./contact.model');
const { Pqr, PqrSchema } = require('./pqr.model');
const { Financial, FinancialSchema } = require('./financial.model');
const { Contract, ContractSchema } = require('./contract.model');
const {
  InternalControl,
  InternaControlSchema,
} = require('./internalControl.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Slider.init(SliderSchema, Slider.config(sequelize));
  Business.init(BusinessSchema, Business.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  New.init(NewSchema, New.config(sequelize));
  Contact.init(ContactSchema, Contact.config(sequelize));
  Pqr.init(PqrSchema, Pqr.config(sequelize));
  Financial.init(FinancialSchema, Financial.config(sequelize));
  Contract.init(ContractSchema, Contract.config(sequelize));
  InternalControl.init(InternaControlSchema, InternalControl.config(sequelize));

  Business.associate(sequelize.models);
  Product.associate(sequelize.models);
}

module.exports = setupModels;
