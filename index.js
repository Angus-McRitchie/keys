import string from '@gooby/string';

function convertKeys(input, convertFn) {
    if (Array.isArray(input)) {
        return input.map((item) => convertKeys(item, convertFn));
    }

    if (!input || typeof input !== 'object' || Object.getPrototypeOf(input).constructor !== Object) {
        return input;
    }

    return Object.keys(input).reduce((acc, key) => ({...acc, [convertFn(key)]: convertKeys(input[key], convertFn)}), {});
}

export const toCamel = (input) => convertKeys(input, string.toCamel);
export const toSnake = (input) => convertKeys(input, string.toSnake);

export default {toCamel, toSnake};