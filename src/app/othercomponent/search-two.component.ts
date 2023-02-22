import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { BGGService } from '../bgg.service';

@Component({
  selector: 'app-search-two',
  templateUrl: './search-two.component.html',
  styleUrls: ['./search-two.component.css']
})
export class SearchTwoComponent implements OnInit {

  offsetLimitForm!: FormGroup

  constructor(private fb: FormBuilder, private bggService: BGGService){}

  ngOnInit(): void {
      this.offsetLimitForm=this.createTheForm();
  }

  private createTheForm(){

    console.info('fomr created')
    return this.fb.group({
      offset: this.fb.control(''),
      limit: this.fb.control('')
    })
  }

  offsetLimitSearch(){

    console.info("can reahc hereee")

    const limit = this.offsetLimitForm.get('limit')?.value
    const offset = this.offsetLimitForm.get('offset')?.value

    console.info('limit>>>', limit);
    console.info('offset>>>', offset);

    this.bggService.searchGamesWithOffsetAndLimit(offset,limit)
    .then(result =>{
      this.offsetLimitForm.reset()
    }
    )
    .catch(error => {
      console.error('>>> error: ', error)
    })
  }

}
