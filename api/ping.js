export default async function handler(req, res) {
  const renderUrl = "https://cloud-cost-optimization-project.onrender.com/api/estimate"

  try {
    const response = await fetch(renderUrl)
    const text = await response.text()

    res.status(200).json({ status: 'Pinged successfully', response: text.slice(0, 100) })
  } catch (err) {
    res.status(500).json({ error: 'Failed to ping backend', details: err.message })
  }
}