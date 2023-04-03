import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

const routes: Routes = [
  // {
  //   path: 'react2',
  //   component: WebComponentWrapper,
  //   data: {
  //     type: "script",
  //     remoteName: "mfe2",
  //     remoteEntry: "http://localhost:4202/remoteEntry.js",
  //     exposedModule: "./App2",
  //     elementName: "react-2-element"
  //   } as WebComponentWrapperOptions
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
