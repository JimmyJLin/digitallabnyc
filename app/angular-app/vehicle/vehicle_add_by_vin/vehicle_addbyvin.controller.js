angular.module('naBaseApp').controller('VehicleAddbyVinController', VehicleAddbyVinController);

function VehicleAddbyVinController($scope, addbyVinProvider){
  var vm = this;
  vm.finalvehicle = {};

// 1GNEK13Z34J221437
  vm.addCond = function(){
      var vin = vm.vin;
      addbyVinProvider.getvehiclebyVin( vin, function(err, data){
        $scope.finished_loading = true;
        if (err) {
            $scope.page_load_error = err.message;
        } else {
            // console.log('DEBUG controller ' + JSON.stringify(data) );
            $scope.vehicle = data;
            vm.vin = $scope.vehicle.VIN;
            vm.make = $scope.vehicle.VehicleMake;
            vm.year = JSON.parse($scope.vehicle.DataBasic).year;
            vm.model = JSON.parse($scope.vehicle.DataBasic).model.name;
            vm.trim = JSON.parse($scope.vehicle.DataBasic).trim.name;
            vm.bodystyle = JSON.parse($scope.vehicle.DataBasic).vehicleStyle;
            vm.vehicleType =JSON.parse($scope.vehicle.DataBasic).vehicleType;
            vm.itemNo = $scope.vehicle.ItemGuid;
            vm.addedsDate = $scope.vehicle.DateCreated;
            vm.engine = JSON.parse($scope.vehicle.DataSquishDetail).engine;
            // vm.engine.availability = JSON.parse($scope.vehicle.DataSquishDetail).engine.availability;
            // vm.engine.cylinder = JSON.parse($scope.vehicle.DataSquishDetail).engine.cylinder;
            // vm.engine.compressionRatio = JSON.parse($scope.vehicle.DataSquishDetail).engine.compressionRatio;
            // vm.engine.size = JSON.parse($scope.vehicle.DataSquishDetail).engine.size;
            // vm.engine.displacement = JSON.parse($scope.vehicle.DataSquishDetail).engine.displacement;
            // vm.engine.fuelType = JSON.parse($scope.vehicle.DataSquishDetail).engine.fuelType;
            // vm.engine.horsepower = JSON.parse($scope.vehicle.DataSquishDetail).engine.horsepower;
            // vm.engine.torque = JSON.parse($scope.vehicle.DataSquishDetail).engine.torque;
            // vm.engine.totalValves = JSON.parse($scope.vehicle.DataSquishDetail).engine.totalValves;
            // vm.engine.manufacturerEgineCode = JSON.parse($scope.vehicle.DataSquishDetail).engine.manufacturerEgineCode;
            // vm.engine.type = JSON.parse($scope.vehicle.DataSquishDetail).engine.type;
            console.log( vm.vin , $scope.vehicle);

        }
      });
  }

  vm.addVehicle = function(){
    var vehicleAdd = {
      VIN: vm.vin,
      Year:vm.year,
      Make:vm.make,
      Model:vm.model,
      Trim:vm.trim,
      bodystyle:vm.bodystyle,
      vehicleType:vm.vehicleType,
      itemNo:vm.itemNo,
      mileage:vm.mileage,
      location:vm.location,
      inventoryStatus:vm.inventoryStatus,
      date:vm.date,
      description: vm.description,
      exteriorColor: vm.exterior_color,
      interiorColor: vm.interior_color,
      searchColor: vm.search_color,
      seat:vm.seat,
      door:vm.door,
      engine:vm.engine,
      transmission:vm.transmission,
      drivetrain:vm.drivetrain,
      fuel:vm.fuel,
      brakes:vm.brakes,
      titleStatus:vm.titleStatus,
      titleState:vm.titleState,
      warranty:vm.warranty,
      drivetrainWarranty: vm.drivetrainWarranty,
      additionalWarranty: vm.additionalWarranty,
      certifiedPreOwned:vm.certifiedPreOwned,
      guaranteedFinancing: vm.guaranteedFinancing,
      sellerGuarantee : vm.sellerGuarantee,
      yellowLight : vm.yellowLigh,
      interiorOptions : vm.interirOptions,
      exteriorOptions : vm.exteriorOptions,
      premiumOptions: vm.premiumOptions,
      truckOptions: vm.truckOptions
    };
    console.log(vehicleAdd)
  }
//
// Add/Edit Vehicle
// 1.	Vehicle Details
// a.	VIN
// b.	Year
// c.	Make
// d.	Model
// e.	Trim
// f.	Body Style
// i.	SUV
// ii.	Sedan
// iii.	Regular Cab Pickup
// iv.	Extended Cab Pickup
// v.	Crew Cab Pickup
// vi.	Convertible
// vii.	Coupe
// viii.	Hatchback
// ix.	Wagon
// x.	Minivan
// xi.	Passenger Van
// xii.	Cargo Van
// g.	Vehicle Type
// i.	New
// ii.	Used
// iii.	Certified Pre-Owned
// iv.	Salvage
// h.	Item Number
// i.	Mileage
// j.	Location – Dropdown w/ Company Locations. List of Company Locations. If only one, field is greyed out. Default is the Company who Adds Vehicle.
// k.	Inventory Status – When Vehicle is added status changes to Not Ready to List.
// i.	Not Ready to List
// ii.	Reconditioning
// iii.	In Detail
// iv.	Needs Photos
// v.	Needs Condition Report
// vi.	Needs Pricing
// vii.	Ready to List
// viii.	In Marketplace
// ix.	Sold
// x.	Unsold
// xi.	Loaner/Dealership Vehicle
// xii.	Off Site
// l.	Date Added
// m.	Description
// 2.	Exterior/Interior Info
// a.	Exterior Color
// b.	Interior Color
// c.	Search Color
// i.	Black
// ii.	Blue
// iii.	Brown
// iv.	Copper
// v.	Gold
// vi.	Grey
// vii.	Green
// viii.	Maroon
// ix.	Orange
// x.	Purple
// xi.	Red
// xii.	Silver
// xiii.	Tan
// xiv.	Teal
// xv.	White
// xvi.	Yellow
// d.	Seats
// i.	Leather
// ii.	Cloth
// iii.	Vinyl
// e.	Doors
// i.	1
// ii.	2
// iii.	3
// iv.	4
// v.	5
// vi.	6
// vii.	7
// viii.	8
// ix.	9
// x.	10
// 3.	Mechanical Info
// a.	Engine
// b.	Transmission
// i.	Automatic
// ii.	Automatic 3-Speed
// iii.	Automatic 4-Speed
// iv.	Automatic 5-Speed
// v.	Automatic 6-Speed
// vi.	Automatic 7-Speed
// vii.	Automatic 8-Speed
// viii.	Automatic 9-Speed
// ix.	Manual
// x.	Manual 4-Speed
// xi.	Manual 5-Speed
// xii.	Manual 6-Speed
// xiii.	Manual 7-Speed
// xiv.	Shiftable Automatic
// xv.	Continuously Variable/CVT
// c.	Drivetrain
// i.	Front Wheel Drive
// ii.	Rear Wheel Drive
// iii.	All Wheel Drive
// iv.	4 Wheel Drive
// d.	Fuel
// i.	Gasoline
// ii.	Diesel
// iii.	Gasoline/E85
// iv.	Hybrid Electric
// v.	CNG
// vi.	Hydrogen
// vii.	LPG
// e.	Brakes
// 4.	Title and Warranty Info
// a.	Title Status
// b.	Title State
// c.	Full Warranty
// i.	No Warranty
// ii.	Manufacturer Warranty Active
// iii.	Aftermarket Warranty Available
// iv.	36 Months/36,000 Miles
// v.	48 Months/48,000 Miles
// vi.	48 Months/50,000 Miles
// vii.	48 Months/60,000 Miles
// viii.	48 Months/75,000 Miles
// ix.	48 Months/100,000 Miles
// x.	60 Months/50,000 Miles
// xi.	60 Months/60,000 Miles
// xii.	60 Months/75,000 Miles
// xiii.	60 Months/100,000 Miles
// xiv.	72 Months/60,000 Miles
// xv.	72 Months/75,000 Miles
// xvi.	72 Months/100,000 Miles
// xvii.	AUL 36 Month/36,000 Miles Service Contract
// d.	Drivetrain Warranty
// i.	3 Month/3,000 Miles
// ii.	12 Month/12,000 Miles
// iii.	18 Month/18,000 Miles
// iv.	24 Month/24,000 Miles
// v.	60 Month/100,000 Miles
// e.	Additional Warranty
// f.	Certified Pre-Owned
// g.	Guaranteed Financing
// h.	Seller Guarantee
// i.	Guarantee (Green)
// ii.	As-Is (Red)
// i.	Yellow Light
// i.	Yes
// ii.	No
// 5.	Interior Options
// a.	3rd Row Seating
// b.	Air Conditioning
// c.	AM/FM Radio
// d.	Cassette
// e.	CD Charger
// f.	CD Player
// g.	Child Safety Locks
// h.	Climate Control
// i.	Cruise Control
// j.	Driver Air Bag
// k.	Driver Heated Seats
// l.	Driver Front Air Bag
// m.	Dual Power Seats
// n.	Extra Keys
// o.	F and R Side Air Bags
// p.	Floor Mats
// q.	Front Side Air Bag
// r.	Integrated Phone
// s.	Leather Seats
// t.	Lumbar Support
// u.	Memory Seats
// v.	Power Door Locks
// w.	Power Mirrors
// x.	Power Seats
// y.	Power Windows
// z.	Premium Sound System
// aa.	Rear Bucket Seats
// bb.	Rear Heat Ducts
// cc.	Telescoping Wheel
// dd.	Tilt Wheel
// ee.	Trip Computer
// ff.	Video System
// 6.	Exterior Options
// a.	ABS (4-Wheel)
// b.	Alloy Wheels
// c.	Anti-Theft Alarm
// d.	Automatic Headlights
// e.	Flip-Up Roof
// f.	Fog Lights
// g.	Full Sized Spare
// h.	Heated Mirrors
// i.	Keyless Entry
// j.	Luggage Rack
// k.	Moon Roof
// l.	Power Steering
// m.	Premium Wheels
// n.	Privacy Glass
// o.	Rear Defrost
// p.	Rear Spoiler
// q.	Rear Wiper
// r.	Remote Trunk Release
// s.	Roof Rack
// t.	Sliding Sun Roof
// u.	Traction Control
// v.	Two-Tone Paint
// 7.	Premium Options
// a.	Adjustable Pedals
// b.	Air Suspension
// c.	Auxiliary Audio Input
// d.	Back-Up Camera
// e.	BOSE Sound System
// f.	Cooling Driver Seat
// g.	Cooling Passenger Seat
// h.	Custom Paint
// i.	Driveaway Protection
// j.	Driver Cooled Seats
// k.	Dual Zone Climate Control
// l.	DVD Player
// m.	Electro-Chromatic Mirror
// n.	Electronic Compass
// o.	Electronic Stability Control
// p.	External Temperature
// q.	Hands-Free Bluetooth
// r.	Heated Driver Seat
// s.	Heated Passenger Seat
// t.	Heated Steering Wheel
// u.	HID Headlamps
// v.	HomeLink Systems
// w.	Leather Door Panels
// x.	Leather Steering Wheel
// y.	Microsoft Sync
// z.	MP3 Input
// aa.	Navigation System
// bb.	OnStar
// cc.	Pass Through Rear Seat
// dd.	Power Folding Mirrors
// ee.	Power Liftgate
// ff.	Power Sliding Door
// gg.	Rear Audio Control
// hh.	Rear Heat/AC Controls
// ii.	Rear Heated Seat
// jj.	Rear Parking Sensors
// kk.	Remote Start
// ll.	Tire Monitoring
// mm.	Satellite Radio
// nn.	Side Airbags
// oo.	Steering Wheel Audio Controls
// pp.	System
// qq.	Turn Signal Mirrors
// rr.	Wireless Headphones
// ss.	Xenon Lights
// tt.	XM Radio
// 8.	Truck Options
// a.	Bed Liner
// b.	Custom Bed
// c.	Custom Bumper
// d.	Dual Rear Wheels
// e.	Dump Bed
// f.	Front Tow Hooks
// g.	Grille Guard
// h.	Hard Tonneau Cover
// i.	Hydraulic Lift
// j.	Lifted
// k.	Nerf Bars
// l.	Off-Road Package
// m.	Oversize Off-Road Tires
// n.	Pickup Shell/Cover
// o.	Running Boards
// p.	Sliding Rear Window
// q.	Snow Plow
// r.	Stability Rack
// s.	Stepside Bed
// t.	Third Door
// u.	Towing Package
// v.	Third Door
// w.	Towing Package
// x.	Trailer Brake
// y.	Underbody Hoist
// z.	Winch
// 9.	Add Custom Options
// a.	Description





}
