function convert(input, convertFn) {
    if (Array.isArray(input)) {
        return input.map((item) => convert(item, convertFn));
    }

    if (!input || typeof input !== 'object' || Object.getPrototypeOf(input).constructor !== Object) {
        return input;
    }

    return Object.keys(input).reduce((acc, key) => ({...acc, [convertFn(key)]: convert(input[key], convertFn)}), {});
}

function stringToCamel(string) {
    return string.replace(/([-_/][a-z])/gi, ($1) => $1.toUpperCase().replace(/\/|-|_/g, ''))
}

function stringToSnake(string) {
    return string.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`).replace(/\/|-/g, '_');
}

const keys = {
    toCamel: (input) => convert(input, stringToCamel),
    toSnake: (input) => convert(input, stringToSnake),
}

export default keys;