import * as angularCore from '@angular/core';
import * as angularPlatformBrowser from '@angular/platform-browser';
import * as angularPlatformBrowserDynamic from '@angular/platform-browser-dynamic';
import * as angularForms from '@angular/forms';
import * as angularCommon from '@angular/common';
import * as angularMaterial from '@angular/material';
//import * as primeNgButton from 'primeng/button';

declare const SystemJS: any;

// set modules so that no HTTP request is made
SystemJS.set('@angular/core', SystemJS.newModule(angularCore));
SystemJS.set('@angular/platform-browser', SystemJS.newModule(angularPlatformBrowser));
SystemJS.set('@angular/platform-browser-dynamic', SystemJS.newModule(angularPlatformBrowserDynamic));
SystemJS.set('@angular/forms', SystemJS.newModule(angularForms));
SystemJS.set('@angular/common', SystemJS.newModule(angularCommon));
SystemJS.set('@angular/material', SystemJS.newModule(angularMaterial));
//SystemJS.set('primeng/button', SystemJS.newModule(primeNgButton));