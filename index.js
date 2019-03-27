const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development)
const server = express();

server.use(helmet());
server.use(express.json());

// endpoints here
server.get('/api/cohorts', (req, res) => {
  db.select().from('cohorts')
    .then(cohorts => res.status(200).json(cohorts))
    .catch(err => res.status(500).json(err))
})

server.post('/api/cohorts', (req, res) => {
  db.select().from('cohorts')
    .then(cohorts => res.status(200).json(cohorts))
    .catch(err => res.status(500).json(err))
})

server.get('/api/cohorts/:id', (req, res) => {
  const id = req.params.id;
  db.select().where({id}).first().from('cohorts')
    .then(cohort => {
      if(cohort) {
        res.status(200).json(cohort)
      } else {
        res.status(404).json({message: 'we cannot find that cohort!'})
      }
    })
    .catch(err => res.status(500).json(err))
})

server.get('/api/cohorts/:id/students', (req, res) => {
  const id = req.params.id;
  db.select().where({id}).first().from('cohorts')
    .then(cohort => {
      if(cohort) {
        res.status(200).json(cohort)
      } else {
        res.status(404).json({message: 'we cannot find that cohort!'})
      }
    })
    .catch(err => res.status(500).json(err))
})

server.put('/api/cohorts/:id/students', (req, res) => {
  const id = req.params.id;
  db.select().where({id}).first().from('cohorts')
    .then(cohort => {
      if(cohort) {
        res.status(200).json(cohort)
      } else {
        res.status(404).json({message: 'we cannot find that cohort!'})
      }
    })
    .catch(err => res.status(500).json(err))
})

server.put('/api/cohorts/:id', (req, res) => {
  const id = req.params.id;
  db('cohorts').where({ id }).update(req.body)
    .then(cohort => {
      if(cohort){
        res.status(201).json({message: 'cohort updated'})
      }
      else {
        res.status(404).json({message: 'we cant find that cohort'})
      }
    })
    .catch(err => console.log(err))
})

server.delete('/api/cohorts/:id', (req, res) => {
  const id = req.params.id;
  db('cohorts').where('id', id).del()
    .then(del => {
      if(del) {
        res.status(204)
      } else {
        res.status(404).json({message: 'we cannot find that cohort'})
      }
    })
    .catch(err => res.status(500).json(err))
})

server.post('/api/students', (req, res) => {
  db('students').then(rows => {
      res.status(201).json(rows)
    })
    .catch(err => {
      res.status(500).json({err: 'Could not insert students'})
    })
})

server.get('/api/students', (req, res) => {
  db('students').then(rows => {
      res.status(201).json(rows)
    })
    .catch(err => {
      res.status(500).json({err: 'Could not find students'})
    })
})

server.put('/api/students', (req, res) => {
  db('students').then(rows => {
      res.status(201).json(rows)
    })
    .catch(err => {
      res.status(500).json({err: 'Could not insert students'})
    })
})

server.get('/api/students/:id', (req, res) => {
  const id = req.params.id;
  db('students').where('id', id).del()
    .then(del => {
      if(del) {
        res.status(204)
      } else {
        res.status(404).json({message: 'Could not find students'})
      }
    })
    .catch(err => res.status(500).json(err))
})

server.put('/api/students/:id', (req, res) => {
  const id = req.params.id;
  db('students').where('id', id).del()
    .then(del => {
      if(del) {
        res.status(204)
      } else {
        res.status(404).json({message: 'Could not find students'})
      }
    })
    .catch(err => res.status(500).json(err))
})

server.post('/api/students/:id', (req, res) => {
  const id = req.params.id;
  db('students').where('id', id).del()
    .then(del => {
      if(del) {
        res.status(204)
      } else {
        res.status(404).json({message: 'Could not find students'})
      }
    })
    .catch(err => res.status(500).json(err))
})

server.delete('/api/students/:id', (req, res) => {
  const id = req.params.id;
  db('students').where('id', id).del()
    .then(del => {
      if(del) {
        res.status(204)
      } else {
        res.status(404).json({message: 'Could not find students'})
      }
    })
    .catch(err => res.status(500).json(err))
})

const port = 8000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});