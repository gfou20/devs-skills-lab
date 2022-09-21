import { Router } from 'express'

const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Skills to Pay the Bills!' })
})

export { 
  router
}
