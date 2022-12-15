function Car (color, model, licensePlate) {
    this.color = color;
    this.model = model;
    this.licensePlate = licensePlate;
    this.drivingLicense = undefined;
}

function solution(car) {
    if (car.licensePlate) {
        car.drivingLicense = true;
        return car;
    } else {
        car.drivingLicense = false;
        return car;
    }
}