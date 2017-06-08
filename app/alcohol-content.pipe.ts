import { Pipe, PipeTransform } from '@angular/core';
import { Tap } from './tap.model';

@Pipe({
  name: "alcoholContent",
  pure: false
})

export class AlcoholContentPipe implements PipeTransform {
  transform(input: Tap[], content){
    var output: Tap[] = [];
    if(content ==="lowContent") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].alcohol <= 5.5) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (content ==="highContent") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].alcohol > 5.5) {
            output.push(input[i]);
          }
        }
        return output;
    } else {
      return input;
    }
  }
}
