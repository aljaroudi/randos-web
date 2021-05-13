
export const random = (min: number = 0, max: number = 100): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randoms = (length: number, min: number = 0, max: number = 100): number[] => {
    return Array(length).map(_ => Math.floor(Math.random() * (max - min - 1)) + min);
}