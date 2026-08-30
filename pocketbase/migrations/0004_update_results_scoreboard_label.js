migrate(
  (app) => {
    try {
      const record = app.findFirstRecordByData('results', 'id', 'l6d23uooqi9m117')
      record.set('label', 'viagens gerenciadas')
      app.save(record)
    } catch (err) {
      // If not found by ID directly, try updating via filter or SQL
      app
        .db()
        .newQuery('UPDATE results SET label = {:label} WHERE id = {:id} OR label LIKE {:oldLabel}')
        .bind({
          label: 'viagens gerenciadas',
          id: 'l6d23uooqi9m117',
          oldLabel: '%viagens gerenciadas%',
        })
        .execute()
    }
  },
  (app) => {
    try {
      const record = app.findFirstRecordByData('results', 'id', 'l6d23uooqi9m117')
      record.set('label', 'viagens gerenciadas por ano')
      app.save(record)
    } catch (err) {
      app
        .db()
        .newQuery('UPDATE results SET label = {:label} WHERE id = {:id}')
        .bind({ label: 'viagens gerenciadas por ano', id: 'l6d23uooqi9m117' })
        .execute()
    }
  },
)
