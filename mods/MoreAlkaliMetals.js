elements.lithium = {
	color: "#acb1b8",
	behavior: behaviors.POWDER,
	category: "powders",
	state: "solid",
    tempHigh: 180.5,
    stateHigh: "molten_lithium",
    density: 534,
    reactions: {
    "water":{elem1:"explosion",elem2:"hydrogen"},
    "sugar_water:"{elem1:"explosion",elem2:"hydrogen"},
    "pool_water:"{elem1:"explosion",elem2:"hydrogen"},
    "dirty_water:"{elem1:"explosion",elem2:"hydrogen"},
    "salt_water:"{elem1:"explosion",elem2:"hydrogen"},
    "seltzer_water:"{elem1:"explosion",elem2:"hydrogen"},
}
}

elements.molten_lithium = {
	color: "#E37B53",
    behavior: behaviors.MOLTEN,
    fireColor: "#FF0038",
    density: 534,
    tempLow: 180.5,
    stateLow: "lithium",
    category: "states"
    reactions: {
    "water":{elem1:"explosion",elem2:"hydrogen"},
    "sugar_water:"{elem1:"explosion",elem2:"hydrogen"},
    "pool_water:"{elem1:"explosion",elem2:"hydrogen"},
    "dirty_water:"{elem1:"explosion",elem2:"hydrogen"},
    "salt_water:"{elem1:"explosion",elem2:"hydrogen"},
    "seltzer_water:"{elem1:"explosion",elem2:"hydrogen"},
}
}