// With Function
function Car(brand, colour, maxSpeed, chassisNumber) {
  this.brand = brand;
  this.colour = colour;
  this.maxspeed = maxSpeed;
  this.chassisNubmer = chassisNumber;
}

Car.prototype.drive = function () {
  console.log(`${this.brand} ${this.colour} is driving`);
};

Car.prototype.break = function () {
  console.log(`${this.brand} ${this.colour} is breaking`);
};

const myCar = new Car("Ferrari", "Red", 110, "F 4242 JK");
// console.log(myCar);
// console.log(myCar.brand);
// console.log(myCar.drive());

// ------------------------------------------------------------------------
//  Wifi
class Wifi {
    constructor(name, provider, status, band){
        this.name = name;
        this.provider = provider;
        this.status = status;
        this.band = band
    }
}

let john_wifi = new Wifi("john-wifi", "Indihome", true, 2.4);

// ------------------------------------------------------------------------
// Phone
class Phone {
    #bluetooth; #wifi;
  constructor(brand, colour) {
    this.brand = brand;
    this.colour = colour;
    this.#bluetooth = true;
    this.#wifi = true;
    this.bluetoothConnection = false;
    this.wifiConnection = false;
    this.connectedToWifi = '';
  }
    // Bluetooth Feature
  get bluetooth(){
    return this.#bluetooth;
  }

  set bluetooth(bluetooth){
    if(bluetooth == true){
        console.log(`bluetooth within ${this.brand} is enabled, you can't change it!`);
    } else {
        console.log(`bluetooth within ${this.brand} is disabled, you can't change it!`);
    }
}
    // Wifi Feature
  get wifi(){
    return this.#wifi;
  }

  set wifi(wifi){
    if(wifi == true){
        console.log(`wifi within ${this.brand} is enabled, you can't change it!`);
    } else {
        console.log(`wifi within ${this.brand} is disabled, you can't change it!`);
    }
}

    // Method to Turning on Bluetooth
  enableBluetooth() {
    if (this.bluetooth == true) {
      console.log(`Bluetooth ${this.brand} is on`);
      this.bluetoothConnection = true;
    } else {
      console.log(`Bluetooth within ${this.brand} is disabled`);
    }
  }
    // Method to Turning on Wifi
  enableWifi() {
    if (this.wifi == true) {
      console.log(`Wifi within ${this.brand} is on`);
      this.wifiConnection = true;
    } else {
      console.log(`Wifi within ${this.brand} is disabled`);
    }
  }

  // Method to connect to wifi
  connectWifi(wifiToConnect){
    if (this.wifiConnection == true){
        if (wifiToConnect.status == true){
            console.log(`Connecting to ${wifiToConnect.name} ...`);
            this.connectedToWifi = `${wifiToConnect}`;
            setTimeout(()=>{
                console.log(`${this.brand} is connected to ${wifiToConnect.name}`)
                , 3000});
        } else {
            console.log(`Can't connect to ${wifiToConnect}`);
        }
    }
    else {
        console.log(`Wifi Connection is disable`);
    }
  }
}

const my_xiaomi = new Phone("Xiaomi", "Black", true, false);
// console.log(my_xiaomi.connectWifi());


let playStore = ["Mobile Legends", "Microsoft Word", "Grab", "Shopee"];
let appStore = ["Candy Rush", "WPS", "Uber", "Tokopedia"];

// console.log(playStore[playStore.length-1]);

class Android extends Phone {
  downloadApps(apps, size) {
    // Method for downloading app
    let app = 0;
    for (app of playStore) { //It will check each elem in play store Array through iteration
      if (apps == app) { // If apps name match with any elem in play store
        console.log(`Downloading ${apps} apps ...`);
        console.log(setTimeout(()=>{
            console.log(`Apps Downloaded with ${size} Mb`)}
            , 3000));
        break;
      } 
    } for (app of appStore){ //It will check each elem in App Store Array through iteration
        if (apps == app){ // If apps name match with any elem in app store
            console.log(`${apps} is not for android fool!`)
        } 
    } if(apps !== app){
        console.log(`${apps} Doesn't Found`);
  }
}
}

let samsung_phone = new Android("Samsung", "White");
// console.log(samsung_phone.downloadApps("Mobile Legends", 200));
// console.log(samsung_phone.downloadApps("Microsoft Word", 50));
// console.log(samsung_phone.downloadApps("WPS", 50));

samsung_phone.bluetooth = false;
console.log(`bluetooth feature within this ${samsung_phone.brand} is ${samsung_phone.bluetooth}`);
console.log(`Before Turning on bluetooth: \n Bluetooth connection is `, samsung_phone.bluetoothConnection); //Before Turning On Bluetooth
samsung_phone.enableBluetooth();
console.log(`After Turning on bluetooth: \n Bluetooth connection is `, samsung_phone.bluetoothConnection); //After Turning On Bluetooth

// Connecting to Wifi
console.log(`wifi feature within this ${samsung_phone.brand} is ${samsung_phone.wifi}`);
console.log(`Before Turning on wifi: \n Wifi connection is `, samsung_phone.wifiConnection); //Before Turning On Wifi
samsung_phone.enableWifi();
console.log(`After Turning on wifi: \n Wifi connection is `, samsung_phone.wifiConnection); //After Turning On Wifi
samsung_phone.connectWifi(john_wifi);