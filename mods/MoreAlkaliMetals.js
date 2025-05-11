elements.Lithium = {
	color: "#acb1b8",
	behavior: behaviors.POWDER,
	category: "Powders",
	state: "solid",
    tempHigh: 180.5,
    stateHigh: "Molten_Lithium",
    density: 534,
}

elements.Molten_Lithium = {
	color: "#C0C0C0",
    behavior: behaviors.MOLTEN,
    fireColor: "#FF0038",
    density: 534,
    tempLow: 180.5,
    stateLow: "Lithium",
}