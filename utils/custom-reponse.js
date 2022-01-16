export function createError(code, message) {
  return {
    success: false,
    message,
    code,
  };
}

export function createSuccess(data, code = 200) {
  return {
    success: true,
    data,
    code,
  };
}
