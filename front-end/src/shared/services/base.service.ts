import { Injectable } from "@angular/core";
import {
    Http,
    Response,
    Headers,
    RequestOptions,
    URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class BaseService {
    private getHeaders = new Headers({ "Accept": "application/json" });
    private postOptions = new RequestOptions({ headers: new Headers({ "Content-Type": "application/json", "Accept": "application/json" }) });

    constructor(public http: Http) { }

    protected getObjectFromUrl<T>(url: string): Observable<T> {
        return this.getObject<T>(url, null);
    }

    protected getObjectWithParams<T>(url: string, params: URLSearchParams): Observable<T> {
        return this.getObject<T>(url, params);
    }

    protected postObject<T>(url: string, object: T): Observable<T> {
        return this.http.post(url, JSON.stringify(object), this.postOptions)
            .map(res => {
                    console.log(JSON.stringify(res));
                    return (res.json() as T);
                }
            );
    }

    private getObject<T>(url: string, params: URLSearchParams): Observable<T> {
        const options = new RequestOptions(
            {
                headers: this.getHeaders,
                search: params
            });

        return this.http.get(url, options).map(res => (res.json() as T));
    }

    protected getCacheKey(serviceInstance: any, name: string): string {
        return serviceInstance.constructor.name + "." + name;
    }
}