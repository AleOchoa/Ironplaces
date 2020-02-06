const {model, Schema} = require('mongoose')


const placeSchema = new Schema (
  {
    name: String,
    location: {
      address: {
        type: String
      },
      coordinates: {
        type: [Number]
      }
    },
    price:String,
    cap:String,
    phone:String,
    image:String,
    gps:{
      latitude:Number,
      longitude:Number
    },
    address:{
      street:String,
      number:Number
    }

  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Place', placeSchema)