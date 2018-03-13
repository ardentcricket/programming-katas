chop("grapes", ['apple', 'orange', 'grapes']);
chop(3, []);
chop(3, [1]); // -1
chop(1, [1]); // 0
chop(1, [1, 3, 5]); // 0
chop(3, [1, 3, 5]); // 1
chop(5, [1, 3, 5]); // 2
chop(0, [1, 3, 5]); // -1
chop(2, [1, 3, 5]);// -1
chop(8, [1, 3, 5, 7]); // -1


function matchValue(value, list, iterator) {
    return list[iterator] === value;
}

function doesValueEqualLengthOfList(value, list) {
    return value === list.length - 1;
}

function isListEmpty(list) {
    return list.length < 1;
}

function chop(value, list) {

    if (isListEmpty(list)) {
        return -1;
    }

    // to be improved to forEach
    for (var i = 0; i < list.length; i++) {

        if (matchValue(value, list, i)) {
            return i;
        } else if (doesValueEqualLengthOfList(i, list)) {
            return -1;
        }
    }
}