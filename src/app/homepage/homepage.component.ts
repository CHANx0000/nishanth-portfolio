import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      message: ['', Validators.required],
    });
  }
  ngOnInit(): void {}
  selectedIndex = null;
  projectArray = [
    { projectURL: 'www.google.com' },
    { projectURL: 'www.google.com' },
    { projectURL: 'www.google.com' },
    { projectURL: 'www.google.com' },
    { projectURL: 'www.google.com' },
    { projectURL: 'www.google.com' },
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
  sendEmail(): void {
    if (this.contactForm.valid) {
      const templateParams = {
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        email: this.contactForm.value.email,
        phone: this.contactForm.value.phone,
        message: this.contactForm.value.message,
      };

      emailjs
        .send(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          templateParams,
          'YOUR_USER_ID'
        )
        .then(
          (response: { status: any; text: any }) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            this.contactForm.reset();
          },
          (error: any) => {
            console.error('FAILED...', error);
            alert('Message failed to send. Please try again later.');
          }
        );
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
