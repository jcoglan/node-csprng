const Seq = require('sequin'),
  crypto = require('crypto');

const DEFAULT_BITS = 128,
  DEFAULT_RADIX = 36,
  DIGITS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

const rand = function (bits, radix) {
  bits = bits || DEFAULT_BITS;
  radix = radix || DEFAULT_RADIX;

  if (radix < 2 || radix > 64) {
    throw new Error('radix argument must be between 2 and 64');
  }

  const entropy = crypto.randomBytes(bits),
    length = Math.ceil(bits * Math.log(2) / Math.log(radix)),
    stream = new Seq(entropy);

  let string = '';

  while (string.length < length) {
    string += DIGITS[stream.generate(radix)];
  }

  return string;
};

module.exports = rand;