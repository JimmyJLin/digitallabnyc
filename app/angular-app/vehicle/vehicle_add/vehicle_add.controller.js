angular.module('naBaseApp').controller('VehiclesAddController', VehiclesAddController);

function VehiclesAddController($scope, vehicleProvider){
  var vm = this;

  // Truck Option Checkbox
  $scope.truckOptions = [
    'Bed Liner',
    'Custom Bed',
    'Custom Bumper',
    'Dual Rear Wheels',
    'Dump Bed',
    'Front Tow Hooks',
    'Grille Guard',
    'Hard Tonneau Cover',
    'Hydraulic Lift',
    'Lifted',
    'Nerf Bars',
    'Off-Road Package',
    'Oversize Off-Road Tires',
    'Pickup Shell Cover',
    'Running Boards',
    'Sliding Rear Window',
    'Snow Plow',
    'Stability Rack',
    'Stepside Bed',
    'Third Door',
    'Towing Package',
    'Trailer Brake',
    'Underbody Hoist',
    'Winch'
  ];
  $scope.truckOption = {
    options: ['truckOption']
  };

  // Premium Options Checkbox
  $scope.premiumOptions = [
    'Adjustable Pedals',
    'Air Suspension',
    'Auxiliary Audio Input',
    'Back-Up Camera',
    'BOSE Sound System',
    'Cooling Driver Seat',
    'Cooling Passenger Seat',
    'Custom Paint',
    'Driveaway Protection',
    'Driver Cooled Seats',
    'Dual Zone Climate Control',
    'DVD Player',
    'Electro-Chromatic Mirror',
    'Electronic Compass',
    'Electronic Stability Control',
    'External Temperature',
    'Hands-Free Bluetooth',
    'Heated Driver Seat',
    'Heated Passenger Seat',
    'Heated Steering Wheel',
    'HID Headlamps',
    'HomeLink Systems',
    'Leather Door Panels',
    'Leather Steering Wheel',
    'Microsoft Sync',
    'MP3 Input',
    'Navigation System',
    'OnStar',
    'Pass Through Rear Seat',
    'Power Folding Mirrors',
    'Power Liftgate',
    'Power Sliding Door',
    'Rear Audio Control',
    'Rear Heat/AC Controls',
    'Rear Heated Seat',
    'Rear Parking Sensors',
    'Remote Start',
    'lTire Monitoring',
    'Satellite Radio',
    'Side Airbags',
    'Steering Wheel Audio Controls',
    'System',
    'Turn Signal Mirrors',
    'Wireless Headphones',
    'Xenon Lights',
    'XM Radio'
  ]
  $scope.premiumOption = {
    options: ['premiumOption']
  };

  // Interior Options Checkbox
  $scope.interiorOptions = [
    '3rd Row Seating',
    'Air Conditioning',
    'AM/FM Radio',
    'Cassette',
    'CD Charger',
    'CD Player',
    'Child Safety Locks',
    'Climate Control',
    'Cruise Control',
    'Driver Air Bag',
    'Driver Heated Seats',
    'Driver Front Air Bag',
    'Dual Power Seats',
    'Extra Keys',
    'F and R Side Air Bags',
    'Floor Mats',
    'Front Side Air Bag',
    'Integrated Phone',
    'Leather Seats',
    'Lumbar Support',
    'Memory Seats',
    'Power Door Locks',
    'Power Mirrors',
    'Power Seats',
    'Power Windows',
    'Premium Sound System',
    'Rear Bucket Seats',
    'Rear Heat Ducts',
    'Telescoping Wheel ',
    'Tilt Wheel',
    'Trip Computer',
    'Video System'
  ]
  $scope.interiorOption = {
    options: ['interiorOption']
  };

  // Interior Options Checkbox
  $scope.exteriorOptions = [
    'ABS (4-Wheel)',
    'Alloy Wheels',
    'Anti-Theft Alarm',
    'Automatic Headlights',
    'Flip-Up Roof',
    'Fog Lights',
    'Full Sized Spare',
    'Heated Mirrors',
    'Keyless Entry',
    'Luggage Rack',
    'Moon Roof',
    'Power Steering',
    'Premium Wheels',
    'Privacy Glass',
    'Rear Defrost',
    'Rear Spoiler',
    'Rear Wiper',
    'Remote Trunk Release',
    'Roof Rack',
    'Sliding Sun Roof',
    'Traction Control',
    'Two-Tone Paint'
  ]
  $scope.exteriorOption = {
    options: ['exteriorOption']
  };

  vm.addVehicle = function(){
    var owner = "617a69c3-bd34-445c-a762-1bbcf228f7bb"

      var addVehicleData = JSON.stringify({
        'submitter': "submitter",
        'vin': vm.vin,
        'year': vm.year,
        'make': vm.make,
        'model': vm.model,
        'type': vm.type,
        'description': vm.description,
        'price': vm.price,
        'owner': owner,
        'activity': 'add'
      })


  vehicleProvider.addVehicle(addVehicleData);

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
      engine:{
        'availability': vm.availability,
        'cylinder': vm.cylinder,
        'compressionRatio': vm.compressionRatio,
        'size': vm.size,
        'displacement': vm.displacement,
        'fuelType': vm.fuelType,
        'horsepower': vm.horsepower,
        'torque': vm.torque,
        'totalValves': vm.totalValves,
      },
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
    console.log(JSON.stringify(vehicleAdd))
  }



}
