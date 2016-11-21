import { Injectable, enableProdMode } from "@angular/core";

if (process.env.enableProdMode === true) {
    enableProdMode();
}

export class Environment {
    static apiEndpoint: string = process.env.API_endpoint;
    static cacheDurationInMs: number = process.env.cacheDurationInMs;
}