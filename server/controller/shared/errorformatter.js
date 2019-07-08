const formatDbError = (error) => {
  let formattedError = {
    type: error.name,
    msg: error.errmsg
  };

  if(error.name === 'ValidationError') {
    formattedError.msg = error.message;
  }

  return formattedError;
};

module.exports = formatDbError;
