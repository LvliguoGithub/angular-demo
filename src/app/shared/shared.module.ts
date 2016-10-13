import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { AwesomePipe }         from './awesome.pipe';
import { HighlightDirective }  from './highlight.directive';

@NgModule({
  imports:      [ CommonModule, MaterialModule ],
  declarations: [ AwesomePipe, HighlightDirective ],
  exports:      [ AwesomePipe, HighlightDirective,
                  CommonModule, FormsModule, MaterialModule ]
})

export class SharedModule { }
