
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
        'https://youtu.be/vEROU2XtPR8', type_id: '1', difficulty_id:'2', category_id:'1'},
      ]);
    });
};
