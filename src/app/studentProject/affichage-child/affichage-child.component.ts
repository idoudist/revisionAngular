import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/models/Student';
import { StudentProjectService } from 'src/app/services/student-project.service';
import { Demande } from 'src/models/Demande';

@Component({
  selector: 'app-affichage-child',
  templateUrl: './affichage-child.component.html',
  styleUrls: ['./affichage-child.component.css'],
  providers: [StudentProjectService]
})
export class AffichageChildComponent implements OnInit {

  @Input() stu: Student;
  @Output() deleteEvent = new EventEmitter();
  @Output() ajoutEvent = new EventEmitter();

  studentshow: Student;
  updateShow: boolean;
  addShow: boolean;
  studentup: Student;
  matieres: string[];
  matiereDemande: string;
  demandeparent: Demande;

  constructor(private studentsc: StudentProjectService) {
    this.studentup = new Student;
    this.demandeparent = new Demande;
   }

  ngOnInit() {
    this.updateShow = false;
    this.matieres = ['anglais', 'francais', 'droit'];


    this.studentup.anglais = this.stu.anglais;
    this.studentup.francais = this.stu.francais;
    this.studentup.droit = this.stu.droit;
    this.studentup.nom = this.stu.nom;
    this.studentup.prenom = this.stu.prenom;

  }

  callScore(student) {
    return this.studentsc.score(student) ;
  }

  callRachat(student) {
    this.studentshow = this.studentsc.rachat(student);
    console.log(this.studentshow.francais + ' ' + this.studentshow.anglais + ' ' + this.studentshow.droit) ;
  }

  delete1(student) {
    this.deleteEvent.emit(student);
  }

  ajoutDemande1() {
    this.demandeparent.nom = this.stu.nom;
    this.demandeparent.prenom = this.stu.prenom;
    this.demandeparent.matiere = this.matiereDemande;
    this.ajoutEvent.emit(this.demandeparent);
  }

  toggelUpdateShow() {
     this.updateShow = !this.updateShow;
  }

  toggeladdShow() {
    this.addShow = !this.addShow;
 }

  updateNote() {

    this.stu.anglais = this.studentup.anglais;
    this.stu.francais = this.studentup.francais;
    this.stu.droit = this.studentup.droit;
  }

  matiereCourant(matiere) {
    this.matiereDemande = matiere;
    console.log(this.matiereDemande);
  }

}
