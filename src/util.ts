export function createZeroedArray(length: number): number[] {
    const array = new Array<number>(length);
    for (let i = 0; i < length; i++) array[i] = 0;

    return array;
}
