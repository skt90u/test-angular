import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
selector: 'app-home',
standalone: true,
imports: [CommonModule],
template: `
<p class="text-blue-600/50"> hello, this is home  aa page </p>
`,
})
export class HomeComponent {} 