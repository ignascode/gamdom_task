const capitalizeFirstLetter = (str: string) => {
	if (str && str.length > 0) {
		return str
			.replace(/([a-z])([A-Z])/g, '$1 $2')
			.replace(/^./, str[0].toUpperCase());
	}
	return str;
};

export default capitalizeFirstLetter;
