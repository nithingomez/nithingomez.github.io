import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms'
import { Directive, Input } from '@angular/core';
import { gteService } from './gte.services';


@Directive({
    selector: '[gteValidator]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: gteValidatorDirective, multi: true }
    ]
})
export class gteValidatorDirective implements Validator {

    @Input("gteNum") gteNum: any

    constructor(private gteService: gteService) {
    }

    validate(c: FormControl) {

        let v: number = +c.value;

        if (this.gteService.gte(v, this.gteNum)) {
            return { 'gte': true, 'requiredValue': this.gteNum }
        }

        return null;
    }
}