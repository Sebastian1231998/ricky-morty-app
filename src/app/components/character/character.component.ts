import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { CharacterService } from 'src/app/services/character.service';
import { Characters } from 'src/app/types/characters.types';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  characters:Characters[] = []
  pagination:number = 2;
  constructor(private characterService:CharacterService) { }

  ngOnInit() {
    this.getCharactersPagination()
  }

  getCharactersPagination(){
    this.characterService.getCharacters(this.pagination).subscribe( (characters:any) => {
      console.log("this is response the API from service character",characters.results)
      this.characters = [...this.characters, ...characters.results]
    })
  }

    loadMoreCharacters(event){
      console.log("Active the infinite scroll component")
      this.pagination++;
      setTimeout(()=>{
        this.getCharactersPagination();
        console.log("The total characters after the run infinitescroll event", this.characters)
        event.target.complete();
      },1500)
   }

}
