import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'start-again';
  post={
   isFav:true
}
onFavChanged(isFav:boolean){
if(isFav){
  alert("Add to Favorite");
}
else{
  alert("Remove Favorite");

}
}
}
