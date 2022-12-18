import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(moviesTrending:any[],tearm:string):any[]
   {
    return moviesTrending.filter((movie)=>movie.title.toLowerCase().includes(tearm.toLowerCase()));
   }

}
