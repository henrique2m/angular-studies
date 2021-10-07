import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reductionDescription'
})
export class ReductionDescription implements PipeTransform {
    transform(text: string, maxNumberTextCaracter: number = 15): string {
        if (text.length > maxNumberTextCaracter)
            return text.substr(0, maxNumberTextCaracter) + '...';

        return text;
    }
}
