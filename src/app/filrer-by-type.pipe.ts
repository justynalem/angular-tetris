import { Pipe, PipeTransform } from '@angular/core';
import { HistoryItem } from './game/game.component';

@Pipe({
  name: 'filterByType',
})
export class FilrerByTypePipe implements PipeTransform {
  transform(value: HistoryItem[], move: string): HistoryItem[] {
    if (move === 'all moves') {
      return value;
    }
    return value.filter((history) => history.move === move);
  }
}
