process.env.BABEL_ENV = 'test'
process.env.NODE_ENV = 'test'

var jest = require('jest');
var path = require('path')

function runTest({dir, src='src'}){
    var argv = ['--verbose']
    var [r, b] = calcRel(__dirname, path.resolve(process.cwd(), dir))
    argv.push(`--roots`)
    argv.push(`${r}`)
    argv.push(`--config="${b}/jest.config.js"`)
    argv.push(`--testMatch`)
    argv.push(`${r}/${src}/**/__tests__/**/*.{js,jsx,ts,tsx}`)
    argv.push(`${r}/${src}/**/*.{spec,test}.{js,jsx,ts,tsx}`)
    jest.run(argv);
}

function calcRel(base, target){
    var [t1, t2] = [base, target].map(x=> x.split(path.sep))
    var b = t1.join('/')
    var i = 0
    while(true){
        if(t1[i]===t2[i]){
            t1.shift()
            t2.shift()
        }
        else break
    }
    return ['<rootDir>/'+t1.fill('..').concat(t2).join('/'), b]
}

module.exports = runTest