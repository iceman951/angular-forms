const jwt = require("jsonwebtoken");

let users = [
  { id: "ice", password: "123", fullname: "gomesh gogo" },
  { id: "iceice", password: "123456", fullname: "peter iceberg" },
];

exports.login = async (req, res, next) => {
  try {
    const { id, password } = req.body;

    const user = users.find((x) => x.id === id);

    if (!user) {
      return res.status(404).json({
        message: "ไม่พบผู้ใช้งานในระบบ",
      });
    }

    if (password != user.password) {
      return res.status(401).json({
        message: "พาสผิด",
      });
    }

    //สร้าง Token
    const token = await jwt.sign(
      {
        id: user.id,
      },
      "my_secret_naja_so_hard_secret_mag_mag",
      { expiresIn: "1 days" }
    );

    //decode วันหมดอายุ
    const expires_in = jwt.decode(token);

    res.status(200).json({
      success: true,
      user: {
        id: user.id,
      },
      access_token: token,
      expires_in: expires_in.exp,
      token_type: "Bearer",
    });
  } catch (error) {
    next(error);
  }
};

exports.me = async (req, res, next) => {
    try {
        return  res.status(200).json({
          message: "me",
        });
    } catch (error) {
        next(error);
    }
};
