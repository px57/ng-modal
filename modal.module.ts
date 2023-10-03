import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchModalComponent } from './components/switch-modal/switch-modal.component';
import { SwitchModalService } from './services/switch-modal.service';

@NgModule({
  declarations: [
    SwitchModalComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    SwitchModalService,
  ],
  exports: [
    SwitchModalComponent
  ]
})
export class ModalModule { }
