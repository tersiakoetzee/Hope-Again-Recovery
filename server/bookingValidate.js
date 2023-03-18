import { body } from "express-validator";

const validate = [
	body("name")
		.exists({ checkFalsy: true })
		.isLength({ min: 2 })
		.not()
		.isNumeric(),
	body("surname")
		.exists({ checkFalsy: true })
		.isLength({ min: 2 })
		.not()
		.isNumeric(),
	body("age").isNumeric().isLength({ max: 2 }),
	body("phoneNumber").isNumeric().isLength(10),
	body("addressLine1")
		.exists({ checkFalsy: true })
		.isLength({ min: 2 })
		.not()
		.isNumeric(),
	body("addressLine2")
		.exists({ checkFalsy: true })
		.isLength({ min: 2 })
		.not()
		.isNumeric(),
	body("city")
		.exists({ checkFalsy: true })
		.isLength({ min: 2 })
		.not()
		.isNumeric(),
	body("country")
		.exists({ checkFalsy: true })
		.isLength({ min: 2 })
		.not()
		.isNumeric(),
	body("answer1").exists(),
	body("answer2").exists(),
	body("careGiverName")
		.exists({ checkFalsy: true })
		.isLength({ min: 2 })
		.not()
		.isNumeric(),
	body("careGiverNumber").isNumeric().isLength(10),
	body("email").optional({ checkFalsy: true }).isEmail(),
	body("postCode").optional({ checkFalsy: true }).isNumeric(),
	body("whichOne")
		.optional({ checkFalsy: true })
		.exists({ checkFalsy: true })
		.isLength({ min: 3 })
		.not()
		.isNumeric(),
	body("careGiverAddress1")
		.optional({ checkFalsy: true })
		.exists({ checkFalsy: true })
		.isLength({ min: 3 })
		.not()
		.isNumeric(),
	body("careGiverAddress2")
		.optional({ checkFalsy: true })
		.exists({ checkFalsy: true })
		.isLength({ min: 3 })
		.not()
		.isNumeric(),
	body("careGiverCity")
		.optional({ checkFalsy: true })
		.exists({ checkFalsy: true })
		.isLength({ min: 3 })
		.not()
		.isNumeric(),
	body("careGiverCountry")
		.optional({ checkFalsy: true })
		.exists({ checkFalsy: true })
		.isLength({ min: 3 })
		.not()
		.isNumeric(),
	body("careGiverCountry")
		.optional({ checkFalsy: true })
		.exists({ checkFalsy: true })
		.isLength({ min: 3 })
		.not()
		.isNumeric(),
	body("careGiverPostCode").optional({ checkFalsy: true }).isNumeric(),
];

export { validate as validation };
