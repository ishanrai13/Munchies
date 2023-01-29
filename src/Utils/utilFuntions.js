export const compressStringLength = (inputString = '', requiredLength = 20) => {
	if (inputString.length <= requiredLength) {
		return inputString;
	}
	return inputString.substring(0, requiredLength - 3) + '...';
};
