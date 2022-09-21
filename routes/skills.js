import { Router } from 'express'

const router = Router()

/* GET skills listing. */
router.get('/', function(req, res) {
  res.send('Strengthen your skills!')
})

export {
  router
}
