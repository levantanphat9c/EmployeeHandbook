/* eslint-disable prettier/prettier */
export const api = {
  // url: 'http://192.168.0.105:5000/',
  url: 'https://dev.ecogiong.com:4443/',
  pathImage: 'https://cdn.ecogiong.com/bagang/',
  token:
    'eyJhbGciOiJSUzI1NiIsImtpZCI6IjEyYWZkYjliOGJmZmMyY2M4ZTU4NGQ2ZWE2ODlmYzEwYTg3MGI2NzgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZWNvLWdpb25nIiwiYXVkIjoiZWNvLWdpb25nIiwiYXV0aF90aW1lIjoxNjMxNTE0MDIxLCJ1c2VyX2lkIjoiTWVRM3FoUzhQck9RZk9Xa1JGeUVhZENaMlpVMiIsInN1YiI6Ik1lUTNxaFM4UHJPUWZPV2tSRnlFYWRDWjJaVTIiLCJpYXQiOjE2MzE1MTQwMjEsImV4cCI6MTYzMTUxNzYyMSwiZW1haWwiOiJzaGlwcGVyLmFwcEBnaW9uZy5jYWZlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInNoaXBwZXIuYXBwQGdpb25nLmNhZmUiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.tHlYGlz-pA7C3b8XG_8Xse7OGmWsEpu6iK9UhFi8NxTHUCfTe3OeCwbfkYv5hOj39BpEuqhhC6Z-ySyJ4Fg4LswaxcImL8A7uVJMPAHd7WJXbr6CU02fqY2dJUmBX48WZfKjrLz8QpBcpbpufOWA68lEQJXMGSqFi7UY4fX_xtFOX1ZZz70Jb5WFsYFX5Ys2cp0cjMiHG4o0Qsg-TkHDqqomtUbTV87TGMNl1kaNkgeegaVDUFOboMeIlqOJA-59QRJxE0-FhllNofJ5LEgHTUbZhUIxqvvAVsNwQ1zrGgHVdJlxuPuDeg16KkWWiDala1EN9NRr8sKTrL4fDrl1fw',
};

export const globalStyles = {
  colors: {
    primary: '#fcf7f0',
    secondary: '#ff4646',
    redBold: '#a01f1f',
    success: 'green',
    white: '#fff',
    black: '#000',
    textBlack: '#031c24',
  },
  padding: {
    xs: 4,
    sm: 8,
    md: 13,
    xl: 18,
  },
  margin: {
    xs: 4,
    sm: 8,
    md: 13,
    xl: 18,
  },
  fontSize: {
    h1: 28,
    h2: 21,
    h3: 16,
    normal: 14,
    medium: 18,
  },
};

export const shipperStatus = {
  NEW_ORDER: 1,
  ORDER_RECEIVED: 3,
  DELIVERING: 4,
  DELIVERED: 5,
  CANCEL: 8,
  RECEIVER_CONFIRMED: 17,
};

export const signalRStatus = {
  PUSH_ORDER_TO_SHIPPER: 1,
  SHIPPER_RECEIVED_ORDER: 2,
  SHIPPER_DELIVERED_ORDER: 3,
  CUSTOMER_CONFIRMED: 4,
  SHIPPER_REJECTED_ORDER: 8,
};
