const rand = require('../lib/csprng.js'),
  test = require('tape');

test('base16 cryptography', (timeout) => {
  timeout.timeoutAfter(30000);
  timeout.ok(rand(160, 16), 'base16 encryption succeeded');
  timeout.end();
});

test('base32 cryptography', (timeout) => {
  timeout.timeoutAfter(30000);
  timeout.ok(rand(160, 32), 'base32 encryption succeeded');
  timeout.end();
});

test('base36 cryptography', (timeout) => {
  timeout.timeoutAfter(30000);
  timeout.ok(rand(160, 36), 'base36 encryption succeeded');
  timeout.end();
});

test('base64 cryptography', (timeout) => {
  timeout.timeoutAfter(30000);
  timeout.ok(rand(160, 64), 'base64 encryption succeeded');
  timeout.end();
});