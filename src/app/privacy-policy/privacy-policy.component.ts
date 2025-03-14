import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { MobileHeaderComponent } from '../shared/mobile-header/mobile-header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { MobileFooterComponent } from '../shared/mobile-footer/mobile-footer.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeaderComponent, MobileHeaderComponent, FooterComponent, MobileFooterComponent, TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}