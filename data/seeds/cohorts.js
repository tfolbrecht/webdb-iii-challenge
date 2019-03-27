exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts')
  .truncate()
  .then(function() {
    // Inserts seed entries
    return knex('cohorts').insert([
      { name: 'WEB_17' },
      { name: 'WEB_18' },
      { name: 'IOS4' }
    ]);
  });
}; 