// Health check endpoint
async function healthCheck(req, res) {
  try {
    console.log('Health check requested');
    
    const accessToken = await generateAccessToken();
    const tokenStatus = accessToken ? 'valid' : 'failed';
    
    res.status(200).json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      mpesa: {
        baseUrl: MPESA_BASE_URL,
        tokenStatus: tokenStatus,
        shortcode: process.env.MPESA_SHORTCODE
      },
      endpoints: {
        customerPayment: '/daraja/customer-payment',
        merchantPayment: '/daraja/scan-qr',
        callback: '/daraja/stk-callback',
        testToken: '/daraja/test-token'
      }
    });

  } catch (error) {
    res.status(500).json({
      status: 'unhealthy',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
}