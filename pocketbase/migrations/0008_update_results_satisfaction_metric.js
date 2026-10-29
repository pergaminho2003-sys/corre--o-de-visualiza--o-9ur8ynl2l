migrate(
  (app) => {
    try {
      const record = app.findFirstRecordByData('results', 'id', 'ho7q08ui3m45db8')
      record.set('metric_value', 100)
      record.set('suffix', '%')
      app.save(record)
    } catch (err) {
      // Fallback via SQL if findFirstRecordByData fails
      app
        .db()
        .newQuery('UPDATE results SET metric_value = 100, suffix = {:suffix} WHERE id = {:id}')
        .bind({
          suffix: '%',
          id: 'ho7q08ui3m45db8',
        })
        .execute()
    }
  },
  (app) => {
    try {
      const record = app.findFirstRecordByData('results', 'id', 'ho7q08ui3m45db8')
      record.set('metric_value', 98)
      record.set('suffix', '%')
      app.save(record)
    } catch (err) {
      app
        .db()
        .newQuery('UPDATE results SET metric_value = 98, suffix = {:suffix} WHERE id = {:id}')
        .bind({
          suffix: '%',
          id: 'ho7q08ui3m45db8',
        })
        .execute()
    }
  },
)
