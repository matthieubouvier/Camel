// Manually cpied from https://github.com/samuelneff/node-perf-explained/blob/master/typings/node-rest-client/node-rest-client.d.ts
declare module "node-rest-client" {

    export interface MethodsInterface {
        [methodName:string]: (args:any, callback:(data:any, response:string) => void) => void;
    }

    export interface ActionDataInterface<T> {
        data: T;
        headers:{[headerName:string]: string};
    }

    export class Client {
        get<T>(url:string, callback?:(data:T, response:string) => void):void;
        post<TIn, TOut>(url:string, dat:ActionDataInterface<TIn>, callback?:(data:TOut, response:string) => void):void;
        put<TIn, TOut>(url:string, dat:ActionDataInterface<TIn>, callback?:(data:TOut, response:string) => void):void;
        patch<TIn, TOut>(url:string, dat:ActionDataInterface<TIn>, callback?:(data:TOut, response:string) => void):void;
        delete<TIn, TOut>(url:string, dat:ActionDataInterface<TIn>, callback?:(data:TOut, response:string) => void):void;

        on(eventName:'error', callback:(err:Error) => void);
        on(eventName:string, callback:(err:Error) => void);

        registerMethod(methodName:string, url:string, httpMethod:string):void;
        unregisterMethod(methodName:string):void;
        methods:MethodsInterface;
    }
}