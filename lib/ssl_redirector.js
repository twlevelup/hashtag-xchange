exports.forceSSLRedirect = function (req, res, next){
  if (req.headers['x-forwarded-proto']!='https') {
    res.header('Location', "https://" + req.headers.host + req.url);
    res.send(301);
  } else {
    next();
  }
}