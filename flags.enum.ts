export enum Flags {
    None = 'none',
    Contessa = 'contessa',
    Flower = 'flower',
    Peach = 'peach',
    Flax = 'flax',
    Feijoa = 'feijoa',
    Taro = 'taro',
    Downy = 'downy',
    Seagull = 'seagull',
    Purple = 'purple',
}

export const FlagOptions: Map<number, Flags> = new Map([
    [0, Flags.None],
    [1, Flags.Contessa],
    [2, Flags.Flower],
    [3, Flags.Peach],
    [4, Flags.Flax],
    [5, Flags.Feijoa],
    [6, Flags.Taro],
    [7, Flags.Downy],
    [8, Flags.Seagull],
    [9, Flags.Purple]
]);
