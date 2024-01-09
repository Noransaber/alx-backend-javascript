const updateUniqueItems = (map) => {
	  for (let [key, value] of map) {
		      if (value === 1) {
			            map.set(key, 100);
			          }
		    }
	  return map;
};
