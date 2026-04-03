

const arrToString = (arr) => {
    const res = arr
        .filter((item) => Number.isInteger(item))
        .map((item) => item.toString())

    return res
}

export default arrToString