const Todos = require('../data/todos').todos


const getIndex = (req, res, next) => {
    
        

    res.render('index', { 
        title: 'Unit 2 Assessment',
        todos : Todos 
    
    });
}
const postTodo = (req, res, next) => {
    item = {
    todo: req.body.todo,
    done: false
}
    Todos.push(item)
    res.redirect('/')

}



module.exports = {
    getIndex,
    postTodo,
}