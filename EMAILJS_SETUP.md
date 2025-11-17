# EmailJS Setup Guide

## What is EmailJS?

EmailJS is a free service that allows you to send emails directly from your website without needing a backend server. It's secure, reliable, and perfect for contact forms.

---

## Current Configuration

Your website is already configured with EmailJS. Here are the details:

**Service Details:**
- Service ID: `service_p2o29va`
- Template ID: `template_z5x9u8h`  
- Public Key: `VtEh_wxJKe9dJJmYS`
- Recipient Email: `adityakatkar@gmail.com`

---

## How It Works

1. User submits contact form on your website
2. JavaScript sends the form data to EmailJS
3. EmailJS processes the data and sends an email
4. Email arrives at `adityakatkar@gmail.com`
5. User sees a success notification

---

## Testing the Contact Form

1. Go to your website's Contact page
2. Fill in the form with test data:
   - Name: Test User
   - Email: test@example.com
   - Subject: Test Message
   - Message: This is a test message to verify the email system is working.

3. Click "Send Message"
4. Wait for the success notification
5. Check your email inbox for the message

---

## Email Structure

When someone submits the form, you'll receive an email with:

```
From: EmailJS Service
Subject: [Subject entered by user]

Message Content:
================
Name: [User's Full Name]
Email: [User's Email Address]
Subject: [User's Subject]

Message:
[User's Message Text]
```

---

## If Emails Aren't Arriving

### Check 1: Gmail Settings
- Gmail might filter emails as spam
- Check your spam folder first
- Add "noreply@emailjs.com" to contacts to whitelist

### Check 2: Email Limits
- Free tier has rate limits
- Currently unlimited for small-scale use
- Check EmailJS dashboard for quota info

### Check 3: Credentials
- Verify the Service ID, Template ID, and Public Key are correct
- These are already configured in your website

### Check 4: Browser Console
- Right-click → Inspect → Console tab
- Look for any error messages
- Check for EmailJS loading errors

---

## Customization Options

### Change Recipient Email

Edit `pages/contact.html` and find this line in the script section:

```javascript
const templateParams = {
    from_name: document.getElementById('name').value,
    from_email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
    to_email: 'adityakatkar@gmail.com'  // ← Change this
};
```

Replace `adityakatkar@gmail.com` with your desired email address.

### Manage Your EmailJS Account

If you want to manage the service, credentials, or create a new template:

1. Visit: https://www.emailjs.com/
2. Log in or create an account
3. Go to Dashboard
4. Manage your services and templates

---

## Free Tier Limits

EmailJS offers a generous free tier:
- 200 free emails per month
- Unlimited subsequent months if verified
- One service
- One email template
- Professional support

For more information: https://www.emailjs.com/pricing/

---

## Alternative Services

If you ever want to switch to a different service:
- Formspree.io
- Basin
- Getform
- Smart Forms
- JotForm

---

## Security Notes

### What's Safe:
- Public key is intentionally public (it's called "public key")
- Public key alone cannot access private data
- Service ID is also meant to be public

### What's Protected:
- Your email address
- The actual email service connection
- Email delivery is encrypted

### Best Practices:
- Regularly monitor your email for submissions
- Spam filter important messages appropriately
- Consider rate limiting if getting spam submissions
- Monitor EmailJS dashboard for unusual activity

---

## Troubleshooting

### Issue: "Failed to send message"
**Solution:** 
- Check internet connection
- Check browser console for errors
- Verify form fields are filled correctly
- Try again in a few seconds

### Issue: Email arrives but with incomplete data
**Solution:**
- Check form was filled completely
- Verify character limits are respected
- Check EmailJS template is correct

### Issue: Emails going to spam
**Solution:**
- Add noreply@emailjs.com to contacts
- Check spam filter rules
- Mark emails as "Not Spam" in Gmail

### Issue: "Service not available"
**Solution:**
- Check EmailJS service status: https://status.emailjs.com/
- Verify internet connection
- Try with a VPN if access is blocked

---

## Getting Help

### EmailJS Support:
- Website: https://www.emailjs.com/
- Documentation: https://www.emailjs.com/docs/
- Contact Support: Support available for paid plans

### Contact Form Help:
- Check the IMPROVEMENTS.md file for details
- Review the form validation logic
- Check browser developer console for errors

---

## Next Steps

1. **Test the Form** - Try sending a test message
2. **Monitor Email** - Check that emails arrive correctly
3. **Share Your Contact Page** - Let people know they can reach you
4. **Track Submissions** - Keep your inbox organized

---

**Enjoy your new contact system!** 📧✨

Your website now has professional email integration without any backend server required.

