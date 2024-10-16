   import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

   const BREVO_API_KEY = Deno.env.get('BREVO_API_KEY')
   const BREVO_TEMPLATE_ID = parseInt(Deno.env.get('BREVO_TEMPLATE_ID') || '1')

   console.log("Edge Function initialized")

   serve(async (req) => {
     console.log("Received request:", req.method, req.url)
     console.log("Authorization header:", req.headers.get("Authorization"))

     try {
       const authHeader = req.headers.get("Authorization")
       if (!authHeader) {
         throw new Error("Missing Authorization header")
       }

       const { record } = await req.json()
       console.log("Received record:", JSON.stringify(record))

       if (!BREVO_API_KEY) {
         throw new Error("BREVO_API_KEY is not set")
       }

       const response = await fetch('https://api.brevo.com/v3/smtp/email', {
         method: 'POST',
         headers: {
           'accept': 'application/json',
           'api-key': BREVO_API_KEY,
           'content-type': 'application/json'
         },
         body: JSON.stringify({
           templateId: BREVO_TEMPLATE_ID,
           to: [{ email: record.email, name: record.name }],
           params: {
             name: record.name,
             email: record.email,
             message: record.message
           }
         })
       });
       
       console.log('Notification email sent successfully. Returned data:', JSON.stringify(notificationEmailData))
       
       return new Response(JSON.stringify({ success: true }), {
         headers: { "Content-Type": "application/json" },
         status: 200,
       })
     } catch (error) {
       console.error('Error in Edge Function:', error)
       return new Response(JSON.stringify({ error: error.message || 'Failed to send email' }), {
         headers: { "Content-Type": "application/json" },
         status: 500,
       })
     }
   })