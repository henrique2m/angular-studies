import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  private _numberOfGeneratedIds = 0;
  private _validId = /^[A-Za-z]+[\w\-\:\.]*$/;

  public generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix || !this._validId.test(prefix)) {
      throw Error('Prefix is required');
    }

    const uniqueId = this.generateUniqueId();
    this._numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGeneratedUniquesIds(): number {
    return this._numberOfGeneratedIds;
  }

  private generateUniqueId(): string {
    return uuidv4();
  }
}
