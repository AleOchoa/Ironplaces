const { Router } = require("express")
const router = Router()

const { 
  comidaGet,
  menuGet,
  comidasGet
} = require("../controllers/protectedControllers");

router
  //.get('/create', createGet)
  //.post('/create', createPost)
  .get('/comida/:id', comidaGet)
  .get('/menu', menuGet)
  .get('/comida', comidasGet)

module.exports = router