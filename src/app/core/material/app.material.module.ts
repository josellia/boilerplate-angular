import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatIconModule,
        MatProgressBarModule,
        MatToolbarModule,
        MatDividerModule,
        MatButtonModule
    ],
    exports: [
        CommonModule,
        MatIconModule,
        MatProgressBarModule,
        MatToolbarModule,
        MatDividerModule,
        MatButtonModule
    ]
})
export class AppMaterialModule {}
