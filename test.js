import path from 'path';
import readChunk from 'read-chunk';
import test from 'ava';
import isMkv from '.';

test('should detect MKV from buffer', t => {
	t.is(isMkv(readChunk.sync(path.join(__dirname, 'fixture.mkv'), 0, 39)), true);
});

test('should not detect MKV on a non-MKV file', t => {
	t.is(isMkv(readChunk.sync(path.join(__dirname, 'fixture.jpg'), 0, 39)), false);
});
