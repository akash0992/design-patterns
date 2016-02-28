package com.designpatterns.logger;

/**
 * Created by deepak on 28/2/16.
 */
public class ConsoleLogger implements AppLogger {
    private static ConsoleLogger ourInstance = new ConsoleLogger();

    public static ConsoleLogger getInstance() {
        return ourInstance;
    }

    private ConsoleLogger() {
    }

    @Override
    public void log(String msg) {
        System.out.println(msg);
    }
}
