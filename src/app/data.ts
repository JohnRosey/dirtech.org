import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  services = [
    {
      icon: 'computer', // Changez cela avec des icônes appropriées
      title: 'Frontend Development',
      about: 'I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b>, and <b>React.js</b>',
    },
    {
      icon: 'server', // Changez cela avec des icônes appropriées
      title: 'Backend Development',
      about: 'handle database, server, api using <b>Express</b> & other popular frameworks',
    },
    // ... (et ainsi de suite pour les autres services)
  ];

  languages = [
    {
      icon: 'circle', // Changez cela avec des icônes appropriées
      name: 'Python',
      level: '45',
    },
    {
      icon: 'circle', // Changez cela avec des icônes appropriées
      name: 'Java Script',
      level: '60',
    },
  ];

  projects = [
    {
      name: 'COVID Tracker',
      description: 'This app shows a statistical view about corona virus over the world',
      image_path: '/images/covid.jpg',
      deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
      github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
      category: ['react'],
      key_techs: ['React', 'Chart.js', 'Material UI'],
    },
    {
      name: 'Dev Talks',
      image_path: '/images/dev.jpg',
      deployed_url: 'https://dev-talks.herokuapp.com/',
      github_url: '',
      category: ['node', 'mongo', 'react'],
      description: 'Social Media app for developers who can share project,create posts,etc...',
      key_techs: ['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB'],
    },
    {
      name: 'Realtime Chat App',
      image_path: '/images/chatapp.jpg',
      deployed_url: 'https://sumit-chat.netlify.app/',
      github_url: '',
      category: ['node', 'react'],
      description:  'Basic Realtime Chat App with rooms',
      key_techs: ['React', 'Node.js', 'Express.js', 'Socket.io'],
        }

  ];
  getProjectsByCategory(category: string) {
    if (category === 'all') {
      return this.projects; // Si la catégorie est "all", renvoyer tous les projets
    } else {
      return this.projects.filter((project) => project.category.includes(category));
    }
  }



  constructor( ) {

  }
}
