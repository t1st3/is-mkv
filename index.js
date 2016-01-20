'use strict';

module.exports = function (buf) {
	if (!buf || buf.length < 39) {
		return false;
	}

	return buf[31] === 109 &&
		buf[32] === 97 &&
		buf[33] === 116 &&
		buf[34] === 114 &&
		buf[35] === 111 &&
		buf[36] === 115 &&
		buf[37] === 107 &&
		buf[38] === 97;
};
