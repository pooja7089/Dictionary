import {Injectable}  from '@angular/core';
import { HttpErrorResponse} from "@angular/common/http";
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable }from 'rxjs';

@Injectable({
    providedIn : 'root',
})
//pass parameter in service function 
export class SearchService {
        //URL for CRUD operations
        private url='https://od=api.oxforddictionries.com';
        
    constructor(private http :HttpClient){

    console.log("dictionaryHttpServices is called")
    }
    private handleError(err:HttpErrorResponse) {
        console.log("Handle error Http calls")
        console.log(err.message);
                   //perform operation on search
        return Observable.throw(err.message);
    };
    };
    @getDictionaryData(name?)=>{
        if(name) {
            this.word = name
        }
        let headers = new HttpHeaders();
        headers.append('Accept','application/json');
        headers.append('app_id','d20e13fb');
        headers.append('app_key','7d20b79d1a6f4db70c8e41003916b08');
            //Fetch search by id
        let myResponse = this._http.get('https://od=api.oxforddictionries/api/v1/entries/en/'+this.word, {headers: headers});

                   //Data from server has been received.
        return myResponse;

        };   
    

