migrate(
  (app) => {
    try {
      const record = app.findFirstRecordByData('results', 'id', '7e7fdlxuub3bkf2')
      record.set('metric_value', 15)
      record.set('label', 'de economia anual')
      record.set('suffix', '%')
      app.save(record)
    } catch (err) {
      // Fallback via SQL if findFirstRecordByData fails
      app
        .db()
        .newQuery(
          'UPDATE results SET metric_value = 15, label = {:label}, suffix = {:suffix} WHERE id = {:id}',
        )
        .bind({
          label: 'de economia anual',
          suffix: '%',
          id: '7e7fdlxuub3bkf2',
        })
        .execute()
    }
  },
  (app) => {
    try {
      const record = app.findFirstRecordByData('results', 'id', '7e7fdlxuub3bkf2')
      record.set('metric_value', 32)
      record.set('label', 'de economia média em passagens aéreas')
      record.set('suffix', '%')
      app.save(record)
    } catch (err) {
      app
        .db()
        .newQuery(
          'UPDATE results SET metric_value = 32, label = {:label}, suffix = {:suffix} WHERE id = {:id}',
        )
        .bind({
          label: 'de economia média em passagens aéreas',
          suffix: '%',
          id: '7e7fdlxuub3bkf2',
        })
        .execute()
    }
  },
)
