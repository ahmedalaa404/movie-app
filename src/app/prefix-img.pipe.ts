import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefixImg'
})
export class PrefixImgPipe implements PipeTransform {

  transform(value: string):string
   {
    if(value==null)
    {
      return 'https://image.tmdb.org/t/p/w500/8qioumLk62Ot1mh9Vom1TXYky6W.jpg';
    }
    else
    {
      return 'https://image.tmdb.org/t/p/w500'+value; 
    }
  }

}
