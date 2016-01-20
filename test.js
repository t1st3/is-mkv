import path from 'path';
import readChunk from 'read-chunk';
import test from 'ava';
import isMkv from './';

test('should detect MKV from buffer', function (t) {
	readChunk(path.join(__dirname, 'fixture.mkv'), 0, 39, function (err, buf) {
		t.is(err, null);
		t.is(isMkv(buf), true);
	});
});

test('should not detect MKV on a non-MKV file', function (t) {
	readChunk(path.join(__dirname, 'fixture.jpg'), 0, 39, function (err, buf) {
		t.is(err, null);
		t.is(isMkv(buf), false);
	});
});
