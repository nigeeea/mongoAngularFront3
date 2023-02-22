import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { BGGService } from '../bgg.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  searchForm!: FormGroup;

  constructor(private fb: FormBuilder, private bggSvc: BGGService){}

  ngOnInit(): void {
      this.searchForm=this.createForm();
  }

  private createForm(){
    return this.fb.group({
      gameId: this.fb.control('')
    })
  }

  //when form is submitted
  doSearch(){
    const gameId = this.searchForm.get('gameId')?.value

    console.info('ranking>>>', gameId);

    this.bggSvc.searchGameById(gameId)
      .then(returnedGame=>{
        console.info("the gaem", returnedGame);
        this.searchForm.reset();
      })
      .catch(
        error=>{
          console.info('errorzxc', error);
        }
      )

  }

}
