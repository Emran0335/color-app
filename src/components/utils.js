
//how to convert rgb to 16 base hexadecimal number

function componentToHex(c) {
	var hex = c.toString(16); // 16 base hexadecimal number converted to string
	return hex.length === 1 ? "0" + hex : hex;
}

function rgbTohex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default rgbTohex;