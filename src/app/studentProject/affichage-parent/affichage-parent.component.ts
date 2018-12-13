import { Component, OnInit } from '@angular/core';
import { Student } from 'src/models/Student';
import { StudentProjectService } from 'src/app/services/student-project.service';
import { Demande } from 'src/models/Demande';

@Component({
  selector: 'app-affichage-parent',
  templateUrl: './affichage-parent.component.html',
  styleUrls: ['./affichage-parent.component.css'],
  providers: [StudentProjectService]
})
export class AffichageParentComponent implements OnInit {

  listStudent: Student[];
  listDemande: Demande[];
  matieres: string[];
  selected: string;
  // listDemandeRecherche: Demande[];


  constructor(private studentsc: StudentProjectService) { }

  ngOnInit() {
    /*
    this.listStudent = [
      {'nom': 'student1' , 'prenom': 'student1', 'anglais': 10, 'francais': 10, 'droit': 12},
      {'nom': 'student2' , 'prenom': 'student2', 'anglais': 11, 'francais': 9, 'droit': 10},
      {'nom': 'student3' , 'prenom': 'student3', 'anglais': 12, 'francais': 11, 'droit': 14}
    ];
    */
    this.listDemande = [];
    this.studentsc.getStudents().subscribe(data => this.listStudent = data);
    this.matieres = ['anglais', 'francais', 'droit'];
    /*for (let i = 0; i < this.listDemande.length; i++) {
        this.listDemandeRecherche.push(this.listDemande[i]);
     }*/
  }

  callScore(student) {
    return this.studentsc.score(student) ;
  }

  delete2(student) {
    let index: number;
    index = this.listStudent.indexOf(student);
    this.listStudent.splice(index , 1);
  }

  ajoutDemande2(dem) {
    this.listDemande.push(dem);
  }

  matiereCourant(mat) {
      this.selected = mat;
  }



}
