package com.example.backend.domain.models.excepitons;

public class InvalidArgumentsException extends RuntimeException{
    public InvalidArgumentsException() {
        super("Invalid arguments exception");
    }

}
