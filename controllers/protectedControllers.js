const Place = require('../models/Place')

/*exports.createGet = (req, res) => {
  res.render('create')
}

exports.createPost = async (req, res) => {
  const { name, address, latitude, longitude, placeType } = req.body
  const newPlace = {
    name,
    placeType,
    location: {
      address,
      coordinates: [longitude, latitude]
    }
  }
  console.log(newPlace)
  const { _id } = await Place.create(newPlace)
  res.redirect(`/comida/${_id}`)
}*/

exports.comidaGet = async (req, res) => {
  const { id } = req.params
  const place = await Place.findById(id)
  res.render('comida', place)
}

exports.menuGet = async (req, res) => {
  res.render('menu')
}

exports.comidasGet= async (req,res)=>{
  const lugares= await Place.find({"address.township":"ROMA NORTE"}).limit(5)
  console.log(lugares)
  res.render('comidas',{lugares})
}

