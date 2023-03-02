const fs = require('fs');
const path = require('path');

function response(res, context, type = 'json') {
    res.type(type);
    res.write(context);
    res.end();
}

function mock(res, file) {
    // 读取本地的JSON文件
    fs.readFile(file, 'utf-8', (error, context) => {
        if (error) {
            response(res, error.message, 'html');
        }
        response(res, context);
    });
}

const mockMiddleware = (config) => (req, res, next) => {
    const { projectDir, mockDir } = config;

    const filePath = path.resolve(projectDir, `./${mockDir + req.path}.json`);

    return fs.stat(filePath, (error) => {
        if (error) {
            // 存在error的情况，结束当前的中间件，执行其他的中间件
            next();
        } else {
            mock(res, filePath);
        }
    });
};

module.exports = mockMiddleware;
