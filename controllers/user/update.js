import User from "../../models/User.js"
import Itinerary from "../../models/Itinerary.js"
import { encryption } from "../../utils/encryption.js";




const updateUser = async (req, res, next)=>{
  try {
    const {_id, ...updateBody} = req.body
    console.log(_id, updateBody);
    
    
    const update = await User.findOneAndUpdate(
      {_id: _id},
      updateBody,
      {new:true}
    )
    return res.status(201).json({
      success: true,
      user: update
      })
  } catch (error) {
    console.log(error);
    
    return next(error)
  }
}


const updateUserItinerary = async (req, res, next) => {
  try {
    const itineraries = await Itinerary.find();
    const users = await User.find();

    for (let user of users) {
      const ids = itineraries.filter(iti => iti.user.toString() === user._id.toString()).map(iti => iti._id);
      if (ids.length > 0) {
        user.itineraries.push(...ids);
        await user.save()
      }
    }

    return res.status(201).json({
      success: true
    });
  } catch (error) {
    next(error)
  }
};



const updatePassword = async (req, res, next)=>{
  try {
    const users = await User.find()
    for (let user of users  ) {
      user.password = encryption(user.password)
      await user.save()
    }
    return res.status(201).json({
      success: true
    })
  } catch (error) {
    return next(error)
  }
}

export {updateUser, updateUserItinerary, updatePassword};

