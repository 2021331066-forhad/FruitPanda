// Test API connection to deployed server
const API_BASE_URL = 'https://fruit-panda-server.vercel.app/api';

async function testAPI() {
  console.log('Testing API connection...');
  
  try {
    // Test health endpoint
    const healthResponse = await fetch(`${API_BASE_URL}/health`);
    const healthData = await healthResponse.json();
    console.log('✅ Health check:', healthData);
    
    // Test basic endpoint
    const testResponse = await fetch(`${API_BASE_URL}/test`);
    const testData = await testResponse.json();
    console.log('✅ Test endpoint:', testData);
    
  } catch (error) {
    console.error('❌ API test failed:', error.message);
  }
}

testAPI(); 