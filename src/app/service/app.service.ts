import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
    providedIn: 'root'
})

export class AppService {
    url: any;
    crossUrl: any;
    constructor(
        private http: HttpClient,
    ) {
        this.url = environment.serverURL;
        this.crossUrl = environment.crossAnywhere;
    }

    public getLists() {
        let url = this.crossUrl + this.url;
        let headerOption = {
            headers: {
                'X-CMC_PRO_API_KEY':'6debc9f6-2000-4846-bcff-535698af1a3d',
                'Access-Control-Allow-Origin': '*'
            }
        };
        return this.http.get(url, headerOption);
    }
    public onLogin(param: any) {
        let login_url = this.url + 'auth/login';
        return this.http.post(login_url, param);
    }

    public onRegister(param: any) {
        let register_url = this.url + 'register';
        return this.http.post(register_url, param);
    }

    public deleteList(id: any) {
        let link= this.url + 'deletearticle';
        return this.http.post(link, id);
    }

    public addNewList(data: any) {
        let link = this.url + 'newarticle';
        return this.http.post(link, data);
    }
}
