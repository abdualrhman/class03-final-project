exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        { title: 'Learn to write tests in node.js with Jest',
        description : 'Why should you begin to write tests and how do you begin? I explain in this video how to get started with Jest.', link: 'https://www.youtube.com/watch?v=Dnr8Mu1Bco4', type_id: '1', difficulty_id:'2', category_id:'2'},
        { title: 'Free Frontend Masters Courses',
        description : 'My Advanced Component Patterns and Testing React Applications are free on Frontend Masters for a limited time!',
        link:
        'https://blog.kentcdodds.com/free-frontend-masters-courses-%EF%B8%8F-for-a-week-f5eff638df5c?gi=e0a5396d6f3c', type_id: '2', difficulty_id:'1', category_id:'1'},
        { title: 'JavaScript Fundamentals For Beginners',
        description : 'This is a mini-course on the fundamentals of not only JavaScript, but programming in general',
        link:
        'https://youtu.be/vEROU2XtPR8', type_id: '1', difficulty_id:'1', category_id:'1'},
        { title: 'FLEXBOX FROGGY',
        description : 'welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code! ',
        link:
        'http://flexboxfroggy.com', type_id: '1', difficulty_id:'2', category_id:'1'
        },
        { title: 'How it feels to learn JavaScript in 2016',
        description : 'The following is inspired by the article “It’s the future” from Circle CI. This piece is just an opinion, and like any JavaScript framework, it shouldn’t be taken too seriously.',
        link:
        'https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f', type_id: '1', difficulty_id:'1', category_id:'1'
        },
        { title: 'Learn about Google Cloud at Google Denmark',
        description : 'Welcome to the first Google Developer Group Cloud in Copenhagen. This is really exciting as this will be a group focusing on the many things that happen in Cloud and on the Google Cloud platform',
        link:
        'https://www.meetup.com/Google-Cloud-Developer-Community-Copenhagen/events/249495883', type_id: '3', difficulty_id:'1', category_id:'3'
        },
        { title: 'KnexJs SQL query builder',
        description : 'Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use. It features both traditional node style callbacks as well as a promise interface for cleaner async flow control, a stream interface, full featured query ',
        link:
        'https://knexjs.org/', type_id: '3', difficulty_id:'2', category_id:'3'
        },
        { title: 'Infinite scroll techniques in React',
        description : 'Infinite scrolling is a web design technique that loads content continuously as the user scrolls down the page, eliminating the need for pagination. Content is often loaded asynchronously by making a request to the server. Often times this can improve the user experience on a website. But not always. Sometimes it’s terrible.',
        link:
        'https://blog.logrocket.com/infinite-scroll-techniques-in-react-adcfd7ff32bd', type_id: '1', difficulty_id:'3', category_id:'1'
        },
      ]);
    });
};
