import { Component, OnInit} from '@angular/core';

//decorator
@Component({
    selector: 'app-root',
    templateUrl: './custom.component.html',
    styleUrls: ['./custom.component.css']
})
//simple class
export class Wordsearch implements OnInit {
 dictionarydata;
 customdata;
 //declare a dummy variable here
 public allwords = {'assume':'towords',
 'Assault':'to leap',
 'Allegation':'to done something wrong',
 'Curvature':'surface deviate from a plane',
 'Relic':'an oject of interest',
 'Fond':'loving',
 'Splinter':'wood,glass',
 'Buttocks':'human body that form the bottom'};

constructor( ) { }
//Component properties

//create ngOnInit()  and load words
ngOnInit() {

        }
    };

    




    

