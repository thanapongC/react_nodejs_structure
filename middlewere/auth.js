import jwt from 'jsonwebtoken'
import { Users } from '../app/user'

export default function(req, res, next) {
  
  const authHeader = req.header('Authorization')
  if(!authHeader) return next()

  const accessToken = authHeader.match(/Bearer (.*)/)[1]

  // Authen Example
      jwt.verify(accessToken, 'is salt', async (err, decoded) => {
        if(err) return next()
        req.user = await Users.find(decoded.sub)
        next()
      })

}