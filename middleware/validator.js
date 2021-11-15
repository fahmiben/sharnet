const { check, validationResult } = require("express-validator");

exports.registerUserRules = () => [
  check("name", "name is required").notEmpty(),
  check("lastname", "Lastname is required").notEmpty(),
  check("email", "email is required").notEmpty(),
  check("email", "check email again").isEmail(),
  check("password", "password is required").isLength({
    min: 6,
    max: 20,
  }),
  check("phone","phone is required").notEmpty(),
  check("isAdmin","isAdmin is required").toBoolean(),
];

exports.addServiceRules = () => [
  check("name", "name is required").notEmpty(),
  check("description", "description is required").notEmpty(),
  check("description", "description is required").isLength({
    min:200,
    max:500,
  }),
  check("picture","pictures is required").notEmpty(),
  check("type", "type is required").notEmpty(),
  check("type", "type is required").optional(),
  check("price", "price is required").notEmpty(),
  check("date", "deadline date is required").notEmpty(),
  check("date", "deadline date is required").toDate(),
  check("adress","adress is required").notEmpty(),
];

exports.loginRules = () => [
  check("email", "email is required").notEmpty(),
  check("email", "check email again").isEmail(),
  check(
    "password",
    "password must be between 6 character and 20 character"
  ).isLength({
    min: 6,
    max: 20,
  }),
];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array().map((el) => ({
        msg: el.msg,
      })),
    });
  }
  next();
};