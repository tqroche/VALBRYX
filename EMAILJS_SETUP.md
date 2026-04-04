# EmailJS Setup Instructions

This website uses EmailJS to send contact form submissions to **valbryxrealty@gmail.com**.

## Setup Steps

### 1. Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

### 2. Add Email Service
1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your Gmail account (valbryxrealty@gmail.com)
5. Copy the **Service ID** (you'll need this later)

### 3. Create an Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Set up your template with these variables:
   ```
   Subject: New Contact Form Submission - {{subject}}
   
   From: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   
   ---
   Reply to: {{reply_to}}
   ```
4. In the **To Email** field, enter: `{{to_email}}` (this will be valbryxrealty@gmail.com)
5. Save the template and copy the **Template ID**

### 4. Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (also called User ID)
3. Copy this key

### 5. Update the Code
Open `/src/app/pages/ContactPage.tsx` and replace these values around line 71:

```typescript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID from step 2
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID from step 3
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key from step 4
```

### 6. Test the Form
1. Go to the contact page
2. Fill out the form and submit
3. Check valbryxrealty@gmail.com for the email
4. You should see a success message: "✓ Message Sent! We'll get back to you soon."

## Troubleshooting

- **Emails not sending?** Check the browser console for error messages
- **Wrong email address?** Verify the template has `{{to_email}}` in the "To Email" field
- **Quota exceeded?** EmailJS free tier allows 200 emails/month. Upgrade if needed.

## Alternative: Using Other Email Services

If you prefer not to use EmailJS, you can:
1. Set up a backend server with Node.js and Nodemailer
2. Use Supabase Edge Functions to handle email sending
3. Use other services like Formspree, SendGrid, or Mailgun
