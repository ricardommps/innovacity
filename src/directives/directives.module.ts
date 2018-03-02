import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TextAvatarDirective } from './text-avatar/text-avatar';
@NgModule({
	declarations: [TextAvatarDirective],
	imports: [IonicModule],
	exports: [TextAvatarDirective]
})
export class DirectivesModule {}
