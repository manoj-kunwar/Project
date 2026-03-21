// const Joi = require("joi");

// module.exports.listingSchema = Joi.object({
//     listing: Joi.object({
//         title: Joi.string().required(),
//         description: Joi.string().required(),
//         location: Joi.string().required(),
//         country: Joi.string().required(),
//         price: Joi.number().min(0).required(),
//         image: Joi.string().allow("", null)
//     }).required()
// });


// module.exports.reviewSchema = Joi.object({
//     review: Joi.object({
//         rating: Joi.number().min(0).max(5).required(),
//         comment: Joi.string().required(),
//     }).required(),
// });

const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().allow("", null),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().min(0).required(),
        image: Joi.string().allow("", null),
        category: Joi.string().allow("", null),  // ← ADD THIS
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().min(0).max(5).required(),
        comment: Joi.string().required(),
    }).required(),
});