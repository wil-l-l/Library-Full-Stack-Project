import mongoose from "mongoose";

const validateIdList = (idList, res) =>
  idList.some((id) => !mongoose.isValidObjectId(id))
    ? res.status(400).send({ success: false })
    : 0;

export default validateIdList;
