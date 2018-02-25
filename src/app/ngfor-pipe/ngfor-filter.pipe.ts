import { Pipe, PipeTransform ,Injectable } from '@angular/core';

@Pipe({
  name: 'ngforFilter'
})

@Injectable()

export class NgforFilterPipe implements PipeTransform {

  transform(data: any, name?: any,value?:any): any {
    let filterd_result=[];
    data.forEach(element => {
      if(element[name]==value){
        filterd_result.push(element);
      }     
    });
    return filterd_result; 
  }

}
