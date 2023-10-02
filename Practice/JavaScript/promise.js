const bakingBread = function (resolve, reject) {
    const stoveIsAvailable = true;
    if (stoveIsAvailable) {
        resolve(`Bread ready to be baked`);
    } else {
        reject(`Bread can't be baked due to ...`);
    }
};

const breadSucceess = (breadResult) => {
    console.log(breadResult);
};
const breadFailed = (breadResult) => {
    console.log(breadResult);
};

const makeBread = new Promise(bakingBread);
makeBread.then(breadSucceess, breadFailed);

// Applying Catch to promise

const makeBread_2 = new Promise(bakingBread);
makeBread_2.then(breadSucceess).catch(breadFailed);


// Promise Berantai
// Fungsi Utama yang akan memanggil berbagai promise
function reserveACoffee(type, miligram) {
    getSeeds(type, miligram).then(makeCoffee).then(serveToTable).then(resolvedCoffee => {
        console.log(resolvedCoffee)
    }).catch(rejectedCoffee => {
        console.log(rejectedCoffee)
    })
}

const getSeeds = (type, miligram) => {
    return new Promise((resolve, reject) => {
        if (state.seedStocks[type] >= miligram) {
            state.seedStocks[type] -= miligram;
            resolve(`Seeds are available`);
        } else {
            reject(`Seeds are not available`);
        }
    })
}

const makeCoffee = seeds => {
    return new Promise((resolve, reject) => {
        if (state.isCoffeeMakerReady) {
            resolve(`Coffee succeess`)
        } else {
            reject(`Coffee failed`)
        }
    })
}

const serveToTable = coffee => {
    return new Promise(resolve => {
        resolve(`Coffee ready to serve`)
    })
}

const state = {
    isCoffeeMakerReady: true,
    seedStocks: {
        arabica: 250,
        robusta: 60,
        liberica: 80
    }
};

reserveACoffee('arabica', 50);
reserveACoffee('arabica', 50);
reserveACoffee('arabica', 50);
reserveACoffee('arabica', 50);
reserveACoffee('arabica', 50);
reserveACoffee('arabica', 50);
reserveACoffee('arabica', 50);

// New Promise
// connect wifi promise
function connectWifi(wifiToConnect, range) {
    getWifi(wifiToConnect, range).then(getWifiStatus).then(getProvider).then(wifiSuccess => {
        console.log(wifiResolved)
    }).catch(wifiFailed => {
        console.log(wifiRejected)
    })
}

const getWifi = (wifiToConnect, range) => {
    return new Promise((resolve, reject) => {
        for (const wifi of wifis) {
            if (wifiToConnect == wifi) {
                resolve(`${wifiToConnect} Wifi is available`)
            } else {
                reject(`Failed! ${wifiToConnect} wifi isn't availabel`)
            }
            if (range < 500) {
                resolve(`${wifiToConnect} wifi strength is strong`)
            } else if (range > 500 && range < 1000) {
                resolve(`${wifiToConnect} wifi strength is average`)
            } else if (range > 1000 && range < 1500) {
                resolve(`${wifiToConnect} wifi strength is low`)
            } else {
                reject(`Failed! ${wifiToConnect} wifi are too far`)
            }
        }
    })
}

const getWifiStatus = wifiStatus => {
    return new Promise((resolve, reject) => {
        if (phone.wifiStatus) {
            resolve(`phone has wifi function`)
        } else {
            reject(`phone has no wifi function`)
        }
    })
}

const getProvider = provider => {
    return new Promise((resolve, reject) => {
        if (wifis.provider) {
            resolve(`Provider is valid`)
        } else {
            reject(`Provides is invlalid`)
        }
    })
}

class Phone {
    #wifi; constructor(brand, colour) {
        this.brand = brand;
        this.colour = colour;
        this.#wifi = true;
    }
    get wifi() {
        return this.#wifi;
    }
    set wifi(wifi) {
        if (wifi) {
            console.log(`wifi is enabled, you can't change it`)
        } else {
            console.log(`wifi is disabled, you can't change it`)
        }
    }
    getBrand() {
        return `${
            this.brand
        } has a ${
            this.colour
        } colour`;
    }
}


const my_phone = new Phone('Xiaomi', 'Black');
console.log(my_phone);

// Promise all
const arabicaOrder = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('arabica finished')
        }, 4000)
    });
};
const robustaOrder = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('robusta finished')
        }, 3000)
    });
};
const luwakOrder = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('luwak finished')
        }, 3000)
    });
};

const promises = [arabicaOrder(), robustaOrder(), luwakOrder()]

Promise.all(promises).then(resolvedValue => {
    console.log(resolvedValue)
})

// Async & Await
// // this function is still synchronous
// function makeMilk() {
//     const milk = getMilk();
//     console.log(milk);
// }
// // then turn it into asynchronous
// async function makeMilk() {
//     const milk = await getMilk();
//     console.log(milk);
// }

// if rejected
async function makeMilk() {
    try {
        const milk = await getMilk();
        console.log(milk);
    } catch (rejectedReason) {
        console.log(rejectedReason)
    }
}
makeMilk()

// Async pada promise berantai
async function reserveACoffee(type, miligrams) {
    try {
      const seeds = await getSeeds(type, miligrams);
      const coffee = await makeCoffee(seeds);
      const result = await servingToTable(coffee);
      console.log(result);
    } catch (rejectionReason) {
      console.log(rejectionReason);
    }
  }
   
  reserveACoffee('liberica', 80);