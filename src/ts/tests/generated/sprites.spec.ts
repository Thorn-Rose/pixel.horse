import '../lib';
import { expect } from 'chai';
import { map } from 'lodash';
import * as sprites from '../../generated/sprites';

/* tslint:disable */
const sets: [keyof typeof sprites, number, number, (number[] | null)[]][] = [
  // name, index, frames, expected patterns colors counts
  // ['topManes', -1, 1, [null, [3, 13, 13, 7, 5, 5], [3, 11, 11, 7, 5, 5], [3, 13, 13, 5, 5, 7], [3, 11, 11, 7, 5, 5], [3, 9, 9, 7, 5], [3, 11, 9, 7, 5, 5], [3, 9, 9, 7, 5, 5], [3, 11, 11, 7, 5, 5], [3, 13, 13, 7, 5], [3, 13, 13, 7, 5, 5, 13], [3, 9, 11, 5, 5], [3, 9, 9, 7, 5, 5], [3, 9, 7, 5, 5], [3, 11, 9, 7, 5], [3, 11, 7, 5, 5], [3, 7], [3, 11, 9, 7, 5, 5], [3, 13, 13, 7, 5, 5], [3, 9, 13, 7, 5, 5], [3, 11, 11, 7, 5, 5], [3, 13, 13, 7, 5, 5], [3, 13, 13, 7, 5, 5, 9], [3, 11, 13, 7, 5, 5], [3, 13, 11, 7, 5, 5], [3, 7, 5, 13, 5]]],
  ['topManes', -1, 1, [null, [3, 13, 13, 7, 5, 5], [3, 11, 11, 7, 5, 5], [3, 13, 13, 5, 5, 7], [3, 11, 11, 7, 5, 5], [3, 9, 9, 7, 5], [3, 11, 9, 7, 5, 5], [3, 9, 9, 7, 5, 5], [3, 11, 11, 7, 5, 5], [3, 13, 13, 7, 5], [3, 13, 13, 7, 5, 5, 13], [3, 9, 11, 5, 5], [3, 9, 9, 7, 5, 5], [3, 9, 7, 5, 5], [3, 11, 9, 7, 5], [3, 11, 7, 5, 5], [3, 7], [3, 11, 9, 7, 5, 5], [3, 13, 13, 7, 5, 5], [3, 9, 13, 7, 5, 5], [3, 11, 11, 7, 5, 5], [3, 13, 13, 7, 5, 5], [3, 13, 13, 7, 5, 5, 9], [3, 11, 13, 7, 5, 5], [3, 13, 11, 7, 5, 5], [3, 7, 5, 13, 5], [3, 11, 11, 7, 5, 5], [3, 9, 13, 7, 5, 5], [3, 9, 13, 7, 5, 5], [3, 11, 13, 7, 5, 5], [3, 13, 5, 11, 5], [3, 7, 5, 7, 5, 5, 7]]],
  // ['frontManes', -1, 1, [null, [3, 13, 13, 7, 5, 5], [3, 11, 11, 7, 5, 5], [3, 13, 13, 5, 5, 7], [3, 11, 11, 7, 5, 5], [3, 9, 9, 7, 5], [3, 11, 9, 7, 5, 5], null, [3, 11, 11, 7, 5, 5], null, [3, 13, 13, 7, 5, 5, 13], [3, 9, 11, 5, 5], [3, 9, 9, 7, 5, 5], null, [3, 11, 9, 7, 5], null, null, [3, 11, 9, 7, 5, 5], [3, 13, 13, 7, 5, 5], null, [3, 11, 11, 7, 5, 5], [3, 13, 13, 7, 5, 5], [3, 13, 13, 7, 5, 5, 9], null, [3, 13, 11, 7, 5, 5], [3, 7, 5, 13, 5]]],
  ['frontManes', -1, 1, [null, [3, 13, 13, 7, 5, 5], [3, 11, 11, 7, 5, 5], [3, 13, 13, 5, 5, 7], [3, 11, 11, 7, 5, 5], [3, 9, 9, 7, 5], [3, 11, 9, 7, 5, 5], null, [3, 11, 11, 7, 5, 5], null, [3, 13, 13, 7, 5, 5, 13], [3, 9, 11, 5, 5], [3, 9, 9, 7, 5, 5], null, [3, 11, 9, 7, 5], null, null, [3, 11, 9, 7, 5, 5], [3, 13, 13, 7, 5, 5], null, [3, 11, 11, 7, 5, 5], [3, 13, 13, 7, 5, 5], [3, 13, 13, 7, 5, 5, 9], null, [3, 13, 11, 7, 5, 5], [3, 7, 5, 13, 5], [3, 11, 11, 7, 5, 5], null, null, [3, 11, 13, 7, 5, 5], null, [3, 7, 5, 7, 5, 5, 7]]],
  // ['behindManes', -1, 1, [null, [3, 13, 13, 7, 5, 5], null, [3, 13, 13, 5, 5, 7], null, null, null, null, null, [3, 13, 13, 7, 5], [3, 13, 13, 7, 5, 5, 13], [3, 9, 11, 5, 5], [3, 9, 9, 7, 5, 5], null, null, null, null, null, [3, 13, 13, 7, 5, 5], null, [3, 11, 11, 7, 5, 5], [3, 13, 13, 7, 5, 5], null, null, null, [3, 7, 5, 13, 5]]],
  ['behindManes', -1, 1, [null, [3, 13, 13, 7, 5, 5], null, [3, 13, 13, 5, 5, 7], null, null, null, null, null, [3, 13, 13, 7, 5], [3, 13, 13, 7, 5, 5, 13], [3, 9, 11, 5, 5], [3, 9, 9, 7, 5, 5], null, null, null, null, null, [3, 13, 13, 7, 5, 5], null, [3, 11, 11, 7, 5, 5], [3, 13, 13, 7, 5, 5], null, null, null, [3, 7, 5, 13, 5], null, [3, 9, 13, 7, 5, 5], [3, 9, 13, 7, 5, 5], null, [3, 13, 5, 11, 5], []]],
  // ['backFrontManes', -1, 1, [null, [3, 7, 7, 5, 5, 5], null, [3, 9, 9, 7, 5, 5], null, null, null, null, [3, 11, 11, 5], null, [3, 7, 7, 5, 5], [3, 9, 9, 7, 5], null, null, [3, 7, 9, 5, 5, 5], [3, 7, 13, 5, 5, 5], [3, 7, 7, 7, 5, 5], [5, 13, 13, 9, 7, 7], [3, 7, 5, 7, 5, 5], null, [5, 9, 13, 7], [3, 7, 13, 7, 5, 5], [3, 9, 5, 9, 5]]],
  ['backFrontManes', -1, 1, [null, [3, 7, 7, 5, 5, 5], null, [3, 9, 9, 7, 5, 5], null, null, null, null, [3, 11, 11, 5], null, [3, 7, 7, 5, 5], [3, 9, 9, 7, 5], null, null, [3, 7, 9, 5, 5, 5], [3, 7, 13, 5, 5, 5], [3, 7, 7, 7, 5, 5], [5, 13, 13, 9, 7, 7], [3, 7, 5, 7, 5, 5], null, [5, 9, 13, 7], [3, 7, 13, 7, 5, 5], [3, 9, 5, 9, 5], [], [], [], [], [], []]],
  // ['backBehindManes', -1, 1, [null, [3, 7, 7, 5, 5, 5], [5, 13, 11, 9, 7, 7], null, [5, 11, 11, 7, 7, 7], [3, 7, 7, 5, 5], [3, 9, 11, 7, 5, 5], [3, 9, 5, 5, 5], null, [3, 5, 11, 5], null, null, [3, 5, 5, 5], [3, 11, 7, 5, 5], null, null, [3, 7, 7, 7, 5, 5], [5, 13, 13, 9, 7, 7], [3, 7, 5, 7, 5, 5], [3, 7, 13, 7, 5, 5], [5, 9, 13, 7], [3, 7, 13, 7, 5, 5], [3, 9, 5, 9, 5]]],
  ['backBehindManes', -1, 1, [null, [3, 7, 7, 5, 5, 5], [5, 13, 11, 9, 7, 7], null, [5, 11, 11, 7, 7, 7], [3, 7, 7, 5, 5], [3, 9, 11, 7, 5, 5], [3, 9, 5, 5, 5], null, [3, 5, 11, 5], null, null, [3, 5, 5, 5], [3, 11, 7, 5, 5], null, null, [3, 7, 7, 7, 5, 5], [5, 13, 13, 9, 7, 7], [3, 7, 5, 7, 5, 5], [3, 7, 13, 7, 5, 5], [5, 9, 13, 7], [3, 7, 13, 7, 5, 5], [3, 9, 5, 9, 5], [3, 7, 7, 5], [3, 11, 7, 5, 5], [3, 11, 7, 7, 5], [3, 11, 7, 7, 5, 5, 5], [3], [3, 9, 7, 5, 5]]],
  ['horns', -1, 1, [null, [3, 7], [3, 5], [3, 7], [3, 5], [3, 7], [3, 9, 9], [3, 9, 13], [3, 9, 13], [3, 7], [3, 11, 5, 5], [3, 9, 5, 5], [3, 9, 5], [3, 7], [3, 9]]],
  ['hornsBehind', -1, 1, [null, null, null, null, [3, 5], [3, 7], [3, 9, 9], [3, 9, 13], [3, 9, 13], [3, 7], [3, 11, 5, 5], [3, 9, 5, 5], [3, 9, 5], [3, 7], []]],
  ['ears', -1, 1, [[3, 7], [3, 9], [3, 9], [3, 5], [3, 7, 7], [3, 7, 9]]],
  ['earsFar', -1, 1, [[3, 7], [3, 9], [3, 9], [3, 5], [3, 7, 7], [3, 7, 9]]],
  ['frontLegHooves', 1, 39, [null, [3], [3], [5], [5], [5], [3]]],
  ['backLegHooves', 1, 27, [null, [3], [3], [5], [3]]],
  ['wings', 1, 13, [null, [3, 5, 9], [5], [3, 5, 9], [3]]],
  ['tails', 0, 3, [null, [3, 11, 13, 7, 5, 5], [3, 13, 9, 7, 5, 5], [3, 11, 9, 7, 5, 5], [3, 13, 11, 7, 5, 5], [3, 9, 13, 7, 5, 5], [3, 11, 13, 7, 5, 5, 5], [5, 13, 11, 7, 7], [3, 11, 13, 5, 7, 5], [3, 11, 11, 7, 5, 5, 11], [3, 11, 13, 5], [3, 11, 11, 7, 5, 5], [3, 9, 9, 7, 5], [3, 5, 9, 5], [5, 11, 9, 7, 7], [5, 7], [3, 5, 7], [5, 11, 9, 7, 7], [7, 13, 11, 9, 9], [5, 7], [3, 11, 13, 7, 5, 5], [3, 9, 11, 7, 5, 5], [3, 11, 13, 7, 5, 5], [3, 9, 11, 7, 5, 5], [3, 13, 7], [3, 5, 13, 13, 11, 11], [3, 9, 13, 13, 13, 11], [3, 7, 5, 13, 5], [5, 13, 9, 9, 7, 7], [5, 13, 9, 9, 7, 7], [3, 5, 7]]],
  ['noses', 0, 26, [[3], [3], [5]]],
  ['facialHair', -1, 1, [null, null, null, [3], [3, 7, 9], [3, 5], null, [3, 7, 17], [3, 17, 7], [3, 13, 7, 7], [3, 13, 7, 9], [3, 13, 7, 9], [3, 13, 7, 9], [5, 13, 9, 13], [5, 13, 9, 13], [3, 17, 7, 11]]],
  ['facialHairBehind', -1, 1, [null, [3], [3, 7], null, [3, 7, 9], [3, 5], [3, 7, 9], [3, 7, 17], [3, 17, 7], [3, 13, 7, 7], [3, 13, 7, 9], [3, 13, 7, 9], [3, 13, 7, 9], [5, 13, 9, 13], [5, 13, 9, 13], [3, 17, 7, 11]]],
  ['headAccessoriesBehind', -1, 1, [null, [3, 5], [3, 9, 9, 9], [3, 5, 7, 9, 7], [3, 5], [3, 7], [3, 7, 13], [3, 11, 11], [3, 11, 13], [3, 11, 7, 9, 9], [3, 9, 13], [5, 11, 13], [3, 7], [3, 9, 13], [3, 9], [3, 9], [3, 7], [3, 7], [3, 7, 5, 5], [3, 7, 11]]],
  ['neckAccessories', 1, 16, [null, [3, 5], [3, 5, 9, 5], [3, 5, 7, 13, 7], [3, 5], [3, 7, 7, 5, 5], [3, 5, 7], [3, 5], [3], [3], [3, 5, 9, 5], [3, 5, 9], [3, 9], [3], [3]]],
  ['frontLegAccessories', 1, 39, [null, [3, 13, 13, 13, 13]]],
  ['backLegAccessories', 1, 27, [null, [3, 13, 13, 13, 13]]],
  ['chestAccessories', 1, 16, [null, [3, 5, 9], [3, 7, 5, 5, 7, 5, 7, 5, 7, 11, 9, 5, 11], [5, 7, 11], [5, 7]]],
  ['backAccessories', 1, 16, [null, [3], [3, 7, 13, 5], [3, 7, 13, 5], [3, 9, 13, 5], [3, 3]]],
  ['waistAccessories', 1, 17, [null, [9], [9], [9]]],
  ['earAccessories', -1, 1, [null, [3], [3], [3], [3], [5], [3, 11], [3], [3], [3], [3, 7, 7, 7], [3, 11, 11, 11], [3]]],
  ['earAccessoriesBehind', -1, 1, [null, null, null, null, null, null, null, null, [3], null, [3, 7, 7, 7], [3, 11, 11, 11], []]],
  ['extraAccessories', -1, 1, [[11], [5], [5], [7], [9], [13], [5], [11], [9], [11, 11], [9], [9, 9], [7], [9], null, null, [13], [13]]],
  ['extraAccessoriesBehind', -1, 1, [[11], [5], null, [7], [9], null, null, null, null, null, null, null, [7], [9], [5], [5], [13], []]],
];

describe('sprites', () => {
  describe('pony', () => {
    sets.map(([name, index, frames, expectedPatterns]) => it(name, () => {
      const field = sprites[name] as any;
      const counts = map(index !== -1 ? field[index] : field, (x: any[] | undefined) => x ? x.map(y => y.colors) : null);
      expect(index === -1 ? 1 : field.length).eql(frames, 'frame count');
      expect(counts).eql(expectedPatterns, `\n\nACT: ${JSON.stringify(counts)}\nEXP: ${JSON.stringify(expectedPatterns)}\n\n`);
    }));
  });
});
