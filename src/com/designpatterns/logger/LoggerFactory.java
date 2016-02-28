package com.designpatterns.logger;

/**
 * Created by deepak on 28/2/16.
 */
public class LoggerFactory {
    public static AppLogger getLogger(int type){
        if(1 == type){
            return ConsoleLogger.getInstance();
        }
        return  null;
    }
}
