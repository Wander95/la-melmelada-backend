module.exports.OK = ({data,path})=>{

  return {
    status: 'success',
    code: 200,
    path,
    data
  }
  
}

module.exports.BAD_REQUEST = ({error,path})=>{

  return {
    status: 'fail',
    code: 400,
    path,
    error
  }
  
}