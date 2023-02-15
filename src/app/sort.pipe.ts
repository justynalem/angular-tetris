import { Pipe, PipeTransform } from '@angular/core';
import { HistoryItem } from './game/game.component';

@Pipe({
  name: 'sortHistory',
})
export class SortPipe implements PipeTransform {
  transform(value: HistoryItem[], order: string): HistoryItem[] {
    if (order === 'ASC') {
      return value.sort((a, b) => {
        return Number(a.time) - Number(b.time);
      });
    }
    return value.sort((a, b) => {
      return Number(b.time) - Number(a.time);
    });
  }
}
