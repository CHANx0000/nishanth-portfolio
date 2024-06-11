import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgFor],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  selectedIndex = null;
  projectArray = [
    { projectURL: 'www.google.com' },
    { projectURL: 'www.google.com' },
    { projectURL: 'www.google.com' },
    { projectURL: 'www.google.com' },
    // { projectURL: 'www.google.com' },
    // { projectURL: 'www.google.com' },
  ];
  experienceArray = [
    {
      dateFrom: 'Jul 2022',
      dateTo: 'Present',
      expRole: 'UX DESIGNER',
      company: 'Onpassive',
      location: 'Hyderabad',
    },
    {
      dateFrom: 'Jul 2021',
      dateTo: 'Jul 2022',
      expRole: 'UI/UX DESIGNER',
      company: 'Machinecode',
      location: 'Hyderabad',
    },
    {
      dateFrom: 'Jul 2022',
      dateTo: 'Present',
      expRole: 'UX DESIGNER',
      company: 'Uxinterfacely',
      location: 'Bengaluru',
    },
  ];
  skillsArray = [
    {
      skillIcon: '../../assets/images/Figma.svg',
      skillName: 'Figma',
    },
    {
      skillIcon: '../../assets/images/Sketch.svg',
      skillName: 'Sketch',
    },
    {
      skillIcon: '../../assets/images/XD.svg',
      skillName: 'XD',
    },
    {
      skillIcon: '../../assets/images/Photoshop.svg',
      skillName: 'Photoshop',
    },
    {
      skillIcon: '../../assets/images/Illustrator.svg',
      skillName: 'Illustrator',
    },
    {
      skillIcon: '../../assets/images/Miro.svg',
      skillName: 'Miro',
    },
  ];
  headerButtons = [
    { name: 'Work', linkName: '#myworks' },
    { name: 'Resume', linkName: '#myexp' },
    { name: 'Skills', linkName: '#myskills' },
    { name: 'Contact', linkName: '#contact' },
  ];
  setActiveClass(i: any) {
    this.selectedIndex = i;
  }
}
