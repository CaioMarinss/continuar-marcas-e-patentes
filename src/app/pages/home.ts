import { ChangeDetectionStrategy, Component } from '@angular/core';
import { About } from '../sections/about/about';
import { Attendance } from '../sections/attendance/attendance';
import { Contact } from '../sections/contact/contact';
import { Contents } from '../sections/contents/contents';
import { Hero } from '../sections/hero/hero';
import { Presence } from '../sections/presence/presence';
import { Protection } from '../sections/protection/protection';
import { Questions } from '../sections/questions/questions';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Questions, Protection, Attendance, Contents, Presence, Contact],
  template: `
    <app-hero />
    <app-about />
    <app-questions />
    <app-protection />
    <app-attendance />
    <app-contents />
    <app-presence />
    <app-contact />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
