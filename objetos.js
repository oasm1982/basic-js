function createCar(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

function createCars (brand, model, year, numberOfCars) {
    var countOfCars = 0;
    var newCars = []; // it's an array
    while (numberOfCars > countOfCars) {
        var car = new createCar(brand, model, year); // it's a object
        newCars.push(car);
        countOfCars = countOfCars + 1;
    }
    return newCars;
}





