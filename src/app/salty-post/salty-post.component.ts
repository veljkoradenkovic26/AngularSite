import { ActivatedRoute } from '@angular/router';
import { SaltyService } from './../salty.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-salty-post',
  templateUrl: './salty-post.component.html',
  styleUrls: ['./salty-post.component.css']
})
export class SaltyPostComponent implements OnInit {

  public id:number;
  public posts;
  public post:any;
  public param;
  public form:FormGroup = new FormGroup({
    message:new FormControl('',Validators.required)
  });


  constructor(
    private service:SaltyService ,
    private route:ActivatedRoute
  ) {
    this.route.params.subscribe(params=>{this.param=params['id'];});
   }

  ngOnInit() {
    this.service.dohvatiSalty().subscribe(
      podaci=>{
        this.posts=podaci;
        console.log(podaci);
        var count = Object.keys(this.posts).length;

        for(var i = 0; i < count; i++){
         
          if(this.param==this.posts[i].id){
            this.post=this.posts[i];
          }
        }
        console.log(this.post);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
