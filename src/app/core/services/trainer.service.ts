import { Injectable } from '@angular/core';

export interface Trainer {
  id: number;
  name: string;
  skill: string;
}

@Injectable({ providedIn: 'root' })
export class TrainerService {

  trainers: Trainer[] = [
    { id: 1, name: 'John', skill: 'Angular' },
    { id: 2, name: 'Sara', skill: 'Java' }
  ];

  getAll() {
    return this.trainers;
  }
}