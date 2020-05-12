const loaderUtils = require('loader-utils');
const colors = require('colors');

module.exports = function (source) {
    const options = loaderUtils.getOptions(this);
    const replacements = options.replacements;
    let result = source;

    replacements.forEach(item => {
        result = result.replace(item.from + '', item.to + '');
    });

    console.log('replacements -> ', replacements);
    console.log(colors.magenta(source));
    console.log(colors.yellow('->'));
    console.log(colors.cyan(result));
    return result;
};
