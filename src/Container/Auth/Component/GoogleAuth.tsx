import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';


const GoogleAuth = () => {
const clientId = '662924670456-h160s5a1t3vv20ftdu31n60vq9s5f315.apps.googleusercontent.com';

return (
<GoogleOAuthProvider clientId={clientId}>
<GoogleLogin
onSuccess={credentialResponse => {
console.log(credentialResponse);
}}
onError={() => {
console.log('Login Failed');
}}
/>
</GoogleOAuthProvider>
);
};

export default GoogleAuth;