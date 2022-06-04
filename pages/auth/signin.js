import React from 'react';
import { getProviders, signIn as SignIntoProvider } from 'next-auth/react';
import GoogleIcon from '@mui/icons-material/Google';
import Image from 'next/image';

function signIn({ providers }) {
  // console.log(providers);
  return (
    <>
      <div className="flex items-center mt-5 justify-center ">
        <div>
          <div className="text-center">
            <Image
              src="/usp-logo.png"
              alt=""
              width="150"
              height="150"
              className=""
            />
            <div className="mt-4">
              {Object.values(providers).map((provider) => (
                <div key={provider.name} className="mb-2">
                  <button
                    onClick={() =>
                      SignIntoProvider(provider.id, { callbackUrl: '/' })
                    }
                    className="bg-blue-500 rounded-lg text-white p-3">
                    Sign in with {provider.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
export default signIn;
