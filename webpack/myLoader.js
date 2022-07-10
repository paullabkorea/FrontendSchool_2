module.exports = function (item) {
    console.log('hello myLoader!!');

    return item.replace('console.log(', 'alert(');
}