import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TextAvatarDirective } from './text-avatar/text-avatar';
import { ReadMoreDirective } from './rede-more/read-more.directive';
import { TitlePageDirective } from './title-page/title-page';
@NgModule({
	declarations: [TextAvatarDirective,ReadMoreDirective],
	imports: [IonicModule],
	exports: [TextAvatarDirective,ReadMoreDirective]
})
export class DirectivesModule {}
