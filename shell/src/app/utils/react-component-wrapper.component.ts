import {
  AfterContentInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  LoadRemoteModuleOptions,
  loadRemoteModule,
} from '@angular-architects/module-federation';
import { ReactPropInterface } from '../app.component';

export type ReactComponentWrapperOptions = LoadRemoteModuleOptions & {
  elementName: string;
};

@Component({
  selector: 'react-wc-wrapper',
  template: '<div #vc></div>',
})
export class ReactComponentWrapper implements AfterContentInit, OnChanges {
  @ViewChild('vc', { read: ElementRef, static: true })
  vc!: ElementRef;

  @Input() options!: ReactComponentWrapperOptions;
  // @Input() props!: { [prop: string]: unknown };
  @Input() props!: ReactPropInterface;

  element!: any;

  constructor(private route: ActivatedRoute) {}

  ngOnChanges(): void {
    if (!this.element) return;

    this.populateProps();
  }

  private populateProps() {
    this.element.props = this.props;
  }

  async ngAfterContentInit() {
    const options =
      this.options ?? (this.route.snapshot.data as ReactComponentWrapperOptions);

    try {
      await loadRemoteModule(options);

      this.element = document.createElement(options.elementName);
      this.populateProps();

      this.vc.nativeElement.appendChild(this.element);
    } catch (error) {
      console.error(error);
    }
  }
}
