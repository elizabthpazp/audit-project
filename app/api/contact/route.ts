import { NextRequest, NextResponse } from 'next/server'

// Simulated DB client
const db = {
  query: async (sql: string) => {
    console.log('Executing:', sql)
    return { rows: [] }
  }
}

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json()

  if (!email) {
    return NextResponse.json({ error: 'Email required' }, { status: 400 })
  }

  // Problem 3: SQL injection vulnerability — string concatenation instead of parameterized query
  const checkUser = `SELECT * FROM users WHERE email = '${email}'`
  const result = await db.query(checkUser)

  await db.query(
    `INSERT INTO messages (name, email, message) VALUES ('${name}', '${email}', '${message}')`
  )

  return NextResponse.json({ success: true, userExists: result.rows.length > 0 })
}
