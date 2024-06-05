import User from "../models/User.js";

export const updateProfile = async (req, res) => {
  try {
    const { user } = req;
    const { FIO, email, phone } = req.body;

    let findUser = await User.findOneAndUpdate(
      { _id: user.id },
      { FIO, email, phone },
      { new: true }
    );

    res.status(200).json(findUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
