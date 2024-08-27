const express = require('express');
const todoRouter = express.Router();
const Todo = require('../models/todo.js');



// get all
todoRouter.get('/', async(req, res, next) => {
    try {
        const foundTodo = await Todo.find({})
        return res.status(200).send(foundTodo)
    } catch (error) {
        res.status(500)
        return next(error)
    };
});

// get one
todoRouter.get('/:id', async (req, res, next) => {
    const id = req.params.id
    try {
        const foundTodo = await Todo.findById(id)
        if (!foundTodo) {
            return res.status(404).send(`The todo with id: ${id} was not found.`)
        }
        return res.status(200).send(foundTodo)
    } catch (error) {
        res.status(500)
        return next(error)
    };
});

// post one
todoRouter.post('/', async (req, res, next) => {
    try {
        const newTodo = await Todo(req.body)
        const savedTodo = await newTodo.save()
        return res.status(201).send(savedTodo) 
    } catch (error) {
        res.status(500)
        return next(error)
    }
})


// update one
todoRouter.put('/:id', async(req, res, next) => {
    try {
        const id = req.params.id
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            req.body,
            {new: true}
        )
        return res.status(201).send(updatedTodo)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

// delete one
todoRouter.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const deletedTodo = await Todo.findByIdAndDelete(id)
        return res.status(204).send(`You have successfully deleted ${deletedTodo.title} from the database.`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})


module.exports = todoRouter