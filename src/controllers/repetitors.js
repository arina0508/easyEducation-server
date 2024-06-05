import User from "../models/User.js";
import Class from "../models/Class.js";

export const getRepetitors = async (req, res) => {
  try {
    const repetitors = await User.find({ role: "repetitor" });

    res.status(200).json(repetitors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const signUpToRepetitor = async (req, res) => {
  try {
    const repetitorId = req.params.id;
    const { user } = req;
    const { date } = req.body;

    const repetitor = await User.findById(repetitorId);
    const client = await User.findById(user._id);

    console.log(repetitor.subject);

    if (!repetitor || !user) {
      res.status(404).json("Такой репетитор не найден");
    }

    const learn = await Class.create({
      user: client,
      repetitor: repetitor,
      subject: repetitor.subject,
      date: date,
    });
    learn.save();

    res.status(201).json({ message: `Успешная запись к ${repetitor.FIO}` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
