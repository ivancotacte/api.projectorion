const test = (message, callback) => {
    if (!test) {
        const data = {
          status: "success",
          code: 200,
          result: {
            test: message,
          },
        };
        callback(data);
    } else {
        const data = {
            status: "error",
            code: 400,
            result: null
        }
        callback(data);
    }
}

module.exports = { test };