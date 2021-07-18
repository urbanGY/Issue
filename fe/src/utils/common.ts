export const randomRGB = () => {
    let color = '#'
    const max = Math.pow(256, 3)
    const random = Math.floor(Math.random() * max).toString(16)
    const gap = 6 - random.length

    if (gap > 0) {
        for (let x = 0; x < gap; x++) color += '0'
    }

    return color + random
}
