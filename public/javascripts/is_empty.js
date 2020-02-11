function isEmpty(val) {
    try {
        return (typeof val === 'undefined')
            || (val === null)
            || (typeof val === 'boolean' && val === false)
            || (val.length < 1);
    } catch {
        return false;
    }
    return false;
}

function isEmptyDebug(val) {
    const is_undefined = (typeof val === 'undefined');
    const is_null = (val === null);
    const is_false = (typeof val === 'boolean' && val === false);
    const is_empty = (val.length < 1);

    console.log('is_undefined', is_undefined);
    console.log('is_null', is_null);
    console.log('is_false', is_false);
    console.log('is_empty', is_empty);

    return is_undefined || is_null || is_false || is_empty;
}