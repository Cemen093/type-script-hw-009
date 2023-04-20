import { Pipe, PipeTransform } from "@angular/core";
import { groupBy } from "lodash";

@Pipe({
    name: 'groupBy'
  })
  export class GroupByPipe implements PipeTransform {
    transform(value: any, key: string): any {
      return groupBy(value, key);
    }
  }