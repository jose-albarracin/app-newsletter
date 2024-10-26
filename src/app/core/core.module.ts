import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InputDynamicComponent } from './components/input-dynamic/input-dynamic.component';
import { HtmlEditorComponent } from './components/html-editor/html-editor.component';
import { ButtomComponent } from './components/buttom/buttom.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { MatIconModule } from '@angular/material/icon';
import { AttachmentComponent } from './components/attachment/attachment.component';

@NgModule({
  declarations: [
    NavBarComponent,
    InputDynamicComponent,
    HtmlEditorComponent,
    ButtomComponent,
    SvgIconComponent,
    AttachmentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxEditorModule,
    EditorModule,
    MatIconModule,
  ],

  exports: [
    NavBarComponent,
    InputDynamicComponent,
    HtmlEditorComponent,
    ButtomComponent,
    SvgIconComponent,
    AttachmentComponent,
    MatIconModule,
  ],
})
export class CoreModule {}
