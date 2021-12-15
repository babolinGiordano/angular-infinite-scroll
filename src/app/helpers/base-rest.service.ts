import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {classToPlain} from 'class-transformer';
import {Observable} from 'rxjs';

export abstract class BaseRestService {
    public url: string;

    protected constructor(
        protected readonly httpClient: HttpClient,
        private readonly server: string,
        protected readonly api: string
    ) {
        this.url = `${this.server}${this.api}`;
    }

    private removeEmptyValues(object: any): any {

        const removeEmpty = (obj: any) =>
            Object.entries(obj).forEach(([key, val]) => {
                if (val && typeof val === 'object') {
                    removeEmpty(val);
                } else if (val === undefined || val === null) {
                    delete obj[key];
                }
            });

        removeEmpty(object);

        return object;
    }

    protected get<T>(id?: string | number, customPath?: string): Observable<T> {

        let endpointUrl = this.url;
        if (id) {
            endpointUrl = `${this.url}/${id}`;
        }
        if (customPath) {
            endpointUrl = `${this.server}${customPath}`;
        }
        return this.httpClient.get<T>(endpointUrl);
    }

    protected getMany<T>(queryParams?: any, customPath?: string): Observable<T[]> {

        if (queryParams && queryParams.constructor !== Object) {
            queryParams = classToPlain(queryParams);
        }

        const filteredQueryParams = Object.entries(queryParams || {})
            .reduce((a, [k, v]) => (v ? {...a, [k]: v} : a), {});

        const params = new HttpParams({fromObject: {...filteredQueryParams}});
        const endpointUrl = customPath ? `${this.server}${customPath}` : `${this.url}`;

        return this.httpClient.get<T[]>(`${endpointUrl}`, {params});
    }

    protected post<T, U>(object: U, customPath?: string): Observable<T> {
        const body = classToPlain(this.removeEmptyValues(object));
        const endpoint = customPath ? `${this.server}${customPath}` : `${this.url}`;
        return this.httpClient.post<T>(`${endpoint}`, body);
    }

    protected postAndConvert<T, U>(object: U, customPath?: string): Observable<T> {
        return this.post<T, U>(object, customPath);
    }

    protected postMany<T, U>(object: U, customPath?: string): Observable<T[]> {
        const body = classToPlain(this.removeEmptyValues(object));
        const endpointUrl = customPath ? `${this.server}${customPath}` : `${this.url}`;

        return this.httpClient.post<T[]>(`${endpointUrl}`, body);
    }

    protected postFormData<T>(formData: FormData, customPath?: string): Observable<T> {
        const endpointUrl = customPath ? `${this.server}${customPath}` : `${this.url}`;

        return this.httpClient.post<T>(`${endpointUrl}`, formData);
    }

    protected putFormData<T>(id: number | string, formData: FormData, customPath?: string): Observable<T> {
        const endpointUrl = customPath ? `${this.server}${customPath}` : `${this.url}/${id}`;
        return this.httpClient.put<T>(`${endpointUrl}`, formData);
    }

    protected put<T, U>(id: number | string, body: U, customPath?: string): Observable<T> {
        const endpointUrl = customPath ? `${this.server}${customPath}` : `${this.url}/${id}`;
        return this.httpClient.put<T>(`${endpointUrl}`, body);
    }

    protected putMany<T, U>(id: number | string, body: U, customPath?: string): Observable<T[]> {
        const endpointUrl = customPath ? `${this.server}${customPath}` : `${this.url}/${id}`;
        return this.httpClient.put<T[]>(`${endpointUrl}`, body);
    }

    protected patch<T, U>(id: number | string,
                          body: U,
                          customPath?: string,
                          customHeaders?: HttpHeaders): Observable<T> {

        const endpointUrl = customPath ? `${this.server}${customPath}` : `${this.url}/${id}`;

        return this.httpClient.patch<T>(`${endpointUrl}`, body, {headers: customHeaders});
    }

    protected patchFormData<T>(id: number | string, formData: FormData, customPath?: string): Observable<T> {
        const endpointUrl = customPath ? `${this.server}${customPath}` : `${this.url}/${id}`;
        return this.httpClient.patch<T>(`${endpointUrl}`, formData);
    }

    protected delete<T>(id: number | string, customPath?: string): Observable<T> {
        const endpoint = customPath ? `${this.server}${customPath}` : `${this.url}/${id}`;
        return this.httpClient.delete<T>(`${endpoint}`);
    }
}
