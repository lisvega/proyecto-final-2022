const User = require("../api/user/user.model");
const { verifyToken } = require("../helpers/token-action");
const { setError } = require("../helpers/errors");


// 1,2,3 aqui nos importamos las funciones creadas en helpers 
//en la linea 15 a la 29 se hace la autenticación general de los usuarios es decir se encripta el password,
// se verifica el token y se validan.
/*Entre las lineas 32 y 53 se define el rol del admin. Se crea nuevamente su autenticación con las mismas funciones creadas y 
se crea una nueva función que crea un permiso de autorización para ser apliacado en aquellos lugares donde requiera solo el rol del administrador*/

// estas dos funciones se exportan  para ser utilizadas donde desee.


const authorize = async (req, _res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return next(setError(401, "Unauthorize"));
    const parsedToken = token.replace("Bearer ", "");
    const validToken = verifyToken(parsedToken, process.env.JWT_SECRET);
    if (!validToken) return next(setError(401, "Unauthorize"));
    const user = await User.findById(validToken.id);
    delete user.password;
    req.user = user;
    next();
  } catch (error) {
    return next(setError(401, "Unathorize"));
  }
};

// 
const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return next(setError(404, "Unauthorized"));
    }
    const parsedToken = token.replace("Bearer ", "");
    const validToken = verifyToken(parsedToken, process.env.JWT_SECRET);
    const userLogued = await User.findById(validToken.id);
    const user = userLogued.toJSON()

    if (user.isAdmin) {
      user.password = null;
      req.user = user;
      next();
    } else {
      return next(setError(404, "Unauthorized"));
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = { authorize, isAdmin };


//si entras como admin no te devuelve el password (user.password = null;) linea 39