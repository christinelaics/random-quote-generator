export function getNextIndex(current: number, length: number): number {
    if (length <=1) return 0;
    let next = Math.floor(Math.random() * length);
    let tries = 0;
    while (next === current && tries < 10) {
        next = Math.floor(Math.random() * length);
        tries++;
    }
    return next;
}