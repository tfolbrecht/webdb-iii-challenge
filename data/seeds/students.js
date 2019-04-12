exports.seed = function (knex, Promise) {
  return knex('students')
    .truncate()
    .then(function () {
      return knex('students').insert([{
          name: 'Gabe',
          cohort_id: '0'
        },
        {
          name: 'Josh',
          cohort_id: '1'
        },
        {
          name: 'Josh',
          cohort_id: '1'
        },
        {
          name: 'David',
          cohort_id: '1'
        },
        {
          name: 'Maks',
          cohort_id: '1'
        },
        {
          name: 'Rory',
          cohort_id: '2'
        }
      ]);
    });
};