import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
  try {
    const token = req.headers.token;
    console.log('authUser - Token:', token);
    if (!token) {
      console.log('authUser - No token provided');
      return res.json({ success: false, message: "Not authorized, Login again" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('authUser - Decoded:', decoded);
    req.body.userId = decoded.id;
    next();
  } catch (error) {
    console.error('authUser - Error:', error.message);
    res.json({ success: false, message: "Not authorized, Login again" });
  }
};

export default authUser;