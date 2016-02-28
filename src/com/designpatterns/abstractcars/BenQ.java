package com.designpatterns.abstractcars;

/**
 * Created by deepak on 28/2/16.
 */
public class BenQ extends Car{
    @Override
    public Parts getWheels() {
        return new Parts("BenQ wheels");
    }

    @Override
    public Parts getBody() {
        return new Parts("BenQ body");
    }

    @Override
    public Parts getMirrors() {
        return new Parts("BenQ Mirrors");
    }

    @Override
    public Parts getEngines() {
        return new Parts("BenQ engine");
    }
}
