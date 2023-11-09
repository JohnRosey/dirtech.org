import { Injectable } from '@angular/core';
export interface Service {
  iconUrl: string;
  title: string;
  about: string;
  // Ajoutez d'autres propriétés si nécessaire, comme pour les icônes
}

export interface Skill {
  iconUrl: string;
  name: string;
  level: string;
  // Ajoutez d'autres propriétés si nécessaire
}
export interface Project {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: string[];
  key_techs: string[];
}
@Injectable({
  providedIn: 'root',
})



export class DataService {
 private services: Service[] = [
    {
      iconUrl: 'computer', // Changez cela avec des icônes appropriées
      title: 'Frontend Development',
      about: 'I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b>, and <b>React.js</b>',
    },
    {
      iconUrl: 'server', // Changez cela avec des icônes appropriées
      title: 'Backend Development',
      about: 'handle database, server, api using <b>Express</b> & other popular frameworks',
    },
    // ... (et ainsi de suite pour les autres services)
  ];

  private skills: Skill[] = [
    {
      iconUrl: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-angular-a-typescript-based-open-source-web-application-framework-logo-color-tal-revivo.png', // Changez cela avec des icônes appropriées
      name: 'Angular',
      level: '45',
    },
    {
      iconUrl: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-python-an-interpreted-high-level-general-purpose-programming-language-logo-shadow-tal-revivo.png', // Changez cela avec des icônes appropriées
      name: 'Python',
      level: '60',
    },
    {
      iconUrl: 'https://img.icons8.com/color/48/html-5--v1.png', // Changez cela avec des icônes appropriées
      name: 'HTML',
      level: '80',
    },
    {
      iconUrl: 'https://img.icons8.com/fluency/48/css3.png', // Changez cela avec des icônes appropriées
      name: 'CSS',
      level: '80',
    },
    {
      iconUrl: 'https://img.icons8.com/fluency/48/javascript.png', // Changez cela avec des icônes appropriées
      name: 'JavaScript',
      level: '70',
    },
    {
      iconUrl: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-typescript-an-open-source-programming-language-developed-and-maintained-by-microsoft-logo-color-tal-revivo.png', // Changez cela avec des icônes appropriées
      name: 'TypeScript',
      level: '70',
    },
    {
      iconUrl: 'https://img.icons8.com/color/48/nodejs.png', // Changez cela avec des icônes appropriées
      name: 'Node.js',
      level: '60',
    },
    {
      iconUrl: 'https://img.icons8.com/color/48/mongodb.png', // Changez cela avec des icônes appropriées
      name: 'MongoDB',
      level: '60',
    },
    {name:'Java',
    level:'70',
    iconUrl:'https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png'
    },
    {name:'C#',
    level:'60',
    iconUrl:'https://img.icons8.com/color/48/000000/c-sharp-logo.png'},
    {name:'dart',
    level:'60',
    iconUrl:'https://img.icons8.com/color/48/000000/dart.png'}, 
    {name:'flutter',
    level:'60',
    iconUrl:'https://img.icons8.com/color/48/000000/flutter.png'},    
    {name:'firebase',
    level:'60',
    iconUrl:'https://img.icons8.com/color/48/000000/firebase.png'}, 
    {name:'sql',
    level:'60',
    iconUrl:'https://img.icons8.com/color/48/000000/sql.png'},
    {name:'git',
    level:'60',
    iconUrl:'https://img.icons8.com/color/48/000000/git.png'},
    {name:'bash',
    level:'60',
    iconUrl:'https://img.icons8.com/plasticine/48/000000/bash.png'},


  
    
  ];

   private projects: Project[] = [
    {
      name: 'MarketPlace',
      description: 'This app is a marketplace where you can buy and sell products for Burkina Faso people with cash on delivery',
      image_path: '/images/covid.jpg',
      deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
      github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
      category: ['flutter'],
      key_techs: ['Dart', 'Android', 'IOS'],
    },
    {
      name: 'Dev Talks',
      image_path: '/images/dev.jpg',
      deployed_url: 'https://dev-talks.herokuapp.com/',
      github_url: '',
      category: ['Java', 'nodejs', 'Typescript'],
      description: 'Social Media app for developers who can share project,create posts,etc...',
      key_techs: ['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB'],
    },
    {
      name: 'Realtime Chat App',
      image_path: '/images/chatapp.jpg',
      deployed_url: 'https://sumit-chat.netlify.app/',
      github_url: '',
      category: ['Java'],
      description:  'Basic Realtime Chat App with rooms',
      key_techs: ['Java', 'RMI','Socket.io'],
        },
    {
      name: 'Coiffex',
      image_path: '/images/covid.jpg',
      deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
      github_url: '',
      category: ['Java','Angular','SpringBoot','PostgreSQL'],
      description: 'This app is use for peopke who want to book an appointment with a hairdresser',
      key_techs: ['Java','Angular','SpringBoot','PostgreSQL'],
    },

  ];
  getProjectsByCategory(category: string) {
    if (category === 'all') {
      return this.projects; // Si la catégorie est "all", renvoyer tous les projets
    } else {
      return this.projects.filter((project) => project.category.includes(category));
    }
  }
  getServices(): Service[] {
    return this.services;
  }
getProjects(): Project[] {
    return this.projects;
  }
  getSkills(): Skill[] {
    return this.skills;
  }



  constructor( ) {

  }
}
