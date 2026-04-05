const getAllUserMiddleWear = function (req, res, next) {
  let auth = req.headers.authorization;
  if (auth === '123456789') {
    next();
  } else {
    res.send('You are Unauthorized');
  }
};

module.exports = getAllUserMiddleWear;
