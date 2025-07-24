const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const {Author, validateCreateAuthor, validateUpdateAuthor} = require("../models/Author");
const {verifyTokenAndAdmin} = require("../middlewares/verifyToken");

/**
 * @description Get all authors
 * @route /api/authors
 * @method GET
 * @access public
 */
router.get("/", asyncHandler(
    async (req, res) =>{
        const {pageNumber} = req.query;
        const authorsPerPage = 2;
        const authorList = await Author.find()
        .skip((pageNumber - 1) * authorsPerPage).limit(authorsPerPage);
        res.status(200).json(authorList);
    }
));

/**
 * @description Get author by id
 * @route /api/authors
 * @method GET
 * @access public
 */
router.get("/:id", asyncHandler(
    async (req, res) =>{
        const author = await Author.findById(req.params.id);
        if(author){
        res.status(200).json(author);
        }else{
        res.status(404).json({message: "author not found"});
        }
    }
));

/**
 * @description Creat new author
 * @route /api/authors
 * @method POST
 * @access private
 */
router.post("/", verifyTokenAndAdmin, asyncHandler(
     async (req, res) =>{
        const {error} = validateCreateAuthor(req.body);
        if(error){
        return res.status(400).json({message: error.details[0].message});
        }

        const author = new Author({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        nationality: req.body.nationality,
        image: req.body.image
        });

        const result = await author.save();

        res.status(201).json(result);
    }
));

/**
 * @description Update a author
 * @route /api/authors/:id
 * @method PUT
 * @access private
 */
router.put("/:id", verifyTokenAndAdmin, asyncHandler(
    async (req, res) =>{
        const {error} = validateUpdateAuthor(req.body);
        if(error){
        return res.status(400).json({message: error.details[0].message});
        }

        const author = await Author.findByIdAndUpdate(req.params.id, {
        $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            nationality: req.body.nationality,
            image: req.body.image
        }
        }, {new: true});

        res.status(200).json(author);
    }
));

/**
 * @description Delete a author
 * @route /api/authors/:id
 * @method DELETE
 * @access private
 */
router.delete("/:id", verifyTokenAndAdmin, asyncHandler(
    async (req, res) =>{
        const author = await Author.findById(req.params.id);
        if(author){
        await Author.findByIdAndDelete(req.params.id);
        res.status(200).json("author has been deleted");
        }else{
        res.status(404).json("author not found");
        }
    }
));

module.exports = router;