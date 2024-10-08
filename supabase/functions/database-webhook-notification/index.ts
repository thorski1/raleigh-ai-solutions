import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const BREVO_API_KEY = Deno.env.get('BREVO_API_KEY')
const BREVO_NOTIFICATION_TEMPLATE_ID = parseInt(Deno.env.get('BREVO_NOTIFICATION_TEMPLATE_ID') || '1')
const NOTIFICATION_EMAIL = 'info@raleighai.solutions'

console.log("Database Webhook Notification Function initialized")

serve(async (req) => {
  console.log("Received request:", req.method, req.url)

  try {
    const authHeader = req.headers.get("Authorization")
    if (!authHeader) {
      throw new Error("Missing Authorization header")
    }

    if (!BREVO_API_KEY) {
      throw new Error("BREVO_API_KEY is not set")
    }

    const { table, record } = await req.json()
    console.log("Received data:", JSON.stringify({ table, record }))

    let subject = ''
    let content = ''

    switch (table) {
      case 'contacts':
        subject = 'New Contact Form Submission'
        content = `
          Name: ${record.name}
          Email: ${record.email}
          Message: ${record.message}
        `
        break
      case 'newsletter_subscribers':
        subject = 'New Newsletter Subscriber'
        content = `
          Email: ${record.email}
        `
        break
      case 'gated_asset_requests':
        subject = 'New Gated Asset Request'
        content = `
          Name: ${record.name}
          Email: ${record.email}
          Company: ${record.company}
          Asset Slug: ${record.asset_slug}
        `
        break
      default:
        throw new Error(`Unknown table: ${table}`)
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        templateId: BREVO_NOTIFICATION_TEMPLATE_ID,
        to: [{ email: NOTIFICATION_EMAIL }],
        sender: {
          email: 'info@raleighai.solutions',
          name: 'Raleigh AI'
        },
        params: {
          subject,
          content
        }
      })
    });

    const notificationEmailData = await response.json()
    console.log('Notification email sent successfully. Returned data:', JSON.stringify(notificationEmailData))

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    })
  } catch (error) {
    console.error('Error in Database Webhook Notification Function:', error)
    return new Response(JSON.stringify({ error: error.message || 'Failed to send notification email' }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    })
  }
})