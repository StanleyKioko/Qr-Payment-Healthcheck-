# API Health Check Service

## Overview
This service provides a health check endpoint for monitoring the status of the API and its connections to M-Pesa Daraja API. It returns valuable information about the system's health, environment configuration, and available endpoints.

## Features
- Real-time health status monitoring
- M-Pesa integration status verification
- Environment configuration display
- Available endpoints documentation

## API Endpoints

### Health Check
`GET /health`

Returns the current health status of the system including:
- Overall API status
- Current timestamp
- Environment information
- M-Pesa connection status
- List of available endpoints

#### Response Example
```json
{
  "status": "healthy",
  "timestamp": "2025-08-26T12:00:00.000Z",
  "environment": "development",
  "mpesa": {
    "baseUrl": "https://sandbox.safaricom.co.ke",
    "tokenStatus": "valid",
    "shortcode": "174379"
  },
  "endpoints": {
    "customerPayment": "/daraja/customer-payment",
    "merchantPayment": "/daraja/scan-qr",
    "callback": "/daraja/stk-callback",
    "testToken": "/daraja/test-token"
  }
}
```

### Available Endpoints
The service exposes the following M-Pesa related endpoints:
- `/daraja/customer-payment` - Handle customer payments
- `/daraja/scan-qr` - Process QR code scan payments
- `/daraja/stk-callback` - Callback for STK push responses
- `/daraja/test-token` - Test access token generation

