import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Sector } from 'src/app/models/sector';
import { SectorService } from 'src/app/services/sector.service';
@Component({
  selector: 'app-editsector',
  templateUrl: './editsector.component.html',
  styleUrls: ['./editsector.component.css']
})
export class EditsectorComponent implements OnInit {
  sector : Sector={
    id: 2,
    name: '',
    description: ''
  };
  Id!:string;
  constructor(private sectorService: SectorService,private route: ActivatedRoute) { 
    this.route.params.subscribe(event => {
      this.Id = event.Id;

     });
  this.sectorService.getSector(this.Id).subscribe(x => this.sector =x)
  }

  ngOnInit() {

  }
  onSubmit({value, valid}: NgForm) {
    if(!valid) {
    }
    else{
      this.sectorService.updateSector(this.sector);
    }

  }

}
