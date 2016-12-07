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

    protected postObject<T>(url: string, object: T): Observable<Response> {
        return this.http.post(url, object, this.postOptions);
    }

    protected putObject<T>(url: string, object: T) {
        return this.http.put(url, object, this.postOptions);
    }

    private getObject<T>(url: string, params: URLSearchParams): Observable<T> {
        const options = new RequestOptions(
            {
                headers: this.getHeaders,
                search: params
            });

        return this.http.get(url, options).map(res => (res.json() as T));
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        console.log(errMsg);
        return Observable.throw(errMsg);
    }

    protected getCacheKey(serviceInstance: any, name: string): string {
        return serviceInstance.constructor.name + "." + name;
    }
}