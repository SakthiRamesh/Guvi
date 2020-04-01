var dimensions = {Overall_length : 3500, Overall_width : 1600, Overall_height: 1490, Wheelbase : 2360, Track_width : {Front : 1405, Rear : 1400}, Minimum_turning_radius : 4.5, Minimum_ground_clearance : 170}
console.log(dimensions)
console.log(dimensions.Overall_length)

/*console.log(dimensions.3500)
error: Uncaught SyntaxError: missing ) after argument list*/
console.log(Object.values(dimensions))
/* First letter of the Object.values must be in upper case. */
console.log(Object.keys(dimensions))

// To get a specific value and key
console.log(Object.values(dimensions)[0])
console.log(Object.keys(dimensions)[1])
console.log(Object.values(dimensions.Track_width)[0])
console.log(Object.keys(dimensions.Track_width)[1])


//var capacities1 = {seating capacity : 5, Fuel Tank capacity: 35}

//console.log(capacities.seating capacity)
//console.log(Object.keys(capacities)(Seating capacity))
//console.log(Object.keys(capacities.Seating capacity))
//console.log(Object.keys(capacities)(Seating capacity))
//console.log(Object.keys(capacities.Seating capacity))
//if we use space b/w seating capacity, the following error happens
//error: Uncaught SyntaxError: missing ) after argument list*/

var capacities = {Seating_capacity : 5, Fuel_Tank_capacity: 35}
console.log(capacities)
console.log(Object.keys(capacities)[0])


var engine = {Type:"KB-Series", Number_of_cylinders: 3, Number_of_valves: 12,  Capacity : 998, BorexStroke : "73.0*79.5", Compression_ratio : "10:1", Maximum_power : "67/6200", Maximum_torque : "90/3500", Fuel_distribution : "multipoint injection"}

console.log(engine.BorexStroke)
console.log(engine.Fuel_distribution)

var transmission = {type : "5-speed MT"}

var Chassis = {Steering: "Rack & Pinion, Power assisted", Brakes : {Front : "ventilated discs", Rear : "Drums"}, suspension: {Front : "Macpherson strut & coil spring", Rear : "isolated trailing link & coil spring"}, shock_absorbers : "gas filled", tyre_tubeless : "155/80R13"} 

var weights = {kerb_weight : "860-880", Gross_vehicle_weight : 1320}


var specifications = {dimensions : {Overall_length : 3500, Overall_width : 1600, Overall_height: 1490, Wheelbase : 2360, Track_width : {Front : 1405, Rear : 1400}, Minimum_turning_radius : 4.5, Minimum_ground_clearance : 170}, capacities : {Seating_capacity : 5, Fuel_Tank_capacity: 35}, engine : {Type:"KB-Series", Number_of_cylinders: 3, Number_of_valves: 12,  Capacity : 998, BorexStroke : "73.0*79.5", Compression_ratio : "10:1", Maximum_power : "67/6200", Maximum_torque : "90/3500", Fuel_distribution : "multipoint injection"}, transmission : {type : "5-speed MT"}, Chassis : {Steering: "Rack & Pinion, Power assisted", Brakes : {Front : "ventilated discs", Rear : "Drums"}, suspension: {Front : "Macpherson strut & coil spring", Rear : "isolated trailing link & coil spring"}, shock_absorbers : "gas filled", tyre_tubeless : "155/80R13"}, weights : {kerb_weight : "860-880", Gross_vehicle_weight : 1320}}
console.log(specifications)
