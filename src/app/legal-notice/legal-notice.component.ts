import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { MobileHeaderComponent } from '../shared/mobile-header/mobile-header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { MobileFooterComponent } from '../shared/mobile-footer/mobile-footer.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [HeaderComponent, MobileHeaderComponent, FooterComponent, MobileFooterComponent, TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}