import excuteQuery from '../../../utils/db'

export default async function handler(req, res) {
  const {
    query:  { id },
    method,
  } = req

  const title = req.body

  switch (method) {
    case 'GET':
      let offset = 0;
      let limit = 1000;
      const result = await excuteQuery({
          query: `SELECT * FROM companies LIMIT ${limit} OFFSET ${offset}`
      });
      
      res.status(200).json({ id, title: `Post ::: #${id}`, data: JSON.parse(JSON.stringify(result)) })
      break
    case 'POST':
      res.status(200).json({ id, title: title || `Post ::: #${id}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }

}