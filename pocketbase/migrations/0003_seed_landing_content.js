migrate(
  (app) => {
    const users = app.findCollectionByNameOrId('_pb_users_auth_')

    // Idempotent: skip if user already exists
    try {
      app.findAuthRecordByEmail('_pb_users_auth_', 'mascarin1604@gmail.com')
    } catch (_) {
      const record = new Record(users)
      record.setEmail('mascarin1604@gmail.com')
      record.setPassword('Skip@Pass')
      record.setVerified(true)
      record.set('name', 'Admin')
      app.save(record)
    }
  },
  (app) => {
    try {
      const record = app.findAuthRecordByEmail('_pb_users_auth_', 'mascarin1604@gmail.com')
      app.delete(record)
    } catch (_) {}
  },
)
