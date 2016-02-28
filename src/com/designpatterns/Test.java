package com.designpatterns;
import com.designpatterns.logger.*;
import com.designpatterns.abstractcars.*;
public class Test {
    static AppLogger  logger = LoggerFactory.getLogger(1);
    private Car car;
    public static void main(String[] args) {
        // write your code here
        logger.log("Hello baby!!");
        Test test = new Test();
        Car car = test.getCar("BenQ");
        System.out.println(car.getWheels().getSpecification());
    }
    public Car getCar(String type){
        switch (type){
            case "BenQ":
                car = new BenQ();
                break;
        }
        return  car;
    }
}
