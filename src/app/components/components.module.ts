import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './character/character.component';

@NgModule({
  declarations: [HeaderComponent,CharactersComponent, CharacterComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent, CharactersComponent, CharacterComponent]
})
export class ComponentsModule { }
