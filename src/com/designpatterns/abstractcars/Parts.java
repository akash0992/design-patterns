package com.designpatterns.abstractcars;

/**
 * Created by deepak on 28/2/16.
 */
public class Parts {
    public String specification;
    public Parts(String specification){
        this.specification = specification;
    }
    public String getSpecification(){
        return this.specification;
    }
}
