import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-pet-display',
  templateUrl: './pet-display.component.html',
  styleUrls: ['./pet-display.component.css']
})
export class PetDisplayComponent implements OnInit {
  pet: Pet | undefined;

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.petService.getPetData().subscribe({
      next: (data) => this.pet = data,
      error: (err) => console.error('Error fetching pet data:', err)
    });
  }
}
