migrate(
  (app) => {
    try {
      const record = app.findFirstRecordByData('results', 'id', 'l6d23uooqi9m117')
      record.set('metric_value', 400)
      record.set('label', 'viagens gerenciadas')
      record.set('suffix', '+')
      app.save(record)
    } catch (err) {
      // Fallback via SQL if findFirstRecordByData fails
      app
        .db()
        .newQuery(
          'UPDATE results SET metric_value = 400, label = {:label}, suffix = {:suffix} WHERE id = {:id}',
        )
        .bind({
          label: 'viagens gerenciadas',
          suffix: '+',
          id: 'l6d23uooqi9m117',
        })
        .execute()
    }
  },
  (app) => {
    try {
      const record = app.findFirstRecordByData('results', 'id', 'l6d23uooqi9m117')
      record.set('metric_value', 1200)
      record.set('label', 'viagens gerenciadas')
      record.set('suffix', '+')
      app.save(record)
    } catch (err) {
      app
        .db()
        .newQuery(
          'UPDATE results SET metric_value = 1200, label = {:label}, suffix = {:suffix} WHERE id = {:id}',
        )
        .bind({
          label: 'viagens gerenciadas',
          suffix: '+',
          id: 'l6d23uooqi9m117',
        })
        .execute()
    }
  },
)
