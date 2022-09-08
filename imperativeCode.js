
function tabClose(index) {
    let numbers = [1, 2, 3, 4, 5, 6, 7]
    const tabsBeforeIndex = numbers.splice(0, index)
    console.log(tabsBeforeIndex)
    const tabsAfterIndex = numbers.splice(index + 1)
    console.log(tabsAfterIndex)
    numbers = tabsBeforeIndex.concat(tabsAfterIndex)

    return numbers
}

console.log(tabClose(2))