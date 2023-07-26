import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
selector: 'app-about',
standalone: true,
imports: [CommonModule],
template: `
<p class="line-through"> hello, this is about us page </p>
`,
})
export class AboutComponent {}