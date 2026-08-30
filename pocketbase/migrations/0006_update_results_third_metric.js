migrate(
  (app) => {
    try {
      const record = app.findFirstRecordByData('results', 'id', '37wyyftfzatmqdo')
      record.set('metric_value', 38)
      record.set('prefix', 'R$ ')
      record.set('suffix', ' mil')
      record.set('label', 'de economia por equipe')
      app.save(record)
    } catch (err) {
      // Fallback via SQL if findFirstRecordByData fails
      app
        .db()
        .newQuery(
          'UPDATE results SET metric_value = 38, prefix = {:prefix}, suffix = {:suffix}, label = {:label} WHERE id = {:id} OR label LIKE {:oldLabel}',
        )
        .bind({
          prefix: 'R$ ',
          suffix: ' mil',
          label: 'de economia por equipe',
          id: '37wyyftfzatmqdo',
          oldLabel: '%clubes atendidos%',
        })
        .execute()
    }
  },
  (app) => {
    try {
      const record = app.findFirstRecordByData('results', 'id', '37wyyftfzatmqdo')
      record.set('metric_value', 40)
      record.set('prefix', '')
      record.set('suffix', '+')
      record.set('label', 'clubes atendidos no Brasil')
      app.save(record)
    } catch (err) {
      app
        .db()
        .newQuery(
          'UPDATE results SET metric_value = 40, prefix = {:prefix}, suffix = {:suffix}, label = {:label} WHERE id = {:id}',
        )
        .bind({
          prefix: '',
          suffix: '+',
          label: 'clubes atendidos no Brasil',
          id: '37wyyftfzatmqdo',
        })
        .execute()
    }
  },
)
