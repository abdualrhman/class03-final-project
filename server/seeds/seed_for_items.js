exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        { title: 'Learn to write tests in node.js with Jest',
        description : 'Why should you begin to write tests and how do you begin? I explain in this video how to get started with Jest.', link: 'https://www.youtube.com/watch?v=Dnr8Mu1Bco4', type_id: '1', difficulty_id:'2', category_id:'2'},
        { title: 'Free Frontend Masters Courses',
        description : 'Discover how to simplify your large React applications with advanced component patterns!. You’ll learn patterns like Compound Components, Render Props, Prop Getters, Controlled Props, and how to take advantage of React’s new Context API to share state throughout the application. This course is for developers who have experience building React applications and desire to scale their applications with components that are both simpler and more flexible!',
        link:
        'https://blog.kentcdodds.com/free-frontend-masters-courses-%EF%B8%8F-for-a-week-f5eff638df5c?gi=e0a5396d6f3c', type_id: '2', difficulty_id:'1', category_id:'1'},
        { title: 'JavaScript Fundamentals For Beginners',
        description : 'This is a mini-course on the fundamentals of not only JavaScript, but programming in general. in this mini-course you will learn verey usefull things, and it will give a better JavaScript understanding.',
        link:
        'https://youtu.be/vEROU2XtPR8', type_id: '1', difficulty_id:'1', category_id:'1'},
        { title: 'FLEXBOX FROGGY',
        description : 'welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code!. this game will help you practice and understand FLEXBOX in a fun way',
        link:
        'http://flexboxfroggy.com', type_id: '3', difficulty_id:'2', category_id:'1'
        },
        { title: 'Vue.js 2 Quickstart Tutorial',
        description : 'Vue is a progressive JavaScript framework that focuses on building user interfaces. As it only works in the “view layer” it makes no assumption of middleware and backend and therefore can be integrated easily into other projects and libraries. Vue.js offers a lot of functionality for the view layer and can be used for building powerful single-page webapps.',
        link:
        'https://codingthesmartway.com/vue-js-2-quickstart-tutorial-2017/', type_id: '2', difficulty_id:'3', category_id:'1'
        },
        { title: 'How it feels to learn JavaScript in 2016',
        description : 'The following is inspired by the article “It’s the future” from Circle CI. This piece is just an opinion, and like any JavaScript framework, it shouldn’t be taken too seriously.',
        link:
        'https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f', type_id: '1', difficulty_id:'1', category_id:'1'
        },
        { title: 'Learn about Google Cloud at Google Denmark',
        description : 'Welcome to the first Google Developer Group Cloud in Copenhagen. This is really exciting as this will be a group focusing on the many things that happen in Cloud and on the Google Cloud platform. We will focus on learning and talking use-cases for the exciting solutions in Machine Learning with Tensorflow and hosting with Kubernetes and Serverless.',
        link:
        'https://www.meetup.com/Google-Cloud-Developer-Community-Copenhagen/events/249495883', type_id: '3', difficulty_id:'1', category_id:'3'
        },
        { title: 'KnexJs SQL query builder',
        description : 'Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use. It features both traditional node style callbacks as well as a promise interface for cleaner async flow control, a stream interface, full featured query. ',
        link:
        'https://knexjs.org/', type_id: '3', difficulty_id:'2', category_id:'3'
        },
        { title: 'Infinite scroll techniques in React',
        description : 'Infinite scrolling is a web design technique that loads content continuously as the user scrolls down the page, eliminating the need for pagination. Content is often loaded asynchronously by making a request to the server. Often times this can improve the user experience on a website. But not always. Sometimes it’s terrible.',
        link:
        'https://blog.logrocket.com/infinite-scroll-techniques-in-react-adcfd7ff32bd', type_id: '2', difficulty_id:'3', category_id:'1'
        },
        { title: 'How to Structure Your Site for Optimal User Experiences',
        description : 'What kind of content should you have on your site? How should you structure the menu? What should be the first-level menu items? One or two menus? What should the menu links be called? This post will give you the answers. Information architecture is no joke, yet overwhelming majority of businesses have structured their site using the IMO method – “in my opinion”. While common sense is a useful tool and a lot of sites are very simple (e.g. 5 pages total), there’s a better way to go about it.',
        link:
        'https://conversionxl.com/blog/website-information-architecture-optimal-user-experience/', type_id: '2', difficulty_id:'2', category_id:'5'
        },
        { title: 'Git-it',
        description : 'Step-by-step instructions for each of the challenges in the Git-it workshop. This guide comes with Git-it when you install it so it works offline and you can use it as a resource at anytime (see the instructions when you select a challenge in terminal). Have fun!',
        link:
        'http://jlord.us/git-it/', type_id: '3', difficulty_id:'1', category_id:'4'
        },
        { title: 'gittutorial - A tutorial introduction to Git',
        description : 'This tutorial explains how to import a new project into Git, make changes to it, and share changes with other developers.If you are instead primarily interested in using Git to fetch a project, for example, to test the latest version, you may prefer to start with the first two chapters of The Git User’s Manual.',
        link:
        'https://git-scm.com/docs/gittutorial', type_id: '3', difficulty_id:'2', category_id:'4'
        },
      ]);
    });
};
