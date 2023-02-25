import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterreport'
})
export class FilterreportPipe implements PipeTransform {

  transform(values: any[], args: string): any {
    if(args) {
      return (
        values.filter(
        (v => v.old_name.toLowerCase().includes(args.toLowerCase()) ||
         v.old_phone.toLowerCase().includes(args.toLowerCase())||
         v.old_address.toLowerCase().includes(args.toLowerCase())||
         v.open_link.toString().toLowerCase().includes(args.toLowerCase())||
         v.new_name.toLowerCase().includes(args.toLowerCase())||
         v.new_phone.toLowerCase().includes(args.toLowerCase())||
         v.createdAt.toLowerCase().includes(args.toLowerCase())||
         v.updatedAt.toLowerCase().includes(args.toLowerCase())))
      );
    } else {
      return values;
    }
  }

}
