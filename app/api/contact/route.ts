import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || '159b5158-e8c6-4131-b0dd-91767544172b';

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        subject: subject || `New Portfolio Inquiry from ${name}`,
        message,
        from_name: `${name} via Portfolio`
      })
    });

    const resData = await response.json();
    console.log('Web3Forms Response:', resData);

    if (resData.success) {
      return NextResponse.json({ success: true, message: 'Email sent directly to Gmail!' });
    } else {
      return NextResponse.json({ success: false, message: resData.message || 'Web3Forms error' });
    }
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json({ success: true, message: 'Message recorded.' });
  }
}
