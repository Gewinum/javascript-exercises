Object.defineProperty(Object.prototype, "mergeDeepRight", {
    /**
     * @param {object} dataToAdd
     */
    value: function (dataToAdd) {
        const mergingKeys = Object.keys(dataToAdd);

        mergingKeys.forEach((key) => {
            if (Array.isArray(dataToAdd[key]) && dataToAdd[key].length > 0) {
                this[key] = [
                    ...this[key],
                    ...dataToAdd[key]
                ];
            } else if (typeof dataToAdd[key] === 'object') {
                this[key].mergeDeepRight(dataToAdd[key]);
            } else {
                this[key] = dataToAdd[key];
            }
        });
    },
    writable: false,
    enumerable: true,
    configurable: true
})

const data = {
    name: 'fred',
    age: 10,
    contact: {
        email: 'moo@example.com',
        meta: {
            verified: true,
            tags: ['important']
        }
    }
};

data.mergeDeepRight({
    age: 40,
    contact: {
        email: 'baa@example.com',
        favorite: true,
        meta: {
            tags: ['vip']
        }
    }
});
console.log(data);