import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ProjectDetailsComponent } from './shared/project-details/project-details.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'project-details', component: ProjectDetailsComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'legal-notice', component: LegalNoticeComponent },
];
