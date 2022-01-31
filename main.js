class Transport {
    constructor(color, title) {
        this.color = color;
        this.title = title;
    }
    startEngine(){
        console.log(`${this.title} is started!`)
    }
    stopEngine(){
        console.log('stop!')
    }
}
class Car extends Transport {
    constructor(color, title, model) {
        super(color, title);
        this.model = model
    }

}

const car = new Car(
    'white',
    'toyota',
    'sequoia'
)

console.log(car)
car.startEngine()