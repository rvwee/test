import { Injectable } from "@angular/core";
import { Environment } from "../../../environment";

@Injectable()
export class Settings {
    baseUrl = Environment.apiEndpoint;
}